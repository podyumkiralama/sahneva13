"use client";

import dynamic from "next/dynamic";

const SahnevaShaderGradient = dynamic(
  () => import("./SahnevaShaderGradient.client"),
  {
    ssr: false,
    loading: () => null,
  },
);

export default function SahnevaShaderGradientLazy(props) {
  return <SahnevaShaderGradient {...props} />;
}
