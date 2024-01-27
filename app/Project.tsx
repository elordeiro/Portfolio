import React from "react";
import Image from "next/image";
import { ProjectProps } from "./Projects";

export default function Project({
    title,
    projLink,
    logo,
    description,
    tech,
    github,
}: ProjectProps) {
    return (
        <div className="rounded-xl border-2 border-amber-500 grid grid-cols-2 p-5 gap-5 divide-dotted divide-y-2">
            <div className="col-span-2 flex">
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt=""
                    className="object-contain"
                />
                <h1 className="text-amber-400 self-end pl-5 text-4xl text-center w-full pr-[55px]">
                    {title}
                </h1>
            </div>
            <div className="flex justify-center col-span-2 pt-5 items-center">
                <Image
                    src="/lcurly.png"
                    width={50}
                    height={50}
                    alt=""
                    className="object-contain"
                />
                <a href={projLink} className="button h-fit">
                    View Project
                </a>
                <Image
                    src="/rcurly.png"
                    width={50}
                    height={50}
                    alt=""
                    className="object-contain"
                />
            </div>
            <span className="col-span-2 pt-5">
                <div className="flex">
                    <Image
                        src="/description.png"
                        width={20}
                        height={20}
                        alt=""
                        className="object-contain mr-2"
                    />
                    <p className="text-amber-400">Description:</p>
                </div>
                {description}
            </span>
            <span className="pt-5">
                <div className="flex">
                    <Image
                        src="/code.png"
                        width={20}
                        height={20}
                        alt=""
                        className="object-contain mr-2"
                    />
                    <p className="text-amber-400">Tech / Skills:</p>
                </div>
                <div className="flex">
                    <Image
                        src="/arrow.png"
                        width={20}
                        height={20}
                        alt=""
                        className="object-contain md:ml-5 mr-2"
                    />
                    {tech}
                </div>
            </span>
            <span className="pt-5">
                <div className="flex flex-col">
                    <div className="flex">
                        <Image
                            src="/GitHub.png"
                            width={20}
                            height={20}
                            alt=""
                            className="object-contain ml-5 mr-2"
                        />
                        <p className="text-amber-400">GitHub:</p>
                    </div>
                    <div className="flex max-w-full">
                        <Image
                            src="/link.png"
                            width={20}
                            height={20}
                            alt=""
                            className="object-contain ml-5 sm:ml-10 mr-2"
                        />
                        <a
                            href={github}
                            className="underline text-amber-400 hover:cursor-pointer"
                        >
                            {title}
                        </a>
                    </div>
                </div>
            </span>
        </div>
    );
}
