import fs from "fs";
import path from "path";
import { services, projects } from "@/lib/data";
import { SEARCH_ROUTES } from "@/lib/searchRoutes";

const BLOG_DIRECTORIES = [
  { dir: path.join(process.cwd(), "app", "(tr)", "blog"), baseHref: "/blog", icon: "\u{1F4DD}" },
  { dir: path.join(process.cwd(), "app", "en", "blog"), baseHref: "/en/blog", icon: "\u{1F4DD}" },
];

const EN_SERVICE_ROUTES = [
  { href: "/en/concert-podium-rental", label: "Concert Podium Rental", icon: "\u{1F3B5}", keywords: ["concert", "podium"] },
  { href: "/en/podium-rental-prices", label: "Podium Rental Prices", icon: "\u{1F4B0}", keywords: ["price", "podium"] },
  { href: "/en/runway-podium-rental", label: "Runway Podium Rental", icon: "\u{1F457}", keywords: ["runway", "fashion"] },
];

const TR_SERVICE_ROUTES = [
  { href: "/konser-icin-podyum-kiralama", label: "Konser Icin Podyum Kiralama", icon: "\u{1F3B5}", keywords: ["konser", "podyum"] },
  { href: "/podyum-kiralama-fiyatlari", label: "Podyum Kiralama Fiyatlari", icon: "\u{1F4B0}", keywords: ["fiyat", "podyum"] },
  { href: "/defile-podyum-kiralama", label: "Defile Podyum Kiralama", icon: "\u{1F457}", keywords: ["defile", "moda"] },
];

const slugToTitle = (slug) =>
  slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const getBlogRoutes = () =>
  BLOG_DIRECTORIES.flatMap(({ dir, baseHref, icon }) => {
    if (!fs.existsSync(dir)) return [];

    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => {
        const slug = entry.name;
        return {
          href: `${baseHref}/${slug}`,
          label: slugToTitle(slug),
          keywords: slug.split("-"),
          icon,
        };
      });
  });

const getServiceRoutes = () =>
  (services ?? []).map((service) => ({
    href: `/${service.slug}`,
    label: service.title,
    keywords: service.keywords ?? [],
    icon: "\u{1F6E0}",
  }));

const getProjectRoutes = () =>
  (projects ?? []).map((project) => ({
    href: `/projeler/${project.slug}`,
    label: project.title,
    keywords: project.keywords ?? [],
    icon: "\u{1F4BC}",
  }));

const uniqByHref = (items) => {
  const map = new Map();

  items.forEach((item) => {
    if (!item?.href || map.has(item.href)) return;
    map.set(item.href, item);
  });

  return Array.from(map.values());
};

export function getSearchIndex() {
  return uniqByHref([
    ...SEARCH_ROUTES,
    ...TR_SERVICE_ROUTES,
    ...EN_SERVICE_ROUTES,
    ...getServiceRoutes(),
    ...getProjectRoutes(),
    ...getBlogRoutes(),
  ]);
}
