export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center font-light">
            <span className="mt-[60px] text-4xl md:text-5xl lg:text-7xl font-thin text-amber-400">
                {"About Me"}
            </span>
            <div className="grid w-[90dvw] sm:w-[60dvw] mt-20 text-lg gap-10">
                <p
                    className="first-line:uppercase first-line:tracking-widest first-letter:text-7xl 
                    first-letter:font-bold first-letter:text-amber-400 first-letter:mr-3 first-letter:float-left"
                >
                    I am a recent graduate in computer science, passionate about
                    solving complex problems and creating innovative solutions.
                    My academic journey has equipped me with a solid foundation
                    in computer science principles and modern programming
                    languages. I am eager to apply my skills in a challenging
                    work environment. I am open to opportunities that will allow
                    me to grow professionally and I am willing to relocate to
                    achieve this. I am excited to bring my dedication and
                    creativity to a dynamic team where I can contribute to
                    impactful projects.
                </p>
                <section>
                    <p className="text-4xl mb-4 text-amber-400">Education</p>
                    <p className="text-2xl font-medium">
                        University of Massachusetts Boston
                    </p>
                    <p className="text-xl text-amber-200 ml-2">
                        Bachelor of Science in Computer Science
                    </p>
                </section>
                <div>
                    <p className="text-4xl mb-4 text-amber-400">Skills</p>
                    <section className="mb-10">
                        <p className="text-2xl italic mb-2 text-amber-200">
                            Programming Languages:
                        </p>
                        <ol className="list-decimal list-inside text-xl ml-2">
                            <li>Java</li>
                            <li>Python</li>
                            <li>C</li>
                            <li>C#</li>
                            <li>Typescript / JavaScript</li>
                            <li>HTML, CSS</li>
                        </ol>
                    </section>
                    <section className="mb-10">
                        <p className="text-2xl italic mb-2 text-amber-200">
                            Frameworks and Libraries:
                        </p>
                        <ol className="list-decimal list-inside text-xl ml-2">
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>SpringBoot</li>
                            <li>JUnit</li>
                            <li>Maven</li>
                            <li>Pygame</li>
                            <li>Mermaid</li>
                            <li>Tensorflow</li>
                        </ol>
                    </section>
                    <section className="mb-10">
                        <p className="text-2xl italic mb-2 text-amber-200">
                            Technologies:
                        </p>
                        <ol className="list-decimal list-inside text-xl ml-2">
                            <li>Git, GitHub, GitLab</li>
                            <li>Next.js</li>
                            <li>Linux, MacOs, Windows</li>
                            <li>VSCode</li>
                            <li>Arduino</li>
                        </ol>
                    </section>
                    <section className="mb-10">
                        <p className="text-2xl italic mb-2 text-amber-200">
                            Soft Skills:
                        </p>
                        <ol className="list-decimal list-inside text-xl ml-2">
                            <li>Teamwork</li>
                            <li>Communication</li>
                            <li>Problem Solving</li>
                            <li>Adaptability</li>
                            <li>Time Management</li>
                            <li>Leadership</li>
                        </ol>
                    </section>
                    <section className="mb-10">
                        <p className="text-2xl italic mb-2 text-amber-200">
                            Languages:
                        </p>
                        <ol className="list-decimal list-inside text-xl ml-2">
                            <li>English</li>
                            <li>Portuguese</li>
                        </ol>
                    </section>
                </div>
            </div>
        </main>
    );
}
