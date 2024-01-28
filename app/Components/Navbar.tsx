import Link from "next/link";

import React from "react";

export default function Navbar() {
    return (
        <div className="navbar">
            <span className="flex justify-center py-3 text-amber-400 font-semibold">
                <Link key="Home" href="/" className="pr-10">
                    Home
                </Link>
                <Link key="About" href="/about" className="pr-10 pl-10">
                    About
                </Link>
                <Link key="Contact" href="/contact" className="pl-10">
                    Contact
                </Link>
            </span>
        </div>
    );
}
