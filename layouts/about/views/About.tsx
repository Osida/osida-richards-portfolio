import React from 'react';
import Image from 'next/image';
import {sanity} from "../../../lib";
import {motion} from "framer-motion";
import {SectionLayout, Title} from "../../../components";
import Copyright from "../../../components/copywright/Copyright";

interface IAboutProps {
    data: SanityDoc.Abouts[]
}

const motionAbouts = {
    whileInView: {
        opacity: 1,
        transition: {duration: 0.5, type: 'tween'}
    },
    whileHover: {
        scale: 1.1,
        transition: {duration: 0.5, type: 'tween'}
    },
}

const {urlFor} = sanity

const About = ({data: abouts}: IAboutProps) => {
    return (
        <SectionLayout idName={'about'} classNames={'bg-white'}>
            <div className={'flex-1 flex flex-col items-center space-y-16 lg:space-y-20'}>

                <Title classNames={'pt-20'}>
                    <Title.Black>
                        I Know That <Title.Blue text='Good Design'/> Means <Title.Blue text='Good Business'/>
                    </Title.Black>
                </Title>

                <div
                    className={'flex-1 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-14 lg:grid-cols-3 xl:flex xl:space-x-8'}>

                    {abouts && (abouts.map((about, index) => (
                        <motion.div
                            key={about._id}
                            whileInView={motionAbouts.whileInView}
                            whileHover={motionAbouts.whileHover}
                            className={'flex flex-col items-start space-y-4 w-48 lg:w-60 lg:space-y-6'}
                        >
                            <div className={'relative w-52 h-44 lg:h-48 xl:w-full xl:h-52'}>
                                <Image
                                    src={urlFor(about.imgUrl).url()}
                                    alt={about.title}
                                    layout={'fill'}
                                    objectFit={'cover'}
                                />
                            </div>
                            <h2 className={'text-black font-semibold text-base lg:text-lg'}>
                                {about.title}
                            </h2>
                            <p className={'text-sm text-gray-500 lg:text-base'}>
                                {about.description}
                            </p>
                        </motion.div>
                    )))}

                </div>

                <Copyright/>
            </div>
        </SectionLayout>
    );
};

export default About;
