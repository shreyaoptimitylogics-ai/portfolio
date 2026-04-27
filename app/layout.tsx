import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/src/hooks/use-theme";
import SmoothScroll from "./SmoothScroll";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Shreya Prajapati | Senior Frontend Developer",
    description:
        "Frontend Developer specializing in React.js, Next.js, Tailwind CSS, responsive UI, and scalable web applications.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(){
                            try {
                                var stored = localStorage.getItem('theme');
                                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                var isDark = stored === 'dark' || (stored === null && prefersDark);
                                if (isDark) {
                                    document.documentElement.classList.add('dark');
                                }
                            } catch(e) {}
                        })();`,
                }}
            />
        </head>

        <body className="min-h-full flex flex-col">
        <ThemeProvider>
            <SmoothScroll>
                {children}
            </SmoothScroll>
        </ThemeProvider>
        </body>
        </html>
    );
}