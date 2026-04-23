import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
            },
        ],
        type: "website",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}