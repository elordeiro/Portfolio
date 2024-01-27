"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import Project from "./Project";
import { ProjectProps, Projects } from "./Projects";
import { useEffect, useState } from "react";

export default function Home() {
    const [width, setWidth] = useState<number | undefined>(undefined);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        // Check if window is defined (it won't be during SSR)
        if (typeof window !== "undefined") {
            // Set width to initial client-side width
            setWidth(window.innerWidth);

            // Add event listener for window resize
            window.addEventListener("resize", handleWindowResize);

            // Cleanup on unmount
            return () => {
                window.removeEventListener("resize", handleWindowResize);
            };
        }
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center">
            <Navbar />
            <span className="mt-[60px] text-4xl md:text-5xl lg:text-7xl font-thin">
                {"Estevão Dev. Portfolio"}
            </span>
            <span className="py-10 font-mono italic text-xs md:text-lg text-center">
                {"This is my portfolio."}
                {width < 911 && <br />}
                {"I'm a software developer,"}
                {width < 911 && <br />}
                {" and I'm passionate about technology."}
                {width > 910 && (
                    <>
                        <hr className="w-full" />
                        <hr className="w-full" />
                    </>
                )}
            </span>
            <div className="grid w-[90dvw] max-w-[800px] gap-10">
                {Projects.map((project: ProjectProps, key: number) => (
                    <Project
                        title={project.title}
                        projLink={project.projLink}
                        logo={project.logo}
                        description={project.description}
                        tech={project.tech}
                        github={project.github}
                        key={key}
                    />
                ))}
            </div>
            <div className="h-[100px]"></div>
        </main>
    );
}
