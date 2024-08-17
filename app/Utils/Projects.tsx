import { title } from "process";

export const Projects = [
    {
        title: "Redis Server",
        projLink: "projects/redis",
        logo: "/proj9.png",
        description: [
            "Developed a Redis server from scratch in Go",
            "Engineered concurrent client handling for improved performance",
            "Implemented replication and command propagation features",
            "Added support for RDB persistence, including writing and reading from RDB files",
            "Introduced stream support with blocking read capabilities",
            "Created a Radix tree data structure for efficient key storage",
            "Implemented transactional support to ensure atomic operations}",
        ],
        tech: "Go, Redis, Server-side programming",
        github: "https://github.com/elordeiro/redis-server",
    },
    {
        title: "Battleship Multiplayer Game",
        projLink: "https://battleship.lordeiro.com/",
        logo: "/proj0.png",
        description: [
            "Developed a full-stack multiplayer game as part of a group, showing ability to work and cooperate in a team environment.",
            "Used Java, SpringBoot, and the MVC pattern in production, demonstrating proficiency in server-side programming and web development.",
            "Wrote an API for the game, allowing users to play against each other.",
            "Integrated a collection of test cases using JUnit to ensure the correctness of the game logic.",
            "Published the game on Railway.",
        ],
        tech: "Java, SpringBoot Server-side programming, JUnit, Web Development, Railway",
        github: "https://github.com/elordeiro/battleship",
    },
    {
        title: "Mortgage Calculator",
        projLink: "https://mortgage-calculator.lordeiro.com/",
        logo: "/proj1.png",
        description: [
            "Reverse Engineered and built a calculator that dynamically breaks down loan details for a mortgage.",
            "Formulated a responsive design and a user-friendly interface using React, Tailwind, and TypeScript.",
            "Deployed the application on Vercel and set up continuous deployment and continuous integration.",
        ],
        tech: "React, Tailwind, TypeScript, Next.js, CD/CI",
        github: "https://github.com/elordeiro/kw-internship",
    },
    {
        title: "SQLite Database Reader",
        projLink: "projects/sqlite",
        logo: "/proj11.png",
        description: [
            "Developed a SQLite database reader from scratch in Go",
            "Engineered a parser to read and interpret the SQLite file format",
            "Implemented a command-line interface to interact with the database",
            "Added support for querying the database and displaying the results",
            "Added support for reading using index pages for faster access",
        ],
        tech: "Go, SQLite, Databases, BTrees, CLI",
        github: "https://github.com/elordeiro/sqlmini",
    },
    {
        title: "HTTP Server",
        projLink: "projects/http",
        logo: "/proj10.png",
        description: [
            "Developed an HTTP server from scratch in Go",
            "Engineered concurrent client handling for improved performance",
            "Implemented a router and a middleware system",
            "Added support for static files and directory listing",
        ],
        tech: "Go, HTTP, Server-side programming",
        github: "https://github.com/elordeiro/http-server",
    },
    {
        title: "Grep",
        projLink: "projects/grep",
        logo: "/proj12.png",
        description: [
            "Developed a grep-like utility for matching regular expressions in strings",
            "Added support for basic regular expressions",
            "Added support for extended regular expressions with the -E flag",
            "Implemented backtracking for regular expression matching to handle backreferences",
        ],
        tech: "Go, Regular expressions, CLI",
        github: "https://github.com/elordeiro/grep",
    },
    {
        title: "GoLox",
        projLink: "projects/golox",
        logo: "/proj13.png",
        description: [
            "Developed a Lox interpreter in Go",
            "Engineered a scanner, parser, and interpreter for the Lox language",
            "(coming...) Implemented a bytecode compiler and a virtual machine",
            "(coming...) Added support for control flow, functions, and closures",
            "(coming...) Added support for classes and inheritance",
        ],
        tech: "Go, Interpreters, Compilers, Lox",
        github: "https://github.com/elordeiro/golox",
    },
    {
        title: "Health and Fitness Calculators",
        projLink: "https://elordeiro.github.io/hfcalcs/",
        logo: "/proj2.png",
        description: [
            "Designed and implemented a website with a collection of various types of calculators related to health and fitness.",
            "Created the website without using any frameworks, illustrating competence in fundamental HTML, CSS, and JavaScript.",
            "Compiled over 10 different types of the most used fitness calculators that have proved very useful in helping people achieve their fitness goals.",
        ],
        tech: "CSS, HTML, JavaScript, Web Development",
        github: "https://github.com/elordeiro/hfcalcs",
    },
    {
        title: " UMass Boston C.S. Program Chart",
        projLink:
            "https://umbcs.github.io/UMassCSPreReqChart/CSChart_unified.html",
        logo: "/proj3.png",
        description: [
            "Programmed a webpage to display all Computer Science classes and their prerequisites.",
            "Built the webpage using Mermaid, HTML, and JavaScript, for better interactivity.",
            "Published the webpage on the Computer Science department's website contributing to improved accessibility for all students.",
        ],
        tech: "Mermaid, HTML, JavaScript Web Development",
        github: "https://github.com/elordeiro/UMassCSPreReqChart",
    },
    {
        title: "Data Structures & Algorithms",
        projLink: "/projects/dsa",
        logo: "/proj4.png",
        description: [
            "Put together a collection of data structures and algorithms modules, including linked lists, stacks, queues, trees, and sorting algorithms into a library.",
            "Implemented each module in C, displaying adeptness in low-level programming.",
            "Wrote a collection of test cases to ensure the correctness and efficiency of the implementations.",
        ],
        tech: "C, DSA, CS fundamentals, VSCode",
        github: "https://github.com/elordeiro/c-dsa",
    },
    {
        title: "File Compression Program",
        projLink: "/projects/huffman",
        logo: "/proj5.png",
        description: [
            "Engineered a file compression / decompression program using the Huffman algorithm, and the abovementioned custom data structures.",
            "Achieved a 40% compression rate when working with text files.",
            "Tested the program with a target of 0 memory leaks, showcasing skill in debugging and testing.",
        ],
        tech: "C, Practical application of data structures",
        github: "https://github.com/elordeiro/huffman",
    },
    {
        title: "Tic Tac Toe with Minimax Algorithm",
        projLink: "/projects/tictactoe",
        logo: "/proj6.png",
        description: [
            "Developed a Tic Tac Toe game with an AI using the Minimax algorithm, demonstrating competence in game development and AI.",
            "Designed and implemented a user-friendly interface using PyGame and UI design principles.",
            "Implemented the game with a GUI and CLI version, showing proficiency in code modularity.",
        ],
        tech: "Python, PyGame, UI Design",
        github: "https://github.com/elordeiro/tictactoe",
    },
    {
        title: "Uno Game Simulator",
        projLink: "/projects/uno",
        logo: "/proj7.png",
        description: [
            "Developed an Uno game simulator using Java illustrating object-oriented programming skills, and algorithmic thinking.",
            "Designed and implemented a collection of classes and methods to simulate the game.",
            "Wrote a 'view' state to log the entire output of the game to a text file.",
        ],
        tech: "Java, Maven, JUnit, Object-oriented programming, Algorithmic thinking",
        github: "https://github.com/elordeiro/uno",
    },
    {
        title: "Portfolio Website",
        projLink: "/",
        logo: "/proj8.png",
        description: [
            "Designed and implemented a portfolio website using React, Next.js, and Tailwind, showing aptitude in web development.",
            "Deployed the website on Vercel and set up continuous deployment and continuous integration.",
            "Published the website on GitHub.",
        ],
        tech: "React, Next.js, Tailwind, TypeScript, Vercel, CD/CI",
        github: "https://github.com/elordeiro/portfolio",
    },
    // {
    //     title: "",
    //     projLink: "",
    //     logo: "/proj0.png",
    //     description: "",
    //     tech: "",
    //     github: "",
    // },
];
