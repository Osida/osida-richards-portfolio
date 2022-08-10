import React from 'react';
import Image from 'next/image';
import {sanity} from "../../../lib";
import {motion} from "framer-motion";
import {Copyright, SectionLayout, Title} from "../../../components";

interface ISkillsProps {
    data: SanityDoc.Skills[]
}


const motionSkill = {
    whileHover: {
        scale: [1, 1.15],
        transition: {duration: 0.1, ease: 'easeInOut'}
    }
}

const {urlFor} = sanity

const Skills = ({data: skills}: ISkillsProps) => {
    return (
        <SectionLayout idName={'skills'} classNames={'bg-white'}>
            <div className={'flex-1 flex flex-col items-center space-y-16 px-2 lg:space-y-20'}>
                <Title classNames={'pt-20'}>
                    <Title.Black>Skills</Title.Black>
                </Title>

                <div className={'grid grid-cols-3 gap-6 place-items-center lg:grid-cols-5 lg:gap-x-8 xl:gap-x-12'}>
                    {skills && skills.map((skill) => (
                        <motion.div
                            whileHover={motionSkill.whileHover}
                            key={skill._id}
                            className={'flex flex-col items-center space-y-2 col-auto transition-all duration-400 ease-in-out hover:drop-shadow-xl'}
                        >
                            <div
                                className={`rounded-full p-4 ${skill.bgColor ? skill.bgColor : 'bg-primary'} w-24 h-24 flex items-center justify-center`}>
                                <div className={'relative w-4/5 h-4/5'}>
                                    <Image src={urlFor(skill.icon).url()} alt={skill.name} layout={'fill'}
                                           objectFit={'contain'}/>
                                </div>
                            </div>
                            <p className={'text-sm text-black'}>{skill.name}</p>
                        </motion.div>
                    ))}
                </div>

                <Copyright/>
            </div>
        </SectionLayout>
    );
};

export default Skills;
