import {motion} from 'framer-motion';
import React from 'react';
import Image from "next/image";
import {images} from "../../constants";
import {AppWrap} from "../index";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {duration: 1, ease: 'easeInOut'},
    },
};

const Header = () => {
    return (
        <section
            className={'w-full h-full flex flex-col pt-10 space-y-10 lg:flex-row lg:min-h-[90vh] lg:space-y-0 lg:space-x-2'}>
            <QuoteBubbles/>
            <CenterImage/>
            <TechBubbles/>
        </section>
    );
};

const QuoteBubbles = () => (
    <div className={'flex-1 basis-1/4'}>
        {/*Bubble Container*/}
        <motion.div
            whileInView={{
                x: [-100, 0], opacity: [0, 1],
                transition: {duration: 0.5, ease: 'easeIn'}
            }}
            className={'flex flex-col space-y-9 items-start lg:items-end xl:space-y-11'}
        >
            {/*Large Bubble*/}
            <motion.div
                drag
                dragSnapToOrigin
                whileHover={{scale: 1.2, transition: {duration: 0.2, ease: 'easeInOut'}}}
                className={'flex flex-col justify-center bg-white rounded-3xl drop-shadow-md py-5 px-8 cursor-pointer xl:py-7 xl:px-10'}>
                <div className={'flex items-center space-x-4'}>
                    <span className={'text-4xl xl:text-5xl'}>👋</span>
                    <div className={'space-y-2'}>
                        <p className={'p-text'}>Hello, I am</p>
                        <h3 className={'text-4xl font-semibold text-black xl:text-5xl'}>Osida</h3>
                    </div>
                </div>
            </motion.div>
            {/*Small Bubble*/}
            <motion.div
                drag
                dragSnapToOrigin
                whileHover={{scale: 1.2, transition: {duration: 0.2, ease: 'easeInOut'}}}
                className={'flex flex-col justify-center bg-white rounded-3xl drop-shadow-md py-3 px-8 cursor-pointer xl:px-10'}>
                <p className={'p-text text-xs uppercase'}>Software Developer</p>
            </motion.div>
        </motion.div>
    </div>
)

const CenterImage = () => (
    <motion.div
        whileInView={{
            x: [-100, 0], opacity: [0, 1],
            transition: {duration: 0.5, delayChildren: 0.5}
        }}
        className={'relative flex items-center justify-center flex-1 basis-2/4 '}
    >
        {/*Web designer*/}
        <div className={'w-full h-96 lg:w-full lg:h-full z-10'}>
            <Image
                src={images.webDesigner}
                alt={'Web Designer'} layout={'fill'}
                objectFit={'contain'}
                className={''}
            />
        </div>
        {/*Circle image*/}
        <motion.div
            whileInView={{
                scale: [0, 1],
                transition: {duration: 1, ease: 'easeInOut'}
            }}
            className={'absolute left-0 right-10 z-0 z-0 w-full h-full'}
            // className={'z-0 w-full h-96 absolute top-0 right-10 sm:left-10 sm:w-[82%] md:-top-10 lg:w-[90%] lg:right-0 lg:left-7 lg:-top-0 xl:max-w-full xl:left-9'}
        >
            <Image
                src={images.circle}
                alt={'Circle'} layout={'fill'}
                objectFit={'contain'}
                className={''}
            />
        </motion.div>
    </motion.div>
)

const TechBubbles = () => (
    <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={'z-10 flex flex-wrap justify-center flex-1 basis-1/4 md:pt-14 lg:pt-0 lg:flex-col lg:ml-0 xl:justify-evenly'}
    >
        {/* TS */}
        <motion.div
            drag dragSnapToOrigin
            whileHover={{scale: 1.2, transition: {duration: 0.2, ease: 'easeInOut'}}}
            className={'cursor-pointer flex justify-center items-center bg-white rounded-full h-24 w-24 m-4 drop-shadow-md xl:h-28 xl:w-28'}>
            <div className={'relative h-4/6 w-4/6'}>
                <Image src={images.tsCube} alt={'Node.js'} layout={'fill'}
                       objectFit={'cover'}/>
            </div>
        </motion.div>
        {/* React */}
        <motion.div
            drag dragSnapToOrigin
            whileHover={{scale: 1.2, transition: {duration: 0.2, ease: 'easeInOut'}}}
            className={'cursor-pointer flex justify-center items-center bg-white rounded-full h-40 w-40 m-9 lg:m-7 drop-shadow-md xl:h-44 xl:w-44 xl:ml-10'}>
            <div className={'relative h-4/6 w-4/6'}>
                <Image src={images.reactAtomic} alt={'React'} layout={'fill'}
                       objectFit={'cover'}/>
            </div>
        </motion.div>
        {/* Tailwind */}
        <motion.div
            drag dragSnapToOrigin
            whileHover={{scale: 1.2, transition: {duration: 0.2, ease: 'easeInOut'}}}
            className={'cursor-pointer flex justify-center items-center bg-white rounded-full h-16 w-16 m-4 drop-shadow-md xl:h-20 xl:w-20'}>
            <div className={'relative h-4/6 w-4/6'}>
                <Image src={images.tailwindMasterclass} alt={'Tailwind'} layout={'fill'}
                       objectFit={'cover'}/>
            </div>
        </motion.div>
    </motion.div>
)

export default AppWrap(Header, 'home', 'bg-header');