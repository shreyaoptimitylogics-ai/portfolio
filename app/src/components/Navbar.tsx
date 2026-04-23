import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import {useTheme} from "@/app/src/hooks/use-theme";
import {cn} from "@/app/src/lib/utils";


const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const { theme, toggle } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

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
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                scrolled ? "py-3" : "py-5"
            )}
        >
            <div className="mx-auto max-w-6xl px-4">
                <nav
                    className={cn(
                        "flex items-center justify-between rounded-2xl px-5 py-3 transition-all",
                        scrolled ? "glass shadow-soft" : "bg-transparent"
                    )}
                >
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
                            className="h-9 w-9 object-contain transition-transform group-hover:scale-105"
                        />
                        <span className="hidden sm:inline text-base">
              Shreya<span className="text-gradient"> Prajapati</span>
            </span>
                    </button>

                    <ul className="hidden md:flex items-center gap-1">
                        {links.map((l) => (
                            <li key={l.id}>
                                <button
                                    onClick={() => go(l.id)}
                                    className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                                >
                                    {l.label}
                                    <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggle}
                            aria-label="Toggle theme"
                            className="relative h-9 w-9 rounded-full glass shadow-soft flex items-center justify-center hover:scale-105 transition-transform"
                        >
                            <motion.div
                                key={theme}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.35 }}
                            >
                                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            </motion.div>
                        </button>
                        <button
                            className="md:hidden h-9 w-9 rounded-full glass flex items-center justify-center"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Menu"
                        >
                            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </nav>

                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-2 glass rounded-2xl p-3 shadow-soft flex flex-col"
                    >
                        {links.map((l) => (
                            <li key={l.id}>
                                <button
                                    onClick={() => go(l.id)}
                                    className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors"
                                >
                                    {l.label}
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </div>
        </motion.header>
    );
}
