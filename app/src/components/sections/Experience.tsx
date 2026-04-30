"use client";

import { motion } from "framer-motion";

const timeline = [
    {
        year: "2024 — Present",
        role: "Senior Frontend Developer",
        company: "Optimity Logics",
        desc: "Leading frontend architecture and delivering scalable features for SaaS clients. Building modern UI, seamless integrations, and high-performance user experiences.",
        current: true,
    },
    {
        year: "2022 — 2024",
        role: "Frontend Developer",
        company: "ThinkNovus",
        desc: "Delivered responsive marketing sites and web apps for global brands.",
        current: false,
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-14 sm:py-20 md:py-24 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* ── HEADER ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs sm:text-sm font-medium text-emerald uppercase tracking-widest">
                        Experience
                    </p>
                    <h2 className="mt-3 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl">
                        4+ years building products.
                    </h2>
                </motion.div>

                {/* ── CARDS — simple stacked, no line/dot on any size ── */}
                <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col gap-4 sm:gap-5">
                    {timeline.map((t, i) => (
                        <motion.div
                            key={t.role}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="glass rounded-xl sm:rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 p-4 sm:p-6 md:p-8"
                            >
                                <div className="flex items-start gap-3 sm:gap-4">

                                    {/* Icon box */}
                                    <div className="shrink-0 mt-1 h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                                        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-primary-foreground" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        {/* Year + current badge */}
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <p className="text-[10px] sm:text-xs font-semibold text-emerald uppercase tracking-wider">
                                                {t.year}
                                            </p>
                                            {t.current && (
                                                <span className="inline-flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[color:var(--emerald)] bg-[color:var(--emerald)]/10 border border-[color:var(--emerald)]/20 rounded-full text-[9px] px-1.5 py-0.5 sm:text-[10px] sm:px-2 sm:py-0.5">
                                                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--emerald)] opacity-60" />
                                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--emerald)]" />
                                                    </span>
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        {/* Role */}
                                        <h3 className="font-display font-semibold text-foreground text-base sm:text-lg md:text-xl">
                                            {t.role}
                                        </h3>

                                        {/* Company */}
                                        <p className="text-muted-foreground mt-0.5 text-xs sm:text-sm">
                                            {t.company}
                                        </p>

                                        {/* Description */}
                                        <p className="text-foreground/80 leading-relaxed mt-2 sm:mt-3 text-xs sm:text-sm">
                                            {t.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}