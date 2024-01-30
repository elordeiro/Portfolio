"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

import React from "react";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <>
            <header className="navbar">
                <nav className="flex justify-center py-3 text-amber-400 font-semibold">
                    <Link
                        key="Home"
                        href="/"
                        className={`pr-5 border-r border-[--border-div] ${
                            pathname === "/" ? "text-shadow" : ""
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        key="About"
                        href="/about"
                        className={`px-5 border-r border-[--border-div] ${
                            pathname === "/about" ? "text-shadow" : ""
                        }`}
                    >
                        About
                    </Link>
                    <Link
                        key="Contact"
                        href="/contact"
                        className={`pl-5 ${
                            pathname === "/contact" ? "text-shadow" : ""
                        }`}
                    >
                        Contact
                    </Link>
                </nav>
            </header>
        </>
    );
}
