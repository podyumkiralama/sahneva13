export default function SahnevaGradientGlow({
  mode = "section",
  className = "",
}) {
  const isHero = mode === "hero";

  const wrapperClass = "absolute inset-0 overflow-hidden pointer-events-none";

  const blobClass = isHero
    ? "sahneva-stripe-blob absolute -right-[22%] -top-[26%] h-[820px] w-[1120px] rotate-[14deg] opacity-[0.66] md:-right-[16%] md:-top-[24%] lg:-right-[12%]"
    : "absolute -right-28 -top-36 h-[24rem] w-[24rem] rotate-[-16deg] rounded-bl-[42%] md:-right-16 md:-top-32 md:h-[32rem] md:w-[32rem]";

  const sideGlowClass = isHero
    ? "sahneva-stripe-soft absolute right-[2%] top-[52%] h-36 w-36 rounded-full bg-cyan-200/8 blur-3xl md:right-[5%] md:top-[46%] md:h-44 md:w-44"
    : "absolute right-[10%] top-[20%] h-40 w-40 rounded-full bg-cyan-300/14 blur-3xl md:h-56 md:w-56";

  const lowerGlowClass = isHero
    ? ""
    : "absolute left-[8%] bottom-[-8%] h-36 w-36 rounded-full bg-indigo-500/14 blur-3xl md:left-[16%] md:h-56 md:w-56";
  const sheenMask = isHero
    ? "radial-gradient(ellipse at 86% 22%, rgba(0,0,0,1) 0%, rgba(0,0,0,.98) 22%, rgba(0,0,0,.76) 40%, rgba(0,0,0,.24) 56%, transparent 76%)"
    : "linear-gradient(135deg, transparent 12%, rgba(0,0,0,0.72) 32%, rgba(0,0,0,1) 54%, rgba(0,0,0,0.7) 72%, transparent 96%)";

  if (isHero) {
    return (
      <div className={`${wrapperClass} ${className}`} aria-hidden="true">
        <div
          className={blobClass}
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 22% 30%, rgba(224,242,254,.55), transparent 18%), radial-gradient(ellipse at 38% 42%, rgba(103,232,249,.48), transparent 26%), radial-gradient(ellipse at 58% 36%, rgba(59,130,246,.46), transparent 34%), radial-gradient(ellipse at 78% 28%, rgba(99,102,241,.38), transparent 32%), linear-gradient(128deg, rgba(14,165,233,.38), rgba(59,130,246,.42), rgba(79,70,229,.36), rgba(124,58,237,.28)), conic-gradient(from 220deg at 78% 72%, rgba(255,255,255,.18), rgba(125,211,252,.10), rgba(79,70,229,.08), transparent 90deg)",
            backgroundSize: "140% 140%",
            clipPath: "ellipse(96% 76% at 90% 18%)",
            maskImage:
              "radial-gradient(ellipse at 90% 18%, rgba(0,0,0,1) 0%, rgba(0,0,0,.98) 24%, rgba(0,0,0,.82) 46%, rgba(0,0,0,.36) 64%, transparent 84%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 90% 18%, rgba(0,0,0,1) 0%, rgba(0,0,0,.98) 24%, rgba(0,0,0,.82) 46%, rgba(0,0,0,.36) 64%, transparent 84%)",
          }}
        />
        <div
          className="sahneva-stripe-lines absolute right-[-2%] top-[0%] h-[520px] w-[500px] rotate-[15deg] opacity-[0.14] md:right-[2%] md:top-[-2%]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(110deg, rgba(255,255,255,.13) 0px, rgba(255,255,255,.13) 1px, transparent 2px, transparent 11px)",
            backgroundSize: "190px 190px",
            maskImage:
              "radial-gradient(ellipse at 82% 24%, rgba(0,0,0,1) 0%, rgba(0,0,0,.92) 18%, rgba(0,0,0,.68) 34%, rgba(0,0,0,.20) 52%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 82% 24%, rgba(0,0,0,1) 0%, rgba(0,0,0,.92) 18%, rgba(0,0,0,.68) 34%, rgba(0,0,0,.20) 52%, transparent 72%)",
          }}
        />
        <div className={sideGlowClass} />
      </div>
    );
  }

  return (
    <div className={`${wrapperClass} ${className}`} aria-hidden="true">
      <div
        className={`${blobClass} sahneva-gradient-glow-float opacity-[0.92] blur-[1px] md:blur-[2px]`}
        style={{
          backgroundImage:
            "radial-gradient(circle_at_20%_25%, rgba(56,189,248,.70), transparent 32%), radial-gradient(circle_at_55%_35%, rgba(99,102,241,.75), transparent 34%), radial-gradient(circle_at_80%_20%, rgba(168,85,247,.62), transparent 30%), linear-gradient(135deg, rgba(14,165,233,.92), rgba(79,70,229,.92), rgba(124,58,237,.88))",
        }}
      />
      <div className={`${sideGlowClass} sahneva-gradient-glow-float`} />
      <div className={`${lowerGlowClass} sahneva-gradient-glow-float`} />
      <div
        className={`absolute inset-0 ${
          isHero
            ? "bg-[radial-gradient(circle_at_81%_16%,rgba(255,255,255,0.08),transparent_9%),radial-gradient(circle_at_72%_28%,rgba(191,219,254,0.08),transparent_12%),radial-gradient(circle_at_88%_23%,rgba(196,181,253,0.06),transparent_12%)] mix-blend-screen"
            : "bg-[radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_62%_14%,rgba(125,211,252,0.10),transparent_16%)] mix-blend-screen"
        }`}
      />
      <div
        className={`absolute inset-0 sahneva-gradient-glow-sheen ${
          isHero ? "opacity-[0.05] md:opacity-[0.08]" : "opacity-[0.10] md:opacity-[0.14]"
        }`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(110deg, rgba(255,255,255,.14) 0px, rgba(255,255,255,.14) 1px, transparent 2px, transparent 8px)",
          maskImage: sheenMask,
          WebkitMaskImage: sheenMask,
        }}
      />
    </div>
  );
}
