"use client";

import {ThemeProvider} from "@/app/src/hooks/use-theme";
import {Toaster} from "@/app/src/components/ui/sonner";
import Navbar from "@/app/src/components/Navbar";
import Hero from "@/app/src/components/sections/Hero";
import About from "@/app/src/components/sections/About";
import Skills from "@/app/src/components/sections/Skills";
import Projects from "@/app/src/components/sections/Projects";
import Experience from "@/app/src/components/sections/Experience";
import {Contact} from "@/app/src/components/sections/Contact";
import {IntroVideo} from "@/app/src/components/sections/intro";
export default function Page() {
    return (
        <ThemeProvider>
            <main className="relative">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <IntroVideo/>
                <Projects />
                <Experience />
                <Contact />
                <Toaster />
            </main>
        </ThemeProvider>
    );
}