import React from 'react';
import {motion} from "framer-motion";
import {CodeIcon, ExternalLinkIcon, TerminalIcon} from "@heroicons/react/solid";
import Image from 'next/image';
import {sanity} from "../../../lib";

interface IProps {
    work: SanityDoc.Works,
}

interface IImageAndOverly {
    thumbnail: string,
    title: string,
    codeLink: string,
    projectLink: string | undefined
}

const motionWork = {
    container: {
        whileHover: {
            scale: [1, 1.05],
            transition: {duration: 0.2, ease: 'easeInOut'}
        },
    },
    linkContainer: {
        initial: {opacity: 0},
        whileHover: {
            opacity: 1,
            transition: {duration: 0.2, ease: 'easeInOut'}
        },
    },
}


const {urlFor} = sanity

const TerminalCard = ({work}: IProps) => {
    const activeTab = work.tags[2].toString().replace(/ /g, "")
    const thumbnail = urlFor(work.imgUrl).url()
    const title = work.title
    const codeLink = work.codeLink
    const projectLink = work.projectLink

    return (
        <motion.div
            whileHover={motionWork.container.whileHover}
            className={'w-[370px] min-h-[400px] rounded-xl text-black text-xs shadow-sm bg-clip-padding backdrop-blur-lg bg-gradient-to-b from-gray-300/80 to-gray-300/40 transition-all duration-[0.4s] ease-in-out hover:shadow-2xl'}
        >
            <Banner activeTab={activeTab} projectTitle={work.title}/>
            <div className={'pt-0'}>
                <ImageAndOverly thumbnail={thumbnail} title={title} codeLink={codeLink} projectLink={projectLink}/>

                <code>
                    <div className={'px-2 pb-8 pt-4 w-full h-full space-y-4'}>
                        <div className={'space-y-2'}>
                            <p>{'$'} title</p>
                            <p>{work.title}</p>
                        </div>

                        <div className={'space-y-2'}>
                            <p>{'$'} description</p>
                            <p>{work.description}</p>
                        </div>
                    </div>
                </code>
            </div>

        </motion.div>
    );
};

const Banner = ({activeTab, projectTitle}: { activeTab: string, projectTitle: string }) => (
    <div className={'flex items-center shadow-md p-2'}>
        <TerminalIcon className={'w-5 h-5'}/>

        <code className={'flex-1 flex justify-center font-medium text-[0.68rem]'}>
            {`root@kali:~/${activeTab}/${projectTitle}`}
        </code>

        <div className={'flex items-center space-x-2'}>
            <div className={'rounded-full w-3 h-3 bg-yellow-400'}/>
            <div className={'rounded-full w-3 h-3 bg-green-500'}/>
            <div className={'rounded-full w-3 h-3 bg-red-500'}/>
        </div>
    </div>
)

const ImageAndOverly = ({thumbnail, title, codeLink, projectLink}: IImageAndOverly) => (
    <div className={'relative w-full h-48'}>
        <Image src={thumbnail} alt={title} layout={'fill'} objectFit={'cover'}/>

        <motion.div
            initial={motionWork.linkContainer.initial}
            whileHover={motionWork.linkContainer.whileHover}
            className={'absolute left-0 right-0 bg-black/50 w-full h-48 flex items-center justify-center space-x-10 text-gray-500 '}
        >
            <motion.a target="_blank" rel="noopener noreferrer" href={codeLink}
                      className={'rounded-full p-2 w-11 h-autos bg-black/90 transition-all duration-200 ease-in-out hover:text-white'}
            >
                <CodeIcon/>
            </motion.a>
            <motion.a target="_blank" rel="noopener noreferrer" href={projectLink}
                      className={'rounded-full p-2 w-11 h-autos bg-black/90 transition-all duration-200 ease-in-out hover:text-white'}
            >
                <ExternalLinkIcon/>
            </motion.a>
        </motion.div>
    </div>
)

export default TerminalCard;
