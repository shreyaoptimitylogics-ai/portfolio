"use client";

import { motion } from "framer-motion";

const timeline = [
    {
        year: "2024 — Present",
        role: "Senior Frontend Developer",
        company: "Optimity Logics",
        desc: "Leading frontend architecture and delivering scalable features for SaaS clients. Building modern UI, seamless integrations, and high-performance user experiences.",
        // tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
        current: true,
    },
    {
        year: "2022 — 2024",
        role: "Frontend Developer",
        company: "ThinkNovus",
        desc: "Delivered responsive marketing sites and web apps for global brands.",
        // tech: ["React", "TypeScript", "Tailwind"],
        current: false,
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-28">
            <div className="mx-auto max-w-6xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm font-medium text-emerald uppercase tracking-widest">Experience</p>
                    <h2 className="mt-3 text-4xl md:text-5xl font-bold">4+ years building products.</h2>
                </motion.div>

                <div className="mt-12 relative">

                    {/* ── Center vertical line ── */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />

                    <div className="flex flex-col gap-5">
                        {timeline.map((t, i) => (
                            <motion.div
                                key={t.role}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative md:grid md:grid-cols-2 md:gap-10"
                            >
                                {/* ── Center dot on the line ── */}
                                <span className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-accent ring-4 ring-background z-10" />

                                {/* ── Card — alternates left/right ── */}
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className={`glass rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elegant transition-all duration-300 group
                                        ${i % 2 === 0 ? "md:col-start-1 md:mr-6" : "md:col-start-2 md:ml-6"}
                                    `}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                                        {/* Left — role info */}
                                        <div className="flex items-start gap-4">

                                            {/* Icon box */}
                                            <div className="mt-1 shrink-0 h-10 w-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-glow">
                                                <span className="h-2.5 w-2.5 rounded-full bg-primary-foreground" />
                                            </div>

                                            <div>
                                                {/* Year + current badge */}
                                                <div className="flex items-center gap-2 mb-1">
                                                    <p className="text-xs font-semibold text-emerald uppercase tracking-wider">
                                                        {t.year}
                                                    </p>
                                                    {t.current && (
                                                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[color:var(--emerald)] bg-[color:var(--emerald)]/10 border border-[color:var(--emerald)]/20 px-2 py-0.5 rounded-full">
                                                            <span className="relative flex h-1.5 w-1.5">
                                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--emerald)] opacity-60" />
                                                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--emerald)]" />
                                                            </span>
                                                            Current
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="font-display text-xl font-semibold text-foreground">
                                                    {t.role}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mt-0.5">
                                                    {t.company}
                                                </p>
                                                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                                                    {t.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tech badges */}
                                    {/*<div className="mt-4 flex flex-wrap gap-2">*/}
                                    {/*    {t.tech.map((x) => (*/}
                                    {/*        <span*/}
                                    {/*            key={x}*/}
                                    {/*            className="text-xs px-2.5 py-1 rounded-full bg-card border border-border hover:border-[color:var(--emerald)] transition-colors duration-150"*/}
                                    {/*        >*/}
                                    {/*            {x}*/}
                                    {/*        </span>*/}
                                    {/*    ))}*/}
                                    {/*</div>*/}
                                </motion.div>

                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}