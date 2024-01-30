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
        case "battleship":
            projectData.title = "Battleship";
            projectData.showcase = "https://www.youtube.com/embed/kxVwudFWGZA";
            projectData.readme =
                "https://raw.githubusercontent.com/elordeiro/battleship/master/README.md";
            break;
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
    }
    return (
        <ProjectPage
            title={projectData.title}
            showcase={projectData.showcase}
            readme={projectData.readme}
        />
    );
}
