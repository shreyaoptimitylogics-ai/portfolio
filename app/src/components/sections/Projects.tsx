"use client";

import { motion } from "framer-motion";

const GithubIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 .5C5.7.5.7 5.7.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.2 2.1 2.7 2.1.6 0 1.2-.1 1.7-.3.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.4 1.2.2 2.2.1 3.2a4.7 4.7 0 011.2 3.2c0 4.7-2.7 5.7-5.3 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A11.3 11.3 0 0023.3 12C23.3 5.7 18.3.5 12 .5z"/>
    </svg>
);

const ExternalLinkIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3z"/>
        <path d="M5 5h6V3H3v8h2V5z"/>
        <path d="M5 19h14V9h2v12H3V9h2v10z"/>
    </svg>
);

const projects = [
    {
        title: "Eyevestor — Investment Platform Website",
        desc: "Eyevestor needed a modern scalable platform. I built a Craft CMS website with modular blocks, flexible templates, and easy content management.",
        tech: ["Next.js", "React JS", "Craft CMS", "Javascript"],
        image: "/eye.png",
        video: "/eyevestor.mp4",
        demo: "https://eyevestor-website.vercel.app/",
    },
    {
        title: "HTS – Digital Hospitality Platform | Booking & Guest Management",
        desc: "Hotels struggled with outdated systems, so I built a modern responsive frontend for HTS using React.js, Next.js, JavaScript, and Tailwind CSS. I created clean UI screens for bookings, check-in/out, housekeeping, and guest management with a smooth user experience.",
        tech: ["React", "Next JS", "Javascript", "Tailwind CSS"],
        image: "/handwriting.webp",
        video: "/HTS.mp4",
        demo: "https://hts.hopper.com/",
    },
    {
        title: "KetoCycle – AI-Powered Ketogenic Diet & Nutrition Tracker",
        desc: "Built a comprehensive mobile-first frontend for KetoCycle using React.js, Next.js, and Tailwind CSS. Designed intuitive UI screens for personalized meal planning, macro tracking, recipe recommendations, and progress analytics — delivering a clean, health-focused user experience.",
        tech: ["React", "Next JS", "Javascript", "Tailwind CSS"],
        image: "/ketoo.jpg",
        video: "/keto-cycle.mp4",
        demo: "https://gl.ketocycle.diet/",
    },
    {
        title: "TICE Group – Reverse Logistics & Product Recovery Platform",
        desc: "Built a scalable responsive frontend for TICE Group using React.js, Next.js, and Tailwind CSS. Designed clean UI screens for returns orchestration, trade-in processing, real-time tracking dashboards, and recovery workflows — delivering a professional enterprise-grade user experience.",
        tech: ["React", "Next JS", "Javascript", "Tailwind CSS"],
        image: "/tice-group.jpeg",
        video: "/tice-group.mp4",
        demo: "https://tice-group.com/",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-28 bg-muted/40">
            <div className="mx-auto max-w-6xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-sm font-medium text-emerald uppercase tracking-widest">Projects</p>
                    <h2 className="mt-3 text-4xl md:text-5xl font-bold">Selected work.</h2>
                </motion.div>

                <div className="mt-12 grid md:grid-cols-2 gap-6">
                    {projects.map((p, i) => (
                        <motion.article
                            key={p.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.9,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.9 }
                            }}
                            className="glass rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant group"
                        >
                            <div className="relative aspect-video overflow-hidden bg-muted">

                                {/* Default Image */}
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />

                                {/* Hover Video */}
                                <video
                                    src={p.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                />

                            </div>

                            <div className="p-6">
                                <h3 className="font-display font-semibold text-xl">{p.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {p.tech.map((t) => (
                                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-5 flex items-center gap-4">
                                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-emerald transition-colors">
                                        <ExternalLinkIcon className="h-4 w-4" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
}