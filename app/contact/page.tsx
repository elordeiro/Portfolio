import Image from "next/image";

export default function page() {
    return (
        <main className="flex min-h-screen flex-col items-center font-light">
            <span className="mt-[60px] text-4xl md:text-5xl lg:text-7xl font-thin text-amber-400">
                {"Contact Me"}
            </span>
            <div className="grid w-[90dvw] sm:w-[60dvw] mt-20 text-lg gap-10">
                <section className="mb-10">
                    <p className="text-2xl italic mb-2 text-amber-400">Email</p>
                    <p className="m-2 flex">
                        <Image
                            src="/email.png"
                            width={20}
                            height={20}
                            alt=""
                            className="object-contain"
                        />
                        <a
                            href="mailto:estevao@lordeiro.com"
                            className="text-xl ml-2 underline text-amber-200 text-amber-200"
                        >
                            estevao@lordeiro.com
                        </a>
                    </p>
                </section>
                <section className="mb-10">
                    <p className="text-2xl italic mb-2 text-amber-400">
                        LinkedIn:
                    </p>
                    <p className="m-2 flex">
                        <Image
                            src="/linkedin.png"
                            width={20}
                            height={20}
                            alt=""
                            className="object-contain"
                        />
                        <a
                            href="https://www.linkedin.com/in/elordeiro/"
                            className="text-xl ml-2 underline text-amber-200"
                            target="_blank"
                        >
                            https://www.linkedin.com/in/elordeiro/
                        </a>
                    </p>
                </section>
                <section className="mb-10">
                    <p className="text-2xl italic mb-2 text-amber-400">
                        Other Works:
                    </p>
                    <p className="text-xl ml-2">
                        You can check out some of my other works at:
                    </p>
                    <p className="m-2 flex">
                        <Image
                            src="/github.png"
                            width={20}
                            height={20}
                            alt=""
                            className="object-contain"
                        />
                        <a
                            href="https://github.com/elordeiro"
                            className="text-xl ml-2 underline text-amber-200"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </p>
                    <p className="m-2 flex">
                        <Image
                            src="/leetcode.png"
                            width={20}
                            height={20}
                            alt=""
                            className="object-contain"
                        />
                        <a
                            href="https://leetcode.com/theleetcodeaccount/"
                            className="text-xl ml-2 underline text-amber-200"
                            target="_blank"
                        >
                            LeetCode
                        </a>
                    </p>
                    <p className="m-2 flex">
                        <Image
                            src="/youtube.png"
                            width={20}
                            height={20}
                            alt=""
                            className="object-contain"
                        />
                        <a
                            href="https://www.youtube.com/channel/UCaod87aatcE2XQZEi3msJvQ"
                            className="text-xl ml-2 underline text-amber-200"
                            target="_blank"
                        >
                            YouTube
                        </a>
                    </p>
                </section>
            </div>
        </main>
    );
}
