import type { Metadata } from "next";
import { Inter, Dancing_Script, Anton, Rubik } from "next/font/google";
import "./globals.css";

const custom_font = Inter({ subsets: ["latin"] });
// const custom_font = Dancing_Script({ subsets: ["latin"] });
// const custom_font = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Estevao Lordeiro Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={custom_font.className}>{children}</body>
        </html>
    );
}
