import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/src/hooks/use-theme";

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
    keywords: [
        "Frontend Developer",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Portfolio",
        "Shreya Prajapati",
    ],
    icons: {
        icon: "/logo.png?v=4",
        shortcut: "/logo.png?v=4",
        apple: "/logo.png?v=4",
    },
    openGraph: {
        title: "Shreya Prajapati Portfolio",
        description: "Frontend Developer Portfolio",
        url: "https://shreyaprajapati-portfolio.vercel.app",
        siteName: "Portfolio",
        images: [{ url: "/logo.png", width: 1200, height: 630 }],
        type: "website",
    },
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
            {/*
                 * Ye script React se PEHLE execute hoti hai.
                 * Isliye page paint hone se pehle hi <html> pe
                 * "dark" class lag jaati hai — white flash band.
                 */}
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
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}