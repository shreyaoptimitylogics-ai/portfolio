import { motion } from "framer-motion";
import { Code2, Server, Layout, Plug } from "lucide-react";

const cards = [
    { Icon: Layout, title: "Frontend Expertise", desc: "Modern UI development with React, Next.js, and Tailwind — pixel-perfect, accessible, and performant." },
    { Icon: Server, title: "Clean Code", desc: "TypeScript-first, component-driven development with a strong focus on reusability and Developer expirience." },
    { Icon: Code2, title: "Scalable Systems", desc: "Designing apps that handle real-world traffic with caching, optimization, and clean DX." },
    { Icon: Plug, title: "API Integrations", desc: "Connecting third-party services, payment gateways, and AI providers seamlessly." },
];

export default function About() {
    return (
        <section id="about" className="py-28 px-6">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <p className="text-sm font-medium text-emerald uppercase tracking-widest">About</p>
                    <h2 className="mt-3 text-4xl md:text-5xl font-bold">A developer who cares about craft.</h2>
                    <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                        Frontend developer. 4+ years. React & Next.js specialist.
                        I care about the pixels, the performance, and everything in between —
                        because good products live in the details.
                    </p>
                </motion.div>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {cards.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="glass rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-shadow group"
                        >
                            <div className="h-11 w-11 rounded-xl bg-gradient-accent flex items-center justify-center text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                                <c.Icon className="h-5 w-5" />
                            </div>
                            <h3 className="mt-4 font-semibold">{c.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
