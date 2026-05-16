export default function SahnevaGradientGlow({
  mode = "section",
  className = "",
}) {
  const isHero = mode === "hero";

  const wrapperClass = isHero
    ? "absolute inset-0 overflow-hidden pointer-events-none"
    : "absolute inset-0 overflow-hidden pointer-events-none";

  const heroStageShellClass = isHero
    ? "absolute inset-y-[-12%] left-[40%] right-[-18%] md:left-[48%] md:right-[-10%] lg:left-[50%] lg:right-[-6%]"
    : "";

  const heroStagePlateClass = isHero
    ? "absolute inset-y-[8%] left-[2%] right-[6%] rounded-[38%] bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.07),transparent_12%),radial-gradient(circle_at_78%_22%,rgba(165,243,252,0.08),transparent_14%),radial-gradient(circle_at_58%_74%,rgba(59,130,246,0.08),transparent_20%)] blur-2xl opacity-85"
    : "";

  const heroStageGlowClass = isHero
    ? "absolute inset-y-[0%] left-[0%] right-[0%] rounded-[42%] bg-[radial-gradient(circle_at_24%_20%,rgba(125,211,252,0.18),transparent_16%),radial-gradient(circle_at_52%_26%,rgba(59,130,246,0.26),transparent_24%),radial-gradient(circle_at_84%_16%,rgba(129,140,248,0.20),transparent_18%),radial-gradient(circle_at_70%_62%,rgba(34,211,238,0.10),transparent_20%)] blur-3xl opacity-92"
    : "";

  const heroStageContentsClass = isHero
    ? "absolute inset-y-[2%] left-[4%] right-[-4%] md:left-[10%] md:right-[-8%]"
    : "";

  const blobClass = isHero
    ? "absolute -right-[12%] -top-[10%] h-[34rem] w-[42rem] rotate-[18deg] rounded-[44%] md:-right-[6%] md:top-[-8%] md:h-[42rem] md:w-[52rem] lg:-right-[2%] lg:h-[48rem] lg:w-[60rem]"
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
    "radial-gradient(ellipse at 54% 42%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 48%, rgba(0,0,0,0.92) 64%, rgba(0,0,0,0.52) 78%, transparent 90%)";

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
                "radial-gradient(circle at 14% 20%, rgba(255,255,255,.70), transparent 10%), radial-gradient(circle at 24% 24%, rgba(165,243,252,.68), transparent 16%), radial-gradient(circle at 42% 30%, rgba(56,189,248,.72), transparent 22%), radial-gradient(circle at 62% 30%, rgba(59,130,246,.72), transparent 24%), radial-gradient(circle at 82% 18%, rgba(99,102,241,.56), transparent 18%), linear-gradient(142deg, rgba(191,219,254,.28) 0%, rgba(34,211,238,.74) 12%, rgba(59,130,246,.82) 40%, rgba(79,70,229,.74) 62%, rgba(107,114,255,.32) 92%)",
              clipPath: "ellipse(84% 72% at 58% 42%)",
              maskImage: heroWingMask,
              WebkitMaskImage: heroWingMask,
            }}
          />
          <div
            className="absolute -right-[4%] top-[24%] h-[18rem] w-[32rem] rotate-[22deg] rounded-[48%] opacity-82 sahneva-gradient-glow-wing-glint md:right-[4%] md:top-[22%] md:h-[22rem] md:w-[38rem] lg:right-[6%] lg:top-[20%] lg:h-[24rem] lg:w-[44rem]"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.22) 0%, rgba(224,242,254,0.18) 10%, rgba(125,211,252,0.16) 26%, rgba(59,130,246,0.24) 48%, rgba(79,70,229,0.22) 66%, rgba(0,0,0,0) 84%)",
              filter: "blur(5px)",
              clipPath: "ellipse(84% 54% at 52% 50%)",
            }}
          />
          <div
            className="absolute right-[2%] top-[0%] h-[30rem] w-[14rem] rotate-[16deg] rounded-[44%] opacity-88 sahneva-gradient-glow-wing-glint md:right-[8%] md:top-[0%] md:h-[38rem] md:w-[18rem]"
            style={{
              background:
                "linear-gradient(170deg, rgba(255,255,255,0.16) 0%, rgba(191,219,254,0.12) 10%, rgba(125,211,252,0.12) 24%, rgba(59,130,246,0.14) 44%, rgba(79,70,229,0.10) 70%, rgba(0,0,0,0) 96%)",
              filter: "blur(5px)",
              clipPath: "ellipse(80% 66% at 46% 40%)",
            }}
          />
          <div
            className="absolute right-[10%] top-[4%] h-[30rem] w-[26rem] rotate-[18deg] opacity-24 sahneva-gradient-glow-prism md:right-[12%] md:h-[38rem] md:w-[34rem]"
            style={{
              background:
                "repeating-linear-gradient(110deg, rgba(255,255,255,0.22) 0px, rgba(255,255,255,0.22) 1px, rgba(191,219,254,0.15) 2px, rgba(125,211,252,0.10) 4px, rgba(59,130,246,0.08) 6px, transparent 8px, transparent 15px)",
              clipPath: "ellipse(80% 64% at 54% 42%)",
            }}
          />
          <div className="absolute right-[18%] top-[12%] h-24 w-24 rounded-full bg-white/10 blur-3xl md:h-32 md:w-32" />
          <div
            className="absolute inset-y-[10%] left-[18%] right-[26%] rounded-[50%] opacity-44"
            style={{
              background:
                "linear-gradient(108deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 10%, rgba(255,255,255,0) 22%, rgba(59,130,246,0.06) 52%, rgba(255,255,255,0) 72%)",
              clipPath: "ellipse(74% 64% at 50% 40%)",
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
