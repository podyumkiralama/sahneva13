export default function SahnevaGradientGlow({
  mode = "section",
  className = "",
}) {
  const isHero = mode === "hero";

  const wrapperClass = isHero
    ? "absolute inset-0 overflow-hidden pointer-events-none"
    : "absolute inset-0 overflow-hidden pointer-events-none";

  const heroStageShellClass = isHero
    ? "absolute inset-y-[-8%] left-[34%] right-[-26%] md:left-[44%] md:right-[-16%] lg:left-[47%] lg:right-[-10%]"
    : "";

  const heroStagePlateClass = isHero
    ? "absolute inset-y-[10%] left-[4%] right-[10%] rounded-[3rem] bg-[radial-gradient(circle_at_34%_18%,rgba(255,255,255,0.08),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,23,42,0.02)_30%,rgba(15,23,42,0.08)_100%)] opacity-70"
    : "";

  const heroStageGlowClass = isHero
    ? "absolute inset-y-[2%] left-[2%] right-[4%] rounded-[3.4rem] bg-[radial-gradient(circle_at_20%_28%,rgba(125,211,252,0.14),transparent_18%),radial-gradient(circle_at_52%_22%,rgba(59,130,246,0.18),transparent_26%),radial-gradient(circle_at_86%_18%,rgba(129,140,248,0.14),transparent_18%),radial-gradient(circle_at_64%_68%,rgba(45,212,191,0.06),transparent_22%)] blur-3xl opacity-88"
    : "";

  const heroStageContentsClass = isHero
    ? "absolute inset-y-[3%] left-[8%] right-[-2%] md:left-[16%] md:right-[-6%]"
    : "";

  const blobClass = isHero
    ? "absolute -right-[24%] -top-[18%] h-[42rem] w-[55rem] rotate-[14deg] rounded-bl-[74%] rounded-tl-[28%] md:-right-[14%] md:-top-[16%] md:h-[50rem] md:w-[66rem] lg:-right-[10%] lg:h-[56rem] lg:w-[74rem]"
    : "absolute -right-28 -top-36 h-[24rem] w-[24rem] rotate-[-16deg] rounded-bl-[42%] md:-right-16 md:-top-32 md:h-[32rem] md:w-[32rem]";

  const sideGlowClass = isHero
    ? "absolute right-[16%] top-[20%] h-32 w-32 rounded-full bg-cyan-200/8 blur-3xl md:right-[18%] md:h-44 md:w-44"
    : "absolute right-[10%] top-[20%] h-40 w-40 rounded-full bg-cyan-300/14 blur-3xl md:h-56 md:w-56";

  const lowerGlowClass = isHero
    ? "absolute right-[12%] top-[66%] h-28 w-28 rounded-full bg-indigo-400/8 blur-3xl md:right-[16%] md:h-40 md:w-40"
    : "absolute left-[8%] bottom-[-8%] h-36 w-36 rounded-full bg-indigo-500/14 blur-3xl md:left-[16%] md:h-56 md:w-56";
  const sheenMask = isHero
    ? "radial-gradient(ellipse at 82% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,.98) 24%, rgba(0,0,0,.78) 42%, rgba(0,0,0,.26) 58%, transparent 78%)"
    : "linear-gradient(135deg, transparent 12%, rgba(0,0,0,0.72) 32%, rgba(0,0,0,1) 54%, rgba(0,0,0,0.7) 72%, transparent 96%)";
  const heroWingMask =
    "radial-gradient(ellipse at 42% 28%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 56%, rgba(0,0,0,0.92) 68%, rgba(0,0,0,0.56) 80%, transparent 90%)";

  return (
    <div className={`${wrapperClass} ${className}`} aria-hidden="true">
      {isHero ? <div className={heroStageShellClass}>
        <div className={heroStageGlowClass} />
        <div className={heroStagePlateClass} />
        <div className={heroStageContentsClass}>
          <div
            className={`${blobClass} sahneva-gradient-glow-beam opacity-[0.94] blur-[1px] md:blur-[2px]`}
            style={{
              backgroundImage:
                "radial-gradient(circle at 18% 22%, rgba(224,242,254,.84), transparent 14%), radial-gradient(circle at 28% 26%, rgba(103,232,249,.72), transparent 18%), radial-gradient(circle at 46% 32%, rgba(56,189,248,.70), transparent 28%), radial-gradient(circle at 66% 24%, rgba(59,130,246,.62), transparent 28%), radial-gradient(circle at 82% 18%, rgba(99,102,241,.54), transparent 24%), radial-gradient(circle at 96% 12%, rgba(139,92,246,.42), transparent 18%), linear-gradient(138deg, rgba(165,243,252,.48) 0%, rgba(34,211,238,.82) 16%, rgba(59,130,246,.76) 42%, rgba(79,70,229,.68) 66%, rgba(107,114,255,.42) 90%)",
              clipPath: "ellipse(78% 66% at 44% 28%)",
              maskImage: heroWingMask,
              WebkitMaskImage: heroWingMask,
            }}
          />
          <div
            className="absolute -right-[8%] top-[6%] h-[28rem] w-[18rem] rotate-[18deg] rounded-bl-[84%] rounded-tl-[22%] opacity-86 sahneva-gradient-glow-wing-glint md:right-[0%] md:top-[4%] md:h-[38rem] md:w-[24rem]"
            style={{
              background:
                "linear-gradient(164deg, rgba(255,255,255,0.38) 0%, rgba(224,242,254,0.28) 10%, rgba(125,211,252,0.16) 18%, rgba(59,130,246,0.16) 36%, rgba(79,70,229,0.08) 56%, rgba(0,0,0,0) 82%)",
              filter: "blur(8px)",
              maskImage: heroWingMask,
              WebkitMaskImage: heroWingMask,
            }}
          />
          <div
            className="absolute right-[4%] top-[12%] h-[30rem] w-[16rem] rotate-[17deg] rounded-bl-[84%] rounded-tl-[18%] opacity-74 sahneva-gradient-glow-wing-glint md:right-[8%] md:top-[10%] md:h-[38rem] md:w-[20rem]"
            style={{
              background:
                "linear-gradient(170deg, rgba(255,255,255,0.10) 0%, rgba(165,243,252,0.12) 14%, rgba(34,211,238,0.16) 28%, rgba(59,130,246,0.18) 46%, rgba(79,70,229,0.16) 64%, rgba(126,34,206,0.08) 82%, rgba(0,0,0,0) 94%)",
              filter: "blur(5px)",
              maskImage: heroWingMask,
              WebkitMaskImage: heroWingMask,
            }}
          />
          <div
            className="absolute -right-[8%] top-[8%] h-[34rem] w-[28rem] rotate-[14deg] opacity-26 sahneva-gradient-glow-prism md:h-[44rem] md:w-[38rem]"
            style={{
              background:
                "repeating-linear-gradient(108deg, rgba(255,255,255,0.26) 0px, rgba(255,255,255,0.26) 1px, rgba(191,219,254,0.16) 2px, rgba(125,211,252,0.12) 4px, rgba(59,130,246,0.08) 6px, transparent 9px, transparent 16px)",
              maskImage: heroWingMask,
              WebkitMaskImage: heroWingMask,
            }}
          />
          <div className="absolute right-[19%] top-[12%] h-24 w-24 rounded-full bg-white/10 blur-3xl md:h-36 md:w-36" />
          <div
            className="absolute inset-y-[8%] left-[14%] right-[20%] rounded-[2.6rem] opacity-38"
            style={{
              background:
                "linear-gradient(112deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.03) 8%, rgba(255,255,255,0) 18%, rgba(59,130,246,0.05) 54%, rgba(255,255,255,0) 72%)",
              maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 88%, transparent 100%)",
            }}
          />
        </div>
      </div> : (
        <div
          className={`${blobClass} sahneva-gradient-glow-float opacity-[0.92] blur-[1px] md:blur-[2px]`}
          style={{
            backgroundImage:
              "radial-gradient(circle_at_20%_25%, rgba(56,189,248,.70), transparent 32%), radial-gradient(circle_at_55%_35%, rgba(99,102,241,.75), transparent 34%), radial-gradient(circle_at_80%_20%, rgba(168,85,247,.62), transparent 30%), linear-gradient(135deg, rgba(14,165,233,.92), rgba(79,70,229,.92), rgba(124,58,237,.88))",
          }}
        />
      )}
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
