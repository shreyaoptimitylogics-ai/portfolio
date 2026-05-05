"use client";
import { useTheme } from "@/app/src/hooks/use-theme";

export default function ThreeBackground() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                zIndex: -10,
                overflow: "hidden",
                pointerEvents: "none",
            }}
            aria-hidden
        >
            {/* ── Base gradient ── */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: isDark
                        ? "linear-gradient(135deg, #1a1b2e 0%, #1c2535 100%)"
                        : "linear-gradient(135deg, #f9f7f2 0%, #eef5f0 100%)",
                }}
            />

            {/* ── Grid mesh ── */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: isDark
                        ? `linear-gradient(rgba(200,220,210,0.06) 1px, transparent 1px),
               linear-gradient(90deg, rgba(200,220,210,0.06) 1px, transparent 1px)`
                        : `linear-gradient(rgba(40,60,70,0.06) 1px, transparent 1px),
               linear-gradient(90deg, rgba(40,60,70,0.06) 1px, transparent 1px)`,
                    backgroundSize: "52px 52px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)",
                    maskImage:
                        "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)",
                }}
            />

            {/* ── Orb 1 — top left — emerald ── */}
            <div
                style={{
                    position: "absolute",
                    width: 700,
                    height: 700,
                    borderRadius: "50%",
                    top: "-15%",
                    left: "-10%",
                    background: isDark
                        ? "radial-gradient(circle at 35% 35%, rgba(127,212,179,0.35) 0%, rgba(127,212,179,0.08) 50%, transparent 70%)"
                        : "radial-gradient(circle at 35% 35%, rgba(58,111,122,0.25) 0%, rgba(58,111,122,0.06) 50%, transparent 70%)",
                    filter: "blur(40px)",
                    animation: "orbFloat1 18s ease-in-out infinite",
                }}
            />

            {/* ── Orb 2 — top right — navy/blue ── */}
            <div
                style={{
                    position: "absolute",
                    width: 600,
                    height: 600,
                    borderRadius: "50%",
                    top: "5%",
                    right: "-8%",
                    background: isDark
                        ? "radial-gradient(circle at 60% 40%, rgba(120,160,210,0.30) 0%, rgba(100,140,200,0.06) 50%, transparent 70%)"
                        : "radial-gradient(circle at 60% 40%, rgba(80,110,160,0.20) 0%, rgba(80,110,160,0.04) 50%, transparent 70%)",
                    filter: "blur(44px)",
                    animation: "orbFloat2 22s ease-in-out infinite",
                }}
            />

            {/* ── Orb 3 — bottom center — warm green ── */}
            <div
                style={{
                    position: "absolute",
                    width: 550,
                    height: 550,
                    borderRadius: "50%",
                    bottom: "-12%",
                    left: "28%",
                    background: isDark
                        ? "radial-gradient(circle at 50% 50%, rgba(180,200,170,0.28) 0%, rgba(160,190,155,0.05) 50%, transparent 70%)"
                        : "radial-gradient(circle at 50% 50%, rgba(100,140,110,0.22) 0%, rgba(100,140,110,0.04) 50%, transparent 70%)",
                    filter: "blur(48px)",
                    animation: "orbFloat3 26s ease-in-out infinite",
                }}
            />

            {/* ── Orb 4 — center — accent glow ── */}
            <div
                style={{
                    position: "absolute",
                    width: 340,
                    height: 340,
                    borderRadius: "50%",
                    top: "35%",
                    left: "40%",
                    background: isDark
                        ? "radial-gradient(circle, rgba(127,212,179,0.15) 0%, transparent 70%)"
                        : "radial-gradient(circle, rgba(58,111,122,0.12) 0%, transparent 70%)",
                    filter: "blur(36px)",
                    animation: "orbFloat2 30s ease-in-out infinite reverse",
                }}
            />

            {/* ── Top-left corner light leak ── */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 420,
                    height: 300,
                    background: isDark
                        ? "linear-gradient(135deg, rgba(127,212,179,0.12) 0%, transparent 60%)"
                        : "linear-gradient(135deg, rgba(58,111,122,0.10) 0%, transparent 60%)",
                }}
            />

            {/* ── Bottom-right corner light leak ── */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 380,
                    height: 260,
                    background: isDark
                        ? "linear-gradient(315deg, rgba(120,160,210,0.12) 0%, transparent 60%)"
                        : "linear-gradient(315deg, rgba(80,110,160,0.08) 0%, transparent 60%)",
                }}
            />

            {/* ── Vignette ── */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: isDark
                        ? "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.30) 100%)"
                        : "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.06) 100%)",
                }}
            />

            {/* ── CSS keyframes injected via style tag ── */}
            <style>{`
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(60px, 40px) scale(1.08); }
          66%       { transform: translate(-30px, 60px) scale(0.96); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(-50px, 30px) scale(1.06); }
          66%       { transform: translate(40px, -40px) scale(0.97); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(30px, -50px) scale(1.05); }
          66%       { transform: translate(-40px, 30px) scale(0.95); }
        }
      `}</style>
        </div>
    );
}