"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import "github-markdown-css";
import gfm from "remark-gfm";
import { ProjectPageProps } from "../Utils/Interfaces";

export default function ProjectPage({
    title,
    showcase,
    readme,
}: ProjectPageProps) {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        axios.get(readme).then((response) => {
            setMarkdown(response.data);
        });
    }, [readme]);
    return (
        <div className="flex flex-col w-[90dvw] max-w-[1020px]">
            <div className="text-4xl md:text-5xl lg:text-7xl font-thin text-amber-400 title-text-shadow text-center">
                {title}
            </div>

            <div className="my-10 rounded-xl p-5 shadow-inner shadow-amber-500 divide-y-2">
                <div className="flex flex-col pb-10">
                    <div className="text-xl text-amber-400">
                        Project Run / Image:
                    </div>
                    {showcase.startsWith("http") ? (
                        <iframe
                            width="560"
                            height="315"
                            src={showcase}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true}
                            className="self-center items-center max-w-full"
                        ></iframe>
                    ) : (
                        <Image
                            width="560"
                            height="315"
                            src={showcase}
                            alt=""
                            className="self-center items-center max-w-full"
                        />
                    )}
                </div>
                <div className="mt-5 self-center">
                    <div className="text-xl text-amber-400 py-5">README:</div>
                    <ReactMarkdown
                        remarkPlugins={[gfm]}
                        className="markdown-body"
                    >
                        {markdown}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}
