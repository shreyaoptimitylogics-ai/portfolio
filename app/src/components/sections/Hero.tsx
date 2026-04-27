"use client";

import { motion } from "framer-motion";
import ThreeBackground from "@/app/src/components/ThreeBackground";


const GithubIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 .5C5.7.5.7 5.7.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.2 2.1 2.7 2.1.6 0 1.2-.1 1.7-.3.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.4 1.2.2 2.2.1 3.2a4.7 4.7 0 011.2 3.2c0 4.7-2.7 5.7-5.3 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A11.3 11.3 0 0023.3 12C23.3 5.7 18.3.5 12 .5z"/>
    </svg>
);

const LinkedinIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.8v5.9zM5.3 7.4a2.1 2.1 0 11.1-4.2 2.1 2.1 0 01-.1 4.2zM3.5 20.4h3.6V9H3.5v11.4z"/>
    </svg>
);

const MailIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z"/>
    </svg>
);

const ArrowRightIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M13 5l7 7-7 7-1.4-1.4L16.2 13H4v-2h12.2l-4.6-4.6L13 5z"/>
    </svg>
);

const DownloadIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 16l-5-5 1.4-1.4 2.6 2.6V4h2v8.2l2.6-2.6L17 11l-5 5zm-7 4v-2h14v2H5z"/>
    </svg>
);

export default function Hero() {
    const go = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-28 pb-16">
            <ThreeBackground />

            <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center relative">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-muted-foreground shadow-soft">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
                        Available for new opportunities
                    </span>

                    <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                        Hi, I'm <span className="text-gradient">Shreya Prajapati</span>
                    </h1>

                    <p className="mt-4 text-xl md:text-2xl font-medium text-foreground/80">
                        Frontend Developer
                    </p>

                    <p className="mt-3 text-base text-muted-foreground max-w-xl">
                        Frontend developer specializing in React and Next.js — I bridge the gap between
                        design and code, building performant UIs and pixel-perfect experiences that scale.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <button
                            onClick={() => go("projects")}
                            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all"
                        >
                            View Projects
                            <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/*<a*/}
                        {/*    href="/resume.pdf"*/}
                        {/*    download*/}
                        {/*    className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium shadow-soft hover:-translate-y-0.5 transition-all duration-0"*/}
                        {/*>*/}
                        {/*    <DownloadIcon className="h-4 w-4" />*/}
                        {/*    Download Resume*/}
                        {/*</a>*/}
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="mt-8 flex items-center gap-3 duration-0">
                        {[
                            { Icon: GithubIcon, href: "https://github.com/shreyaoptimitylogics-ai", label: "GitHub" },
                            { Icon: LinkedinIcon, href: "https://linkedin.com/in/prajapati-shreya-183p", label: "LinkedIn" },
                            { Icon: MailIcon, href: "mailto:shreya.optimitylogics@gmail.com", label: "Email" },
                        ].map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={label}
                                className="h-10 w-10 rounded-full glass shadow-soft flex items-center justify-center hover:scale-110 hover:text-emerald transition-all"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative justify-self-center"
                >
                    <div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-gradient-accent rounded-full" />
                    <div className="relative h-64 w-64 md:h-100 md:w-100 rounded-full p-1 bg-gradient-accent shadow-elegant">
                        <div className="h-full w-full rounded-full overflow-hidden bg-card">
                            <img
                                src="/shreya.jpg"
                                alt="Shreya Prajapati"
                                width={700}
                                height={700}
                                className="h-100vh w-full object-cover"
                            />
                        </div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-3 rounded-full border border-dashed border-foreground/15"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}