import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/app/src/hooks/use-theme";
import { cn } from "@/app/src/lib/utils";

const links = [
    { id: "home",       label: "Home"       },
    { id: "about",      label: "About"      },
    { id: "skills",     label: "Skills"     },
    { id: "projects",   label: "Projects"   },
    { id: "experience", label: "Experience" },
    { id: "contact",    label: "Contact"    },
];

export default function Navbar() {
    const { theme, toggle } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen]         = useState(false);
    const [mounted, setMounted]   = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const go = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                scrolled ? "py-3" : "py-5"
            )}
        >
            <div className="mx-auto max-w-6xl px-4">
                <nav
                    className={cn(
                        "flex items-center justify-between rounded-2xl px-5 py-3",
                        scrolled ? "glass shadow-soft" : "bg-transparent"
                    )}
                >
                    {/* Logo */}
                    <button
                        onClick={() => go("home")}
                        className="flex items-center gap-2 font-display font-bold tracking-tight group"
                        aria-label="Shreya Prajapati — Home"
                    >
                        <img
                            src="/logo.png"
                            alt="SP monogram logo"
                            width={36}
                            height={36}
                            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="hidden sm:inline text-base transition-colors duration-300">
                            Shreya<span className="text-gradient"> Prajapati</span>
                        </span>
                    </button>

                    {/* Desktop nav links */}
                    <ul className="hidden md:flex items-center gap-1">
                        {links.map((l) => (
                            <li key={l.id}>
                                <button
                                    onClick={() => go(l.id)}
                                    className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                                >
                                    {l.label}
                                    <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Right — theme toggle + hamburger */}
                    <div className="flex items-center gap-2">

                        {/* Theme toggle — smooth icon swap with AnimatePresence */}
                        <button
                            onClick={toggle}
                            aria-label="Toggle theme"
                            className="relative h-9 w-9 rounded-full glass shadow-soft flex items-center justify-center hover:scale-105 transition-transform duration-200 overflow-hidden"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {mounted && (
                                    <motion.div
                                        key={theme}
                                        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                                        animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                                        exit={{   rotate:  90,  opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                    >
                                        {theme === "dark"
                                            ? <Sun  className="h-4 w-4" />
                                            : <Moon className="h-4 w-4" />
                                        }
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* Hamburger — smooth icon swap */}
                        <button
                            className="md:hidden h-9 w-9 rounded-full glass flex items-center justify-center overflow-hidden"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Menu"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={open ? "close" : "open"}
                                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                                    animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                                    exit={{   rotate:  90,  opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </div>
                </nav>

                {/* Mobile menu — smooth slide down */}
                <AnimatePresence>
                    {open && (
                        <motion.ul
                            initial={{ opacity: 0, y: -10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0,   scale: 1    }}
                            exit={{   opacity: 0, y: -10,  scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="md:hidden mt-2 rounded-2xl p-3 shadow-soft flex flex-col bg-card border border-border"
                        >
                            {links.map((l, i) => (
                                <motion.li
                                    key={l.id}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0  }}
                                    transition={{ duration: 0.2, delay: i * 0.04, ease: "easeOut" }}
                                >
                                    <button
                                        onClick={() => go(l.id)}
                                        className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors duration-150"
                                    >
                                        {l.label}
                                    </button>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}