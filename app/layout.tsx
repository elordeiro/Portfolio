import "./globals.css";

import type { Viewport } from "next";
import type { Metadata } from "next";

import { Inter, Dancing_Script, Anton, Rubik } from "next/font/google";

import Navbar from "./Components/Navbar";

const custom_font = Inter({ subsets: ["latin"] });
// const custom_font = Dancing_Script({ subsets: ["latin"] });
// const custom_font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Estevao Lordeiro Portfolio",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 0.8,
    maximumScale: 1,
    userScalable: false,
    viewportFit: "cover",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={custom_font.className}>
                <Navbar />
                <div className="cool-bg-fixed"></div>
                <main className="flex flex-col items-center z-10 pt-24">
                    {children}
                </main>
            </body>
        </html>
    );
}
