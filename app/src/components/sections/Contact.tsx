"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

// SVG ICONS (no lucide-react)
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z" />
    </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 .5C5.7.5.7 5.7.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.2 2.1 2.7 2.1.6 0 1.2-.1 1.7-.3.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.4 1.2.2 2.2.1 3.2a4.7 4.7 0 011.2 3.2c0 4.7-2.7 5.7-5.3 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A11.3 11.3 0 0023.3 12C23.3 5.7 18.3.5 12 .5z" />
    </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.8v5.9zM5.3 7.4a2.1 2.1 0 11.1-4.2 2.1 2.1 0 01-.1 4.2zM3.5 20.4h3.6V9H3.5v11.4z" />
    </svg>
);

const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
    </svg>
);

export default function Contact() {
    const [sending, setSending] = useState(false);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        await new Promise((r) => setTimeout(r, 800));
        setSending(false);
        toast.success("Message sent! I'll get back to you soon.");
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contact" className="py-28 px-6">
            <div className="mx-auto max-w-5xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-sm font-medium text-emerald uppercase tracking-widest">Contact</p>
                    <h2 className="mt-3 text-4xl md:text-5xl font-bold">Let's build something great.</h2>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                        Have a project in mind, a role to fill, or just want to say hi? My inbox is open.
                    </p>
                </motion.div>

                <div className="mt-12 grid md:grid-cols-[1fr_1.4fr] gap-8">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass rounded-2xl p-6 shadow-soft space-y-5"
                    >
                        <a href="mailto:shreya.optimitylogics@gmail.com" className="flex items-center gap-3 group">
                            <span className="h-10 w-10 rounded-xl bg-gradient-accent text-primary-foreground flex items-center justify-center">
                                <MailIcon className="h-4 w-4" />
                            </span>
                            <span>
                                <span className="block text-xs text-muted-foreground">Email</span>

                            </span>
                        </a>

                        <a href="https://github.com/shreyaoptimitylogics-ai" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                            <span className="h-10 w-10 rounded-xl bg-gradient-accent text-primary-foreground flex items-center justify-center">
                                <GithubIcon className="h-4 w-4" />
                            </span>
                            <span>
                                <span className="block text-xs text-muted-foreground">GitHub</span>

                            </span>
                        </a>

                        <a href="https://linkedin.com/in/prajapati-shreya-183p" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                            <span className="h-10 w-10 rounded-xl bg-gradient-accent text-primary-foreground flex items-center justify-center">
                                <LinkedinIcon className="h-4 w-4" />
                            </span>
                            <span>
                                <span className="block text-xs text-muted-foreground">LinkedIn</span>

                            </span>
                        </a>
                    </motion.div>

                    {/* FORM */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onSubmit={onSubmit}
                        className="glass rounded-2xl p-6 shadow-soft space-y-4"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            <label className="block">
                                <span className="text-xs font-medium text-muted-foreground">Name</span>
                                <input
                                    required
                                    name="name"
                                    className="mt-1 w-full rounded-lg bg-card border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                                />
                            </label>
                            <label className="block">
                                <span className="text-xs font-medium text-muted-foreground">Email</span>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    className="mt-1 w-full rounded-lg bg-card border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
                                />
                            </label>
                        </div>

                        <label className="block">
                            <span className="text-xs font-medium text-muted-foreground">Message</span>
                            <textarea
                                required
                                name="message"
                                rows={5}
                                className="mt-1 w-full rounded-lg bg-card border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={sending}
                            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all disabled:opacity-60"
                        >
                            {sending ? "Sending..." : (<>Send Message <SendIcon className="h-4 w-4" /></>)}
                        </button>
                    </motion.form>

                </div>

                <p className="mt-16 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Shreya Prajapati — Crafted with care.
                </p>

            </div>
        </section>
    );
}