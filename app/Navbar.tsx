import React from "react";

export default function Navbar() {
    return (
        <div className="navbar">
            <span className="flex justify-center py-3 text-amber-400 font-semibold">
                <a className="pr-10">Home</a>
                <a className="pr-10 pl-10">About</a>
                <a className="pl-10">Contact</a>
            </span>
        </div>
    );
}
