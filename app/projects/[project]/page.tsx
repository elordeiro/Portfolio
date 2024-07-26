import ProjectPage from "../../Components/ProjectPage";
import { ProjectPageProps } from "@/app/Utils/Interfaces";

export default function Page({ params }: { params: { project: string } }) {
    const project = params.project;

    const projectData: ProjectPageProps = {
        title: "",
        showcase: "",
        readme: "",
    };

    switch (project) {
        case "dsa":
            projectData.title = "Data Structures and Algorithms";
            projectData.showcase = "/dsa.png";
            projectData.readme =
                "https://raw.githubusercontent.com/elordeiro/DataStructures_C/master/README.md";
            break;
        case "huffman":
            projectData.title = "Compression & Decompression Program";
            projectData.showcase = "/huffman.png";
            projectData.readme =
                "https://raw.githubusercontent.com/elordeiro/HuffmanCompression/master/README.md";
            break;
        case "tictactoe":
            projectData.title = "Tic Tac Toe with Minimax Algorithm";
            projectData.showcase = "https://www.youtube.com/embed/bkAGMafTDpk";
            projectData.readme =
                "https://raw.githubusercontent.com/elordeiro/tictactoe/master/README.md";
            break;
        case "uno":
            projectData.title = "Uno Game Simulator";
            projectData.showcase = "https://www.youtube.com/embed/mTuCcxRZe0I";
            projectData.readme =
                "https://raw.githubusercontent.com/elordeiro/Uno/master/Readme.md";
            break;
        case "redis":
            projectData.title = "Redis Server";
            projectData.showcase = "/redis.png";
            projectData.readme =
                "https://raw.githubusercontent.com/elordeiro/building-my-own-redis/main/README.md";
            break;
        case "http":
            projectData.title = "HTTP Server";
            projectData.showcase = "/http.png";
            projectData.readme =
                "https://raw.githubusercontent.com/elordeiro/HTTP-Server/master/README.md";
            break;
    }
    return (
        <main className="flex min-h-screen flex-col items-center font-light">
            <ProjectPage
                title={projectData.title}
                showcase={projectData.showcase}
                readme={projectData.readme}
            />
        </main>
    );
}
