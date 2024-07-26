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
        ["itim2101", "proj0"],
        ["Uniconlabs", "proj1"],
        ["the best icon", "proj2"],
        ["Soremba", "proj3"],
        ["itim2101", "proj4"],
        ["lutfix", "proj5"],
        ["mangsaabguru", "proj6"],
        ["Uniconlabs", "proj7"],
        ["Karyative", "proj8"],
        ["Iconjam", "proj9"],
        ["Iconjam", "proj10"],
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
