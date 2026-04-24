"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext({
    theme: "light" as Theme,
    toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const isDark =
            document.documentElement.classList.contains("dark");

        setTheme(isDark ? "dark" : "light");
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        document.documentElement.classList.toggle(
            "dark",
            theme === "dark"
        );

        localStorage.setItem("theme", theme);
    }, [theme, mounted]);

    const toggle = () =>
        setTheme((prev) =>
            prev === "dark" ? "light" : "dark"
        );

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);