"use client";
import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiFramer,
    SiTailwindcss,
    SiFigma,
    SiRedux,
    SiGit,
    SiGithub,
    SiVercel,
    SiPostman,
    SiWebstorm,
} from "react-icons/si";
import {
    MdAnimation,
    MdDevices,
    MdCode,
    MdStorage,
    MdSyncAlt,
    MdGridView,
} from "react-icons/md";

const groups = [
    {
        title: "Frontend",
        items: [
            { name: "React",         Icon: SiReact,      color: "#61DAFB" },
            { name: "Next.js",       Icon: SiNextdotjs,  color: "currentColor" },
            { name: "TypeScript",    Icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript",    Icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML5",         Icon: SiHtml5,      color: "#E34F26" },
            { name: "CSS3",          Icon: SiCss,        color: "#1572B6" },
            { name: "Framer Motion", Icon: SiFramer,     color: "#0055FF" },
        ],
    },
    {
        title: "Styling & UI",
        items: [
            { name: "Tailwind CSS",      Icon: SiTailwindcss, color: "#06B6D4" },
            { name: "CSS Animations",    Icon: MdAnimation,   color: "#A855F7" },
            { name: "Responsive Design", Icon: MdDevices,     color: "#10B981" },
            { name: "Shadcn UI",         Icon: MdGridView,    color: "currentColor" },
            { name: "Figma",             Icon: SiFigma,       color: "#F24E1E" },
        ],
    },
    {
        title: "State & Data",
        items: [
            { name: "Redux",       Icon: SiRedux,   color: "#764ABC" },
            { name: "Zustand",     Icon: MdStorage, color: "#EF6C00" },
            { name: "React Query", Icon: MdSyncAlt, color: "#FF4154" },
        ],
    },
    {
        title: "Tools",
        items: [
            { name: "Git",      Icon: SiGit,      color: "#F05032" },
            { name: "GitHub",   Icon: SiGithub,   color: "currentColor" },
            { name: "Vercel",   Icon: SiVercel,   color: "currentColor" },
            { name: "Postman",  Icon: SiPostman,  color: "#FF6C37" },
            { name: "VS Code",  Icon: MdCode,     color: "#007ACC" },
            { name: "WebStorm", Icon: SiWebstorm, color: "#00CDD7" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-28 bg-muted/40">
            <div className="mx-auto max-w-6xl px-6">
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
                                {g.items.map(({ name, Icon, color }) => (
                                    <span
                                        key={name}
                                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-card border border-border hover:border-emerald hover:-translate-y-0.5 transition-all duration-150 cursor-default group"
                                    >
                                        <Icon
                                            className="h-3.5 w-3.5 shrink-0 transition-colors duration-150"
                                            style={{ color }}
                                        />
                                        {name}
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