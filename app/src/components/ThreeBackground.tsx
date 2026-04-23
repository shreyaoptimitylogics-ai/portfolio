"use client"
import { useTheme } from "@/app/src/hooks/use-theme";

export default function ThreeBackground() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    // Theme-adaptive colors (kept inline so they react instantly to theme changes)
    const orb1 = isDark ? "rgba(127, 212, 179, 0.28)" : "rgba(58, 111, 122, 0.22)";
    const orb2 = isDark ? "rgba(120, 160, 200, 0.22)" : "rgba(140, 170, 190, 0.28)";
    const orb3 = isDark ? "rgba(180, 200, 170, 0.18)" : "rgba(200, 210, 195, 0.35)";
    const gridColor = isDark ? "rgba(200, 220, 210, 0.06)" : "rgba(40, 60, 70, 0.06)";

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
            {/* Subtle grid mesh */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
                    backgroundSize: "56px 56px",
                    maskImage:
                        "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                }}
            />

            {/* Floating gradient orbs */}
            <div
                className="absolute rounded-full blur-3xl animate-orb-1"
                style={{
                    width: "520px",
                    height: "520px",
                    background: `radial-gradient(circle at 30% 30%, ${orb1}, transparent 70%)`,
                    top: "-10%",
                    left: "-8%",
                }}
            />
            <div
                className="absolute rounded-full blur-3xl animate-orb-2"
                style={{
                    width: "460px",
                    height: "460px",
                    background: `radial-gradient(circle at 60% 40%, ${orb2}, transparent 70%)`,
                    top: "20%",
                    right: "-6%",
                }}
            />
            <div
                className="absolute rounded-full blur-3xl animate-orb-3"
                style={{
                    width: "380px",
                    height: "380px",
                    background: `radial-gradient(circle at 50% 50%, ${orb3}, transparent 70%)`,
                    bottom: "-12%",
                    left: "30%",
                }}
            />

            {/* Soft noise/vignette overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.05) 100%)",
                }}
            />
        </div>
    );
}
