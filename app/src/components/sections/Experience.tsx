import { motion } from "framer-motion";

const timeline = [
    {
        year: "2024 — Present",
        role: "Senior Frontend Developer",
        company: "Optimity Logics",
        desc: "Leading frontend architecture and delivering scalable features for SaaS clients. Building modern UI, seamless integrations, and high-performance user experiences.",
        tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    },
    {
        year: "2022-2024",
        role: "Frontend Developer",
        company: "ThinkNovus",
        desc: "Delivered responsive marketing sites and web apps for global brands.",
        tech: ["React", "TypeScript", "Tailwind"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-28 px-6 bg-muted/40">
            <div className="mx-auto max-w-4xl">
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
                    <div className="absolute left-3 top-2 bottom-2 w-px bg-border md:left-1/2" />
                    {timeline.map((t, i) => (
                        <motion.div
                            key={t.role}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-10 mb-10"
                        >
                            <span className="absolute left-1.5 top-2 h-3 w-3 rounded-full bg-gradient-accent ring-4 ring-background md:left-1/2 md:-translate-x-1/2" />
                            <div className={i % 2 === 0 ? "md:text-right md:pr-10" : "md:col-start-2 md:pl-10"}>
                                <p className="text-xs font-semibold text-emerald uppercase tracking-wider">{t.year}</p>
                                <h3 className="mt-1 font-display text-xl font-semibold">{t.role}</h3>
                                <p className="text-sm text-muted-foreground">{t.company}</p>
                                <p className="mt-2 text-sm">{t.desc}</p>
                                <div className={`mt-3 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                                    {t.tech.map((x) => (
                                        <span key={x} className="text-xs px-2.5 py-1 rounded-full bg-card border border-border">
                      {x}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
