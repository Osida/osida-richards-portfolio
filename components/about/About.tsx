import React from 'react';
import Image from 'next/image';
import {AppWrap} from "../index";
import {motion} from "framer-motion";
import {urlFor} from "../../lib/sanity/imageUrl";
import MotionWrap from '../wrapper/MotionWrap';

interface IProps {
    data: SanityDoc.Abouts[]
}

const About = ({data}: IProps) => {
    return (
        <section
            className={'w-full h-full flex flex-col items-center justify-center space-y-16 lg:space-y-20 lg:min-h-[85vh]'}>
            <Title/>
            <Abouts abouts={data}/>
        </section>
    );
};

const Title = () => (
    <h1 className={'max-w-[850px] mx-auto text-4xl text-black text-center font-semibold leading-relaxed lg:text-5xl xl:text-6xl'}>I
        Know That <span
            className={'text-secondary'}>Good Design</span> Means <span
            className={'text-secondary'}>Good Business</span>
    </h1>
)

const Abouts = ({abouts}: { abouts: SanityDoc.Abouts[] }) => (
    <div
        className={'grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-14 lg:grid-cols-3 xl:flex xl:space-x-8'}>

        {abouts && (abouts.map((about, index) => (
            <motion.div
                key={`${about._id}-${index}`}
                whileInView={{opacity: 1}}
                whileHover={{scale: 1.1}}
                transition={{duration: 0.5, type: 'tween'}}
                className={'flex flex-col items-start space-y-4 w-48 lg:w-60 lg:space-y-6 '}
            >
                <div className={'relative w-52 h-44 lg:h-48 xl:w-full xl:h-52'}>
                    <Image src={urlFor(about.imgUrl).url()} alt={'About'} layout={'fill'}
                           objectFit={'cover'}
                           className={'rounded-xl'}/>
                </div>
                <h2 className={'text-black font-semibold text-base lg:text-lg'}>{about.title}</h2>
                <p className={'text-sm text-gray-500 lg:text-base'}>{about.description}</p>
            </motion.div>
        )))}

    </div>
)

export default AppWrap(
// @ts-ignore
    MotionWrap(About, 'flex-1 w-full flex-col'),
    'about',
    'bg-white'
);
