import Link from "next/link";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";

export const revalidate = 86400;

export const metadata = {
  title: "Yaptıklarımız | Sahneva Video Projeleri",
  description: "Sahneva tarafından tamamlanan sahne, LED ekran, podyum, çadır, ses ve ışık projelerini video olarak inceleyin.",
};

const videos = [
  {
    id: "z4DqZERYXkM",
    title: "Konser Sahnes