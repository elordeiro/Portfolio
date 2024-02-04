import Link from "next/link";
import { Projects } from "../Utils/Projects";
import { ProjectProps } from "../Utils/Interfaces";

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center font-light">
            <span className="text-4xl md:text-5xl lg:text-7xl font-thin text-amber-400 title-text-shadow">
                {"All Projects"}
            </span>
            <div>
                <div className="grid w-[90dvw] sm:w-[60dvw] mt-20 text-lg gap-10"></div>
                <section className="mb-10">
                    <ul>
                        {Projects.map((project: ProjectProps, key: number) => (
                            <li key={key} className="list-disc">
                                <Link
                                    key={project.title}
                                    href={project.projLink}
                                    className="underline text-amber-200"
                                >
                                    {project.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}
