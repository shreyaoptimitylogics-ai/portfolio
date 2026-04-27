// "use client";
//
// import { motion } from "framer-motion";
// import { useState, FormEvent } from "react";
// import { toast } from "sonner";
//
// // SVG ICONS (no lucide-react)
// const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//         <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z" />
//     </svg>
// );
//
// const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//         <path d="M12 .5C5.7.5.7 5.7.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.2 2.1 2.7 2.1.6 0 1.2-.1 1.7-.3.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.4 1.2.2 2.2.1 3.2a4.7 4.7 0 011.2 3.2c0 4.7-2.7 5.7-5.3 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A11.3 11.3 0 0023.3 12C23.3 5.7 18.3.5 12 .5z" />
//     </svg>
// );
//
// const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//         <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.8v5.9zM5.3 7.4a2.1 2.1 0 11.1-4.2 2.1 2.1 0 01-.1 4.2zM3.5 20.4h3.6V9H3.5v11.4z" />
//     </svg>
// );
//
// const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
//     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//         <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
//     </svg>
// );
//
// export default function Contact() {
//     const [sending, setSending] = useState(false);
//
//     const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         setSending(true);
//         await new Promise((r) => setTimeout(r, 800));
//         setSending(false);
//         toast.success("Message sent! I'll get back to you soon.");
//         (e.target as HTMLFormElement).reset();
//     };
//
//     return (
//         <section id="contact" className="py-28 px-6">
//             <div className="mx-auto max-w-5xl">
//
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center"
//                 >
//                     <p className="text-sm font-medium text-emerald uppercase tracking-widest">Contact</p>
//                     <h2 className="mt-3 text-4xl md:text-5xl font-bold">Let's build something great.</h2>
//                     <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
//                         Have a project in mind, a role to fill, or just want to say hi? My inbox is open.
//                     </p>
//                 </motion.div>
//
//                 <div className="mt-12 grid md:grid-cols-[1fr_1.4fr] gap-8">
//
//                     {/* LEFT SIDE */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         className="glass rounded-2xl p-6 shadow-soft space-y-5"
//                     >
//                         <a href="mailto:shreya.optimitylogics@gmail.com" className="flex items-center gap-3 group">
//                             <span className="h-10 w-10 rounded-xl bg-gradient-accent text-primary-foreground flex items-center justify-center">
//                                 <MailIcon className="h-4 w-4" />
//                             </span>
//                             <span>
//                                 <span className="block text-xs text-muted-foreground">Email</span>
//
//                             </span>
//                         </a>
//
//                         <a href="https://github.com/shreyaoptimitylogics-ai" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
//                             <span className="h-10 w-10 rounded-xl bg-gradient-accent text-primary-foreground flex items-center justify-center">
//                                 <GithubIcon className="h-4 w-4" />
//                             </span>
//                             <span>
//                                 <span className="block text-xs text-muted-foreground">GitHub</span>
//
//                             </span>
//                         </a>
//
//                         <a href="https://linkedin.com/in/prajapati-shreya-183p" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
//                             <span className="h-10 w-10 rounded-xl bg-gradient-accent text-primary-foreground flex items-center justify-center">
//                                 <LinkedinIcon className="h-4 w-4" />
//                             </span>
//                             <span>
//                                 <span className="block text-xs text-muted-foreground">LinkedIn</span>
//
//                             </span>
//                         </a>
//                     </motion.div>
//
//                     {/* FORM */}
//                     <motion.form
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6 }}
//                         onSubmit={onSubmit}
//                         className="glass rounded-2xl p-6 shadow-soft space-y-4"
//                     >
//                         <div className="grid sm:grid-cols-2 gap-4">
//                             <label className="block">
//                                 <span className="text-xs font-medium text-muted-foreground">Name</span>
//                                 <input
//                                     required
//                                     name="name"
//                                     className="mt-1 w-full rounded-lg bg-card border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
//                                 />
//                             </label>
//                             <label className="block">
//                                 <span className="text-xs font-medium text-muted-foreground">Email</span>
//                                 <input
//                                     required
//                                     type="email"
//                                     name="email"
//                                     className="mt-1 w-full rounded-lg bg-card border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition"
//                                 />
//                             </label>
//                         </div>
//
//                         <label className="block">
//                             <span className="text-xs font-medium text-muted-foreground">Message</span>
//                             <textarea
//                                 required
//                                 name="message"
//                                 rows={5}
//                                 className="mt-1 w-full rounded-lg bg-card border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
//                             />
//                         </label>
//
//                         <button
//                             type="submit"
//                             disabled={sending}
//                             className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all disabled:opacity-60"
//                         >
//                             {sending ? "Sending..." : (<>Send Message <SendIcon className="h-4 w-4" /></>)}
//                         </button>
//                     </motion.form>
//
//                 </div>
//
//                 <p className="mt-16 text-center text-xs text-muted-foreground">
//                     © {new Date().getFullYear()} Shreya Prajapati — Crafted with care.
//                 </p>
//
//             </div>
//         </section>
//     );
// }
//
//

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { Button } from "@/app/src/components/ui/button";
import { Input } from "@/app/src/components/ui/input";
import { Textarea } from "@/app/src/components/ui/textarea";
import { toast } from "sonner";

