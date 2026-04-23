import { motion } from "framer-motion";

const groups = [
    { title: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Framer Motion"] },
    { title: "Styling & UI", items: ["CSS Animations", "Responsive Design", "Shadcn UI", "Figma","Tailwind CSS"] },
    { title: "State & Data", items: ["Redux", "Zustand", "React Query"] },
    { title: "Tools", items: ["Git", "GitHub", "Vercel", "Postman","VS Code","WebStorm"] },
];

export default function Skills() {
    return (
        <section id="skills" className="py-28 px-6 bg-muted/40">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm font-medium text-emerald uppercase tracking-widest">Skills</p>
                    <h2 className="mt-3 text-4xl md:text-5xl font-bold">Tools I work with daily.</h2>
                </motion.div>

                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {groups.map((g, i) => (
                        <motion.div
                            key={g.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="glass rounded-2xl p-6 shadow-soft"
                        >
                            <h3 className="font-semibold text-lg">{g.title}</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {g.items.map((s) => (
                                    <span
                                        key={s}
                                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-card border border-border hover:border-emerald hover:text-emerald hover:-translate-y-0.5 transition-all cursor-default"
                                    >
                    {s}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
