import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {AppWrap} from "../index";
import {AnimationControls, motion, useAnimation} from 'framer-motion';
import {urlFor} from "../../lib/sanity/imageUrl";
import {CodeIcon, ExternalLinkIcon} from "@heroicons/react/solid";
import MotionWrap from "../wrapper/MotionWrap";


interface IProps {
    data: SanityDoc.Works[]
}

interface ITabs {
    handleWorkFilter: (filterOn: string) => void
}

const tabs: string[] = ['Web App', 'Mobile App', 'All']

const animateCardVariants = {
    static: {y: 0, opacity: 1},
    inMotion: {
        y: 100, opacity: 0,
        transition: {
            duration: 0.3, delayChildren: 0.3
        }
    },
}

const Work = ({data}: IProps) => {
    const [activeFilter, setActiveFilter] = useState<string>('All')
    const [filterWork, setFilterWork] = useState<IProps['data']>([])
    const controls = useAnimation()

    useEffect(() => {
        setFilterWork(data)
    }, [data]);


    const handleWorkFilter = async (filterOn: string) => {
        setActiveFilter(filterOn)
        await controls.start(animateCardVariants.inMotion)

        setTimeout(
            () => {
                controls.start(animateCardVariants.static)
                if (filterOn === 'All') setFilterWork(data)
                else setFilterWork(data.filter((work) => work.tags.includes(filterOn)))
            },
            500)
    }

    return (
        <section
            className={'w-full h-full flex flex-col items-center justify-center space-y-16 lg:space-y-20 lg:min-h-[90vh]'}>
            <Title/>
            <Tabs handleWorkFilter={handleWorkFilter}/>
            <Works filterWork={filterWork} controls={controls}/>
        </section>
    );
};

const Title = () => (
    <h1 className={'max-w-[850px] mx-auto text-4xl text-black text-center font-semibold leading-relaxed lg:text-5xl xl:text-6xl'}>My
        Creative <span className={'text-secondary'}>Portfolio</span> Section
    </h1>
)

const Tabs = ({handleWorkFilter}: ITabs) => (
    <div className={'flex flex-wrap justify-start items-center'}>
        {tabs.map((tab, index) => (
            <div key={index}
                 onClick={() => handleWorkFilter(tab)}
                 className={'cursor-pointer py-2 px-4 m-2 flex items-center justify-center bg-white rounded-2xl group transition-all duration-200 ease-in-out hover:bg-secondary'}>
                <p className={'text-sm text-black font-semibold transition-all duration-200 ease-in-out group-hover:text-white'}>{tab}</p>
            </div>
        ))}
    </div>
)

const Works = ({filterWork, controls}: { filterWork: SanityDoc.Works[], controls: AnimationControls }) => (
    <motion.div
        variants={animateCardVariants}
        initial={'static'}
        animate={controls}
        className={'grid grid-cols-1 gap-y-12  lg:grid-cols-2 lg:gap-14 xl:grid-cols-3 2xl:grid-cols-4'}>

        {filterWork && (filterWork.map((work, index) => (
            <motion.div
                key={work._id}
                whileHover={{
                    scale: 1.02,
                    transition: {duration: 0.1, ease: 'easeInOut'}
                }}
                className={'cursor-pointer mockup-code bg-gray-700 text-gray-300 flex flex-col w-[350px] space-y-2 transition-all duration-700 ease-in-out shadow-none hover:shadow-2xl hover:shadow-black'}
            >

                <div className={'relative w-full h-60'}>
                    <Image src={urlFor(work.imgUrl).url()} alt={'Coming soon'} layout={'fill'}
                           objectFit={'cover'}
                           className={' '}/>
                    <motion.div
                        initial={{opacity: 0}}
                        whileHover={{
                            opacity: 1,
                            transition: {duration: 0.3, ease: 'easeInOut'}
                        }}
                        className={'absolute left-0 right-0 bg-black/50 w-full h-60 flex items-center justify-center space-x-10'}>
                        <motion.a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={work?.codeLink}
                            whileHover={{
                                scale: 0.8,
                                transition: {duration: 0.3, ease: 'easeInOut'}
                            }}
                            className={'rounded-full p-2 w-11 h-autos bg-black/90'}>
                            <CodeIcon/>
                        </motion.a>
                        <motion.a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={work?.projectLink}
                            whileHover={{
                                scale: 0.8,
                                transition: {duration: 0.3, ease: 'easeInOut'}
                            }}
                            className={'rounded-full p-2 w-11 h-auto bg-black/70'}>
                            <ExternalLinkIcon/>
                        </motion.a>
                    </motion.div>
                </div>


                <code className={'flex ml-3 text-[0.63rem]'}>
                    <span className={'text-green-500'}>Osida@Desktop-Dev</span><span
                    className={'text-violet-500'}>MINGW64</span><span
                    className={'text-yellow-500'}>~/Portfolio/{work.tags[2].toString().replace(/ /g, "")}/{work.title}</span>
                </code>
                <div className={'w-full flex flex-col px-3 space-y-2 text-xs'}>
                    <span>{'$'} <code className={'uppercase'}>{work.title}</code></span>
                    <span>{'$'} <code>{work.description}</code></span>
                </div>
            </motion.div>
        )))}

    </motion.div>
)

export default AppWrap(
// @ts-ignore
    MotionWrap(Work, 'flex-1 w-full flex-col'),
    'work',
    'bg-primary'
);