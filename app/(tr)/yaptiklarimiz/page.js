import Link from "next/link";
import { ArrowRight, Clapperboard, PlayCircle, Sparkles } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";

export const revalidate = 86400;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/yaptiklarimiz";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
