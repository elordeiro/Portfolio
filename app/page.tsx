"use client";

import Project from "./Components/Project";
import { ProjectProps, Projects } from "./Utils/Projects";
import { useEffect, useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Credits from "./Components/Credits";
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
        <>
            <div className="text-4xl md:text-5xl lg:text-7xl font-thin text-amber-400 title-text-shadow">
                {"Estevão Dev. Portfolio"}
            </div>
            <span className="py-10 font-mono italic text-xs md:text-lg text-center">
                {"This is my portfolio. "}
                {(width ?? 0) < 911 && <br />}
                {"I'm a software developer,"}
                {(width ?? 0) < 911 && <br />}
                {" and I'm passionate about technology."}
                {(width ?? 0) > 910 && (
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

                <div className="h-[50px]"></div>
                <Accordion type="single" collapsible className="">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Icon Credits</AccordionTrigger>
                        <AccordionContent>
                            <Credits />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="h-[50px]"></div>
        </>
    );
}
