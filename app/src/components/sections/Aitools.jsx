"use client";

import { motion } from "framer-motion";

/* ─────────────────────────────────────────
   AI TOOLS DATA
───────────────────────────────────────── */
const aiTools = [
  {
    name: "Emergent",
    category: "Full-Stack Builder",
    desc: "Build complete full-stack apps from natural language — backend, frontend, database all at once.",
    logo: "/emergent.jpg",
    hasBg: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Lovable",
    category: "UI Generation",
    desc: "Turn prompts into polished React UIs instantly — great for rapid prototyping and MVPs.",
    logo: "/lovable-ai.png",
    hasBg: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    name: "v0 by Vercel",
    category: "Component Generation",
    desc: "Generate production-ready shadcn/ui components with Tailwind CSS from simple descriptions.",
    logo: "/v0-ai.svg",
    hasBg: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.499-.054z" />
      </svg>
    ),
  },
  {
    name: "Cursor",
    category: "AI Code Editor",
    desc: "VS Code-powered editor with AI pair programming — autocomplete, refactor, and chat with codebase.",
    logo: "/cursor-ai.png",
    hasBg: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M13.5 3L3 8.5v7L13.5 21 24 15.5v-7L13.5 3zm0 2.31L21.69 9 13.5 12.69 5.31 9 13.5 5.31zM4 10.38l8.5 3.81v5.5L4 15.88v-5.5zm10.5 9.31v-5.5L23 10.38v5.5l-8.5 3.81z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    category: "AI Assistant",
    desc: "Anthropic's AI for complex reasoning, code review, architecture planning, and writing.",
    logo: "/claude.jpg",
    hasBg: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
  },
  {
    name: "GitHub Copilot",
    category: "Code Assistant",
    desc: "AI pair programmer that suggests whole lines and functions right in the editor as you type.",
    logo: "/githubcopilot.webp",
    hasBg: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .5C5.7.5.7 5.7.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.2 2.1 2.7 2.1.6 0 1.2-.1 1.7-.3.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.4 1.2.2 2.2.1 3.2a4.7 4.7 0 011.2 3.2c0 4.7-2.7 5.7-5.3 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A11.3 11.3 0 0023.3 12C23.3 5.7 18.3.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: "Bolt.new",
    category: "Web App Builder",
    desc: "StackBlitz-powered AI that builds, runs and deploys full web apps in the browser instantly.",
    logo: "/bolt.png",
    hasBg: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: "MotionSites AI",
    category: "Design Inspiration",
    desc: "Discover premium animated websites, modern UI inspiration, motion effects, and next-gen interactive experiences.",
    logo: "/motionsites.png",
    hasBg: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
        <path d="M4 12C6.5 7 9 4 12 4s5.5 3 8 8c-2.5 5-5 8-8 8s-5.5-3-8-8z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function AITools() {
  return (
    <section
      id="ai-tools"
      className="py-14 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[color:var(--emerald)]/8 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[color:var(--emerald)]/5 blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs sm:text-sm font-medium text-[color:var(--emerald)] uppercase tracking-widest">
            AI Workflow
          </p>

          <h2 className="mt-3 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl">
            I build faster with AI.
          </h2>

          <p className="mt-4 sm:mt-5 leading-relaxed text-muted-foreground text-base sm:text-lg max-w-[52ch]">
            These are the AI tools I use daily — from generating UI components to
            shipping full-stack features. AI doesn't replace craft; it amplifies it.
          </p>
        </motion.div>

        {/* ── TOOLS GRID ── */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-4 sm:gap-5
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4"
        >
          {aiTools.map((tool, i) => (
            <motion.a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-elegant transition-all duration-200 group flex flex-col"
            >
              {/* ── Icon + Category row ── */}
              <div className="flex items-center justify-between gap-3 mb-4">

                {/* Logo container — white bg for logos without bg */}
                <div
                  className={`
                    h-10 w-10 sm:h-11 sm:w-11 
                    rounded-xl 
                    flex items-center justify-center 
                    group-hover:scale-110 transition-transform 
                    shrink-0 overflow-hidden
                    ${!tool.hasBg
                    ? "bg-white p-1.5"
                    : "bg-transparent"
                  }
                  `}
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>

                {/* Category badge — no border, just bg + radius */}
                <span className="
                  text-[9px] sm:text-[10px]
                  font-semibold uppercase tracking-widest
                  text-[color:var(--emerald)]
                  bg-[color:var(--emerald)]/10
                  px-2 py-1
                  rounded-full
                  leading-tight
                  text-center
                ">
                  {tool.category}
                </span>
              </div>

              {/* Tool name */}
              <h3 className="font-semibold text-sm sm:text-base text-foreground">
                {tool.name}
              </h3>

              {/* Description */}
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                {tool.desc}
              </p>

              {/* Visit link */}
              <div className="mt-4 flex items-center gap-1.5 text-[color:var(--emerald)] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Visit</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ── BOTTOM TAGLINE ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-muted-foreground"
        >
          Using AI as a{" "}
          <span className="text-[color:var(--emerald)] font-medium">
            force multiplier
          </span>{" "}
          — not a shortcut. Every line reviewed, every decision intentional.
        </motion.p>

      </div>
    </section>
  );
}