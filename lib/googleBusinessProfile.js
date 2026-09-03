import "server-only";

import { unstable_cache } from "next/cache";

const GOOGLE_BUSINESS_PROFILE_URL = "https://g.page/r/CZhkMzkNOdgnEBI";
const CACHE_SECONDS = 24 * 60 * 60;
const REQUEST_TIMEOUT_MS = 5_000;

function readConfig() {
  const config = {
    clientId: process.env.GOOGLE_BUSINESS_PROFILE_CLIENT_ID?.trim(),
    clientSecret: process.env.GOOGLE_BUSINESS_PROFILE_CLIENT_SECRET?.trim(),
    refreshToken: process.env.GOOGLE_BUSINESS_PROFILE_REFRESH_TOKEN?.trim(),
    accountId: process.env.GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID?.trim(),
    locationId: process.env.GOOGLE_BUSINESS_PROFILE_LOCATION_ID?.trim(),
  };

  return Object.values(config).every(Boolean) ? config : null;
}

async function fetchWithTimeout(url, options) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeoutId);
  }
}

async function requestAccessToken(config) {
  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    refresh_token: config.refreshToken,
    grant_type: "refresh_token",
  });

  const response = await fetchWithTimeout("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`OAuth token request failed with HTTP ${response.status}`);
  }

  const payload = await response.json();
  if (typeof payload?.access_token !== "string" || !payload.access_token) {
    throw new Error("OAuth token response did not include an access token");
  }

  return payload.access_token;
}

async function fetchRatingUncached() {
  const config = readConfig();
  if (!config) {
    throw new Error("Google Business Profile API is not configured");
  }

  const accessToken = await requestAccessToken(config);
  const accountId = encodeURIComponent(config.accountId);
  const locationId = encodeURIComponent(config.locationId);
  const response = await fetchWithTimeout(
    `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews?pageSize=1`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(`Reviews request failed with HTTP ${response.status}`);
  }

  const payload = await response.json();
  const rating = Number(payload?.averageRating);
  const reviewCount = Number(payload?.totalReviewCount);

  if (
    !Number.isFinite(rating) ||
    rating < 1 ||
    rating > 5 ||
    !Number.isInteger(reviewCount) ||
    reviewCount < 1
  ) {
    throw new Error("Reviews response did not include a valid rating and review count");
  }

  return {
    rating,
    reviewCount,
    profileUrl: GOOGLE_BUSINESS_PROFILE_URL,
  };
}

const getCachedRating = unstable_cache(
  fetchRatingUncached,
  ["google-business-profile-rating-v1"],
  {
    revalidate: CACHE_SECONDS,
    tags: ["google-business-profile-rating"],
  }
);

/**
 * Returns only live API data. Missing credentials, API errors and malformed
 * responses deliberately resolve to null so the UI never falls back to a
 * hand-written rating or review count.
 */
export async function getGoogleBusinessProfileRating() {
  if (!readConfig()) return null;

  try {
    return await getCachedRating();
  } catch (error) {
    console.warn(`[google-business-profile] ${error instanceof Error ? error.message : "Request failed"}`);
    return null;
  }
}
