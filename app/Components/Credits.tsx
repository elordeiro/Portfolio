import React from "react";
import Image from "next/image";

export default function Credits() {
    const credits = [
        ["Iconjam", "favicon"],
        ["Icon Hubs", "lcurly"],
        ["Icon Hubs", "rcurly"],
        ["Uniconlabs", "description"],
        ["Vector Squad", "code"],
        ["Cap Cool", "arrow"],
        ["Iconjam", "link"],
        ["Karyative", "proj8"],
        ["Uniconlabs", "proj7"],
        ["mangsaabguru", "proj6"],
        ["lutfix", "proj5"],
        ["itim2101", "proj4"],
        ["Soremba", "proj3"],
        ["the best icon", "proj2"],
        ["Uniconlabs", "proj1"],
        ["itim2101", "proj0"],
        ["iconixar", "email"],
        ["riajulislam", "linkedin"],
        ["Freepik", "github"],
        ["Freepik", "youtube"],
    ];
    return (
        <div>
            Icons from{" "}
            <a
                href="https://www.flaticon.com/"
                title="Flaticon"
                className="underline text-amber-200"
            >
                Flaticon
            </a>
            <br />
            <br />
            <ul className="list-disc">
                {credits.map(([author, work]) => (
                    <li key={author + work}>
                        <div className="flex">
                            <Image
                                src={`/${work}.${
                                    work === "favicon" ? "ico" : "png"
                                }`}
                                width="20"
                                height="20"
                                alt=""
                                className="object-contain mr-5 mb-2"
                            />
                            <a
                                href={`https://www.flaticon.com/authors/${author}`}
                                title={author}
                                className="underline text-amber-200"
                            >
                                {author}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