/* =========================
   SVG ICONS (no lucide-react)
========================= */
const Mail = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z" />
    </svg>
);

const Github = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 .5C5.7.5.7 5.7.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.2 2.1 2.7 2.1.6 0 1.2-.1 1.7-.3.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.4 1.2.2 2.2.1 3.2a4.7 4.7 0 011.2 3.2c0 4.7-2.7 5.7-5.3 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A11.3 11.3 0 0023.3 12C23.3 5.7 18.3.5 12 .5z" />
    </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.8v5.9zM5.3 7.4a2.1 2.1 0 11.1-4.2 2.1 2.1 0 01-.1 4.2zM3.5 20.4h3.6V9H3.5v11.4z" />
    </svg>
);

const Send = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
    </svg>
);

const CheckCircle2 = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.2 14.2l-3.3-3.3 1.4-1.4 1.9 1.9 4.4-4.4 1.4 1.4-5.8 5.8z" />
    </svg>
);

const MessageSquare = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M4 4h16v12H7l-3 3V4z" />
    </svg>
);

/* =========================
   VALIDATION
========================= */
const schema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100),
    email: z.string().trim().email("Invalid email").max(255),
    subject: z.string().trim().max(120).optional(),
    message: z.string().trim().min(1, "Message is required").max(1000),
});

const quickTopics = ["Project inquiry", "Job opportunity", "Collaboration", "Just saying hi"];

const EMAIL = "shreya.optimitylogics@gmail.com";
const GITHUB = "https://github.com/shreyaoptimitylogics-ai";
const LINKEDIN = "https://linkedin.com/in/prajapati-shreya-183p";

