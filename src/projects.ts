export interface Project {
    title: string;
    description: string;
    link: string;

    images: string[]; // Array of image URLs or a string indicating a gradient (e.g., "gradient-blue")
    githubLink?: string; // Optional GitHub link
}

export const projects: Project[] = [
    {
        title: "Portfolio - @Chrissy8283 / @tomato6966",
        description: "My Portfolio Website",
        link: "https://tomato6966.github.io/portfolio/",
        githubLink: "https://github.com/tomato6966/portfolio/",
        images: [

        ],
    },
    {
        title: "Portfolio-Performance Enhanced",
        description: "A portfolio visualisor, using yahoo finance api and the csv data of portfolio-performance. With a highly modern, intuitive and unique Design.",
        githubLink: "https://github.com/Tomato6966/portfolio-performance-enhanced/tree/main",
        images: [
            "https://i.imgur.com/4ftrQNH.png",
            "https://i.imgur.com/bIUIHVi.png",
            "https://i.imgur.com/DWKYRim.png"
        ],
        link: "https://portfolio-performance-enhanced.netlify.app/"
    },
    {
        title: "Financial Goals",
        description: "A website which helps users to plan & visualize financial goals. It's also a compound calculator at the same time.",
        link: "https://tomato6966.github.io/financial-goals-visualiser/",
        images: [
            "https://i.imgur.com/WhzYzeB.png",
            "https://i.imgur.com/eXpsZoj.png",
        ],
        githubLink: "https://github.com/tomato6966/financial-goals-visualiser/",
    },
    {
        title: "Investment Portfolio Simulator",
        description: " Portfolio Simulator for Investing, using real data provided by yahoo finance with sleek modern Design. ",
        link: "https://tomato6966.github.io/investment-portfolio-simulator/",
        githubLink: "https://github.com/Tomato6966/investment-portfolio-simulator",
        images: [
            "https://i.imgur.com/BfnKEZs.png",
            "https://i.imgur.com/TlMuw27.png",
            "https://i.imgur.com/mvkbpOx.png",
            "https://i.imgur.com/8dA05UO.png",
            "https://i.imgur.com/fDR9y8v.png",
        ],
    },
    {
        title: "Lavalink-CLient",
        description: "Easy, flexible and feature-rich lavalink@v4 Client. Both for Beginners and Proficients. (Docs website)",
        link: "https://tomato6966.github.io/lavalink-client/",
        githubLink: "https://github.com/Tomato6966/lavalink-client",
        images: [
            "https://i.imgur.com/MqZyiVR.png",
        ],
    },
    {
        title: "FinanzWissen",
        description: "A FinanzFluss Community Project, to teach finance knowledge",
        link: "https://tomato6966.github.io/finanzwissen/",
        githubLink: "https://github.com/Tomato6966/finanzwissen",
        images: [
            "https://i.imgur.com/xfafDpX.png",
            "https://i.imgur.com/ZGKsnqD.png",
            "https://i.imgur.com/avA476j.png",
            "https://i.imgur.com/zpH16jl.png",
            "https://i.imgur.com/61CtYFX.png",
            "https://i.imgur.com/ZeUSlZ0.png",
            "https://i.imgur.com/PCsW6pj.png",
            "https://i.imgur.com/S4PLGQC.png",
            "https://i.imgur.com/LmOPY2i.png",
            "https://i.imgur.com/izR7uRM.png",
            "https://i.imgur.com/oDlCbEX.png",
            "https://i.imgur.com/61CtYFX.png",
            "https://i.imgur.com/UzCdTVw.png",
        ],
    },
    {
        title: "Portfolio-Performance Einzahlungs Heatmap",
        description: "A better looking heatmap visualiser for portfolio-performance",
        link: "https://tomato6966.github.io/portfolio-einzahlungs-heatmap/",
        githubLink: "https://github.com/Tomato6966/portfolio-einzahlungs-heatmap",
        images: [
            "https://i.imgur.com/cQNEdzA.png",
            "https://i.imgur.com/g2TMnUx.png",
        ]
    },
];
