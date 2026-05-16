export default function SahnevaGradientGlow({
  mode = "section",
  className = "",
}) {
  const isHero = mode === "hero";

  const wrapperClass = isHero
    ? "absolute inset-0 overflow-hidden pointer-events-none"
    : "absolute inset-0 overflow-hidden pointer-events-none";

  const blobClass = isHero
    ? "absolute -right-[18%] -top-[22%] h-[38rem] w-[38rem] rotate-[-20deg] rounded-bl-[38%] md:-right-[6%] md:-top-[24%] md:h-[54rem] md:w-[54rem]"
    : "absolute -right-28 -top-36 h-[24rem] w-[24rem] rotate-[-16deg] rounded-bl-[42%] md:-right-16 md:-top-32 md:h-[32rem] md:w-[32rem]";

  const sideGlowClass = isHero
    ? "absolute right-[4%] top-[16%] h-56 w-56 rounded-full bg-cyan-300/22 blur-3xl md:h-[24rem] md:w-[24rem]"
    : "absolute right-[10%] top-[20%] h-40 w-40 rounded-full bg-cyan-300/14 blur-3xl md:h-56 md:w-56";

  const lowerGlowClass = isHero
    ? "absolute right-[12%] bottom-[2%] h-48 w-48 rounded-full bg-indigo-500/18 blur-3xl md:right-[18%] md:h-80 md:w-80"
    : "absolute left-[8%] bottom-[-8%] h-36 w-36 rounded-full bg-indigo-500/14 blur-3xl md:left-[16%] md:h-56 md:w-56";

  const beamClass = isHero
    ? "absolute -right-[12%] -top-[6%] h-[38rem] w-[44rem] rotate-[-24deg] md:right-[-4%] md:top-[-10%] md:h-[54rem] md:w-[68rem]"
    : "";

  return (
    <div className={`${wrapperClass} ${className}`} aria-hidden="true">
      <div
        className={`absolute inset-0 ${
          isHero
            ? "bg-[radial-gradient(circle_at_88%_16%,rgba(56,189,248,0.22),transparent_18%),radial-gradient(circle_at_78%_30%,rgba(99,102,241,0.16),transparent_22%),radial-gradient(circle_at_82%_58%,rgba(124,58,237,0.14),transparent_20%)]"
            : "bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_32%),radial-gradient(circle_at_75%_12%,rgba(99,102,241,0.10),transparent_24%)]"
        }`}
      />
      {isHero ? (
        <div
          className={`${beamClass} sahneva-gradient-glow-beam opacity-90 blur-3xl md:blur-[72px]`}
          style={{
            backgroundImage:
              "linear-gradient(138deg, rgba(34,211,238,0) 8%, rgba(34,211,238,0.10) 18%, rgba(56,189,248,0.54) 34%, rgba(59,130,246,0.78) 48%, rgba(79,70,229,0.76) 62%, rgba(124,58,237,0.54) 74%, rgba(124,58,237,0.06) 86%, rgba(124,58,237,0) 100%)",
            maskImage:
              "linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.96) 58%, rgba(0,0,0,0.44) 82%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.96) 58%, rgba(0,0,0,0.44) 82%, transparent 100%)",
          }}
        />
      ) : null}
      <div
        className={`${blobClass} sahneva-gradient-glow-float opacity-70 blur-2xl md:blur-3xl`}
        style={{
          backgroundImage:
            "radial-gradient(circle_at_20%_25%, rgba(56,189,248,.70), transparent 32%), radial-gradient(circle_at_55%_35%, rgba(99,102,241,.75), transparent 34%), radial-gradient(circle_at_80%_20%, rgba(168,85,247,.62), transparent 30%), linear-gradient(135deg, rgba(14,165,233,.92), rgba(79,70,229,.92), rgba(124,58,237,.88))",
        }}
      />
      {isHero ? (
        <div
          className="absolute right-[8%] top-[28%] h-48 w-48 rounded-full bg-blue-400/20 blur-3xl md:h-72 md:w-72"
          style={{
            boxShadow: "0 0 120px rgba(56,189,248,0.20)",
          }}
        />
      ) : null}
      <div className={`${sideGlowClass} sahneva-gradient-glow-float`} />
      <div className={`${lowerGlowClass} sahneva-gradient-glow-float`} />
      <div
        className={`absolute inset-0 ${
          isHero
            ? "bg-[radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.14),transparent_14%),radial-gradient(circle_at_73%_38%,rgba(125,211,252,0.18),transparent_18%),radial-gradient(circle_at_88%_58%,rgba(196,181,253,0.10),transparent_16%)]"
            : "bg-[radial-gradient(circle_at_78%_22%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_62%_14%,rgba(125,211,252,0.10),transparent_16%)]"
        } mix-blend-screen`}
      />
      <div
        className={`absolute inset-0 sahneva-gradient-glow-sheen ${
          isHero ? "opacity-[0.14] md:opacity-[0.18]" : "opacity-[0.10] md:opacity-[0.14]"
        }`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(110deg, rgba(255,255,255,.14) 0px, rgba(255,255,255,.14) 1px, transparent 2px, transparent 8px)",
          maskImage:
            isHero
              ? "linear-gradient(122deg, transparent 10%, rgba(0,0,0,0.18) 30%, rgba(0,0,0,0.96) 52%, rgba(0,0,0,0.86) 72%, transparent 96%)"
              : "linear-gradient(135deg, transparent 12%, rgba(0,0,0,0.72) 32%, rgba(0,0,0,1) 54%, rgba(0,0,0,0.7) 72%, transparent 96%)",
          WebkitMaskImage:
            isHero
              ? "linear-gradient(122deg, transparent 10%, rgba(0,0,0,0.18) 30%, rgba(0,0,0,0.96) 52%, rgba(0,0,0,0.86) 72%, transparent 96%)"
              : "linear-gradient(135deg, transparent 12%, rgba(0,0,0,0.72) 32%, rgba(0,0,0,1) 54%, rgba(0,0,0,0.7) 72%, transparent 96%)",
        }}
      />
    </div>
  );
}