/* =========================
   FLOATING FIELD — outside Contact to prevent remount on every keystroke
========================= */
const FloatingField = ({
                           id,
                           label,
                           type = "text",
                           value,
                           onChange,
                           error,
                           maxLength,
                       }: {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    maxLength?: number;
}) => (
    <div className="relative">
        <Input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            placeholder=" "
            className="peer h-14 pt-5 bg-background/60 border-border focus-visible:ring-primary/40 focus-visible:border-primary transition-colors"
        />
        <label
            htmlFor={id}
            className="pointer-events-none absolute left-3 top-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-muted-foreground/70 peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:tracking-widest peer-focus:text-primary"
        >
            {label}
        </label>
        {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
);

/* =========================
   CONTACT COMPONENT
========================= */
export const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);

    const onChange =
        (k: keyof typeof form) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setForm({ ...form, [k]: e.target.value });
            };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const parsed = schema.safeParse(form);
        if (!parsed.success) {
            const next: Record<string, string> = {};
            parsed.error.issues.forEach((i) => {
                next[i.path[0] as string] = i.message;
            });
            setErrors(next);
            return;
        }

        setErrors({});
        setSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Failed");

            setSent(true);
            toast.success("Message sent!", {
                description: "Thanks — I'll get back to you soon.",
            });
            setForm({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setSent(false), 3500);
        } catch {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="section-padding pt-32 md:pt-40 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-dotted opacity-25 pointer-events-none" />
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-primary/15 blur-3xl -z-10 animate-blob" />

            <div className="container mx-auto max-w-6xl px-6 relative">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                        Contact
                    </p>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
                        Let's build <span className="text-gradient">something great</span>.
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Have a project in mind, a role to fill, or just want to say hi? My inbox is open.
                    </p>
                </motion.div>

                <div className="mt-14 grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-12 items-start">
                    {/* LEFT: info panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-28 space-y-5"
                    >
                        {/* Availability */}
                        <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                            <div className="relative">
                                <span className="absolute inset-0 rounded-full bg-primary opacity-50 blur-md animate-pulse" />
                                <span className="relative h-3 w-3 rounded-full bg-primary block" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-foreground">Available for new work</p>
                                <p className="text-xs text-muted-foreground">Replies within 24 hours</p>
                            </div>
                        </div>

                        {/* Direct links */}
                        <ul className="glass-card rounded-2xl p-3 space-y-1">
                            {[
                                { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                                { Icon: Github, label: "GitHub", value: "shreyaoptimitylogics-ai", href: GITHUB },
                                { Icon: Linkedin, label: "LinkedIn", value: "prajapati-shreya-183p", href: LINKEDIN },
                            ].map((c) => (
                                <li key={c.label}>
                                    <motion.a
                                        href={c.href}
                                        target={c.href.startsWith("http") ? "_blank" : undefined}
                                        rel="noreferrer noopener"
                                        whileHover={{ x: 4 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="flex items-center gap-4 rounded-xl p-3 hover:bg-secondary/60 transition-colors group"
                                    >
                                        <span className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-accent text-primary-foreground shadow-elegant group-hover:shadow-glow group-hover:scale-110 transition-all">
                                            <c.Icon className="h-4 w-4" />
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                                                {c.label}
                                            </p>
                                            <p className="text-sm font-medium text-foreground truncate">{c.value}</p>
                                        </div>
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* RIGHT: form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="absolute -inset-2 rounded-3xl bg-primary opacity-10 blur-2xl -z-10" />

                        <div className="glass-card rounded-2xl p-6 md:p-8 shadow-elegant">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-accent text-primary-foreground shadow-elegant">
                                    <MessageSquare className="h-4 w-4" />
                                </span>
                                <div>
                                    <h3 className="font-display font-semibold text-foreground">Send a message</h3>
                                    <p className="text-xs text-muted-foreground">
                                        Fill the form and I'll get back to you.
                                    </p>
                                </div>
                            </div>

                            {/* Quick topic chips */}
                            <div className="mb-5">
                                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                                    What's it about?
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {quickTopics.map((t) => {
                                        const active = form.subject === t;
                                        return (
                                            <button
                                                key={t}
                                                type="button"
                                                onClick={() => setForm((f) => ({ ...f, subject: active ? "" : t }))}
                                                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
                                                    active
                                                        ? "bg-primary text-primary-foreground border-primary shadow-elegant"
                                                        : "bg-background border-border text-foreground/80 hover:border-primary hover:text-primary"
                                                }`}
                                            >
                                                {t}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <form onSubmit={onSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <FloatingField
                                        id="name"
                                        label="Your name"
                                        value={form.name}
                                        onChange={onChange("name") as (e: React.ChangeEvent<HTMLInputElement>) => void}
                                        error={errors.name}
                                        maxLength={100}
                                    />
                                    <FloatingField
                                        id="email"
                                        label="Email address"
                                        type="email"
                                        value={form.email}
                                        onChange={onChange("email") as (e: React.ChangeEvent<HTMLInputElement>) => void}
                                        error={errors.email}
                                        maxLength={255}
                                    />
                                </div>

                                <div className="relative">
                                    <Textarea
                                        id="message"
                                        value={form.message}
                                        onChange={onChange("message")}
                                        rows={6}
                                        maxLength={1000}
                                        placeholder=" "
                                        className="peer pt-6 bg-background/60 border-border focus-visible:ring-primary/40 focus-visible:border-primary resize-none transition-colors"
                                    />
                                    <label
                                        htmlFor="message"
                                        className="pointer-events-none absolute left-3 top-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-muted-foreground/70 peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:tracking-widest peer-focus:text-primary"
                                    >
                                        Tell me about your project
                                    </label>
                                    <div className="mt-1 flex items-center justify-between">
                                        {errors.message ? (
                                            <p className="text-xs text-destructive">{errors.message}</p>
                                        ) : (
                                            <span />
                                        )}
                                        <span className="text-[11px] text-muted-foreground tabular-nums">
                                            {form.message.length}/1000
                                        </span>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={submitting || sent}
                                    size="lg"
                                    className="group relative w-full sm:w-auto rounded-full bg-gradient-accent text-primary-foreground shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all overflow-hidden"
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        {sent ? (
                                            <motion.span
                                                key="sent"
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -6 }}
                                                className="flex items-center gap-2"
                                            >
                                                <CheckCircle2 className="h-4 w-4" /> Message sent
                                            </motion.span>
                                        ) : submitting ? (
                                            <motion.span
                                                key="sending"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                Sending...
                                            </motion.span>
                                        ) : (
                                            <motion.span
                                                key="idle"
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -6 }}
                                                className="flex items-center gap-2"
                                            >
                                                Send Message{" "}
                                                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                <p className="mt-20 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Shreya Prajapati — Crafted with care.
                </p>
            </div>
        </section>
    );
};