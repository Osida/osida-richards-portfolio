import React from 'react';
import Image from 'next/image';
import {AppWrap} from "../index";
import {urlFor} from "../../lib/sanity/imageUrl";
import MotionWrap from "../wrapper/MotionWrap";

interface IProps {
    data: SanityDoc.Skills[]
}

const Skills = ({data}: IProps) => {
    return (
        <section
            className={'w-full h-full flex flex-col items-center justify-center space-y-16 lg:space-y-20 lg:min-h-[90vh]'}>
            <Title/>
            <MySkills skills={data}/>
        </section>
    );
};

const Title = () => (
    <h1 className={'max-w-[850px] mx-auto text-4xl text-black text-center font-semibold leading-relaxed lg:text-5xl xl:text-6xl'}>
        Skills
    </h1>
)

const MySkills = ({skills}: { skills: IProps['data'] }) => (
    <div className={'grid grid-cols-3 gap-6 place-items-center lg:grid-cols-5 lg:gap-x-8 xl:gap-x-12'}>
        {skills && skills.map((skill, index) => (
            <div
                key={skill._id}
                className={'flex flex-col items-center space-y-2 col-auto'}
            >
                <div
                    className={`rounded-full p-4 ${skill.bgColor ? skill.bgColor : 'bg-skill'} w-24 h-24 flex items-center justify-center`}>
                    <div className={'relative w-4/5 h-4/5'}>
                        <Image src={urlFor(skill.icon).url()} alt={skill.name} layout={'fill'} objectFit={'contain'}/>
                    </div>
                </div>
                <p className={'text-sm text-black'}>{skill.name}</p>
            </div>
        ))}
    </div>
)

export default AppWrap(
// @ts-ignore
    MotionWrap(Skills, 'flex-1 w-full flex-col'),
    'skills',
    'bg-white'
);