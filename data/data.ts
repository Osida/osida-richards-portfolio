import {CodeIcon, CogIcon, FingerPrintIcon, HomeIcon, InboxInIcon} from "@heroicons/react/solid";
import images from "../assets/images";
import {FaGithubAlt, FaLinkedinIn} from "react-icons/fa";

const data = {
    navbar: {
        links: ["home", "about", "work", "skills", "contact"],
        menu_links: [
            {link: "home", Icon: HomeIcon},
            {link: "about", Icon: FingerPrintIcon},
            {link: "work", Icon: CodeIcon},
            {link: "skills", Icon: CogIcon},
            {link: "contact", Icon: InboxInIcon},
        ]
    },
    header: {
        hello: "Hello, I am",
        name: "Osida",
        title: "Software Developer",
        tech: [
            {
                image: images.typescriptCube,
                alt: "Typescript",
                classNames: "h-24 w-24 m-4 xl:h-28 xl:w-28",
            },
            {
                image: images.reactAtomic,
                alt: "React",
                classNames: "h-40 w-40 m-9 lg:m-7 xl:h-44 xl:w-44 xl:ml-10",
            },
            {
                image: images.reactAtomic,
                alt: "Tailwind",
                classNames: "h-16 w-16 m-4 xl:h-20 xl:w-20",
            },
        ]
    },
    work: {
        tabs: ["Web App", "Mobile App", "All"]
    },
    copyright: {
        txt1: "@2022 Osida",
        txt2: "All rights reserved",
    },
    socials: [
        {link: "https://github.com/Osida", Icon: FaGithubAlt},
        {link: "https://www.linkedin.com/in/osida-richards-780524243/", Icon: FaLinkedinIn},
    ],
}

export default data;