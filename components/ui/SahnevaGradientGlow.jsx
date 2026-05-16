export default function SahnevaGradientGlow({
  mode = "section",
  className = "",
}) {
  const isHero = mode === "hero";

  const wrapperClass = "absolute inset-0 overflow-hidden pointer-events-none";

  const blobClass = isHero
    ? "sahneva-stripe-blob absolute -right-[10%] -top-[16%] h-[820px] w-[1120px] rotate-[10deg] opacity-70 md:-right-[4%] md:-top-[14%] lg:right-0"
    : "absolute -right-28 -top-36 h-[24rem] w-[24rem] rotate-[-16deg] rounded-bl-[42%] md:-right-16 md:-top-32 md:h-[32rem] md:w-[32rem]";

  const sideGlowClass = isHero
    ? "sahneva-stripe-soft absolute right-[3%] top-[60%] h-44 w-44 rounded-full bg-cyan-200/10 blur-3xl md:right-[6%] md:top-[56%] md:h-52 md:w-52"
    : "absolute right-[10%] top-[20%] h-40 w-40 rounded-full bg-cyan-300/14 blur-3xl md:h-56 md:w-56";

  const lowerGlowClass = isHero
    ? ""
    : "absolute left-[8%] bottom-[-8%] h-36 w-36 rounded-full bg-indigo-500/14 blur-3xl md:left-[16%] md:h-56 md:w-56";
  const sheenMask = isHero
    ? "radial-gradient(ellipse at 82% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,.98) 24%, rgba(0,0,0,.78) 42%, rgba(0,0,0,.26) 58%, transparent 78%)"
    : "linear-gradient(135deg, transparent 12%, rgba(0,0,0,0.72) 32%, rgba(0,0,0,1) 54%, rgba(0,0,0,0.7) 72%, transparent 96%)";
  const heroWingMask =
    "radial-gradient(ellipse at 44% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 52%, rgba(0,0,0,.72) 68%, rgba(0,0,0,.28) 82%, transparent 94%)";

  if (isHero) {
    return (
      <div className={`${wrapperClass} ${className}`} aria-hidden="true">
        <div
          className={blobClass}
          style={{
            backgroundImage:
              "radial-gradient(circle at 96% 88%, rgba(255,255,255,.20), transparent 5%), radial-gradient(circle at 78% 24%, rgba(191,219,254,.16), transparent 16%), radial-gradient(circle at 62% 34%, rgba(56,189,248,.14), transparent 22%), conic-gradient(from 214deg at 99% 90%, rgba(224,242,254,.86) 0deg 10deg, rgba(186,230,253,.74) 10deg 18deg, rgba(125,211,252,.68) 18deg 28deg, rgba(56,189,248,.60) 28deg 42deg, rgba(59,130,246,.54) 42deg 56deg, rgba(79,70,229,.48) 56deg 70deg, rgba(67,56,202,.34) 70deg 82deg, rgba(191,219,254,.16) 82deg 90deg, transparent 90deg 360deg)",
            backgroundSize: "108% 108%",
            clipPath: "ellipse(98% 76% at 92% 18%)",
            maskImage:
              "radial-gradient(ellipse at 99% 90%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 16%, rgba(0,0,0,.96) 28%, rgba(0,0,0,.74) 46%, rgba(0,0,0,.28) 64%, transparent 84%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 99% 90%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 16%, rgba(0,0,0,.96) 28%, rgba(0,0,0,.74) 46%, rgba(0,0,0,.28) 64%, transparent 84%)",
          }}
        />
        <div
          className="sahneva-stripe-lines absolute right-[2%] top-[8%] h-[620px] w-[640px] rotate-[10deg] opacity-18 md:right-[4%] md:top-[6%]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(110deg, rgba(255,255,255,.15) 0px, rgba(255,255,255,.15) 1px, transparent 2px, transparent 11px)",
            backgroundSize: "190px 190px",
            maskImage:
              "radial-gradient(ellipse at 97% 90%, rgba(0,0,0,1) 0%, rgba(0,0,0,.92) 14%, rgba(0,0,0,.72) 32%, rgba(0,0,0,.28) 56%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 97% 90%, rgba(0,0,0,1) 0%, rgba(0,0,0,.92) 14%, rgba(0,0,0,.72) 32%, rgba(0,0,0,.28) 56%, transparent 78%)",
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
