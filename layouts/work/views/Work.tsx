import React from 'react';
import FilterWorks from "../hooks/FilterWorks";
import {SectionLayout, Title} from "../../../components";
import Copyright from "../../../components/copywright/Copyright";
import data from "../../../data";
import TerminalCard from "./TerminalCard";
import {motion} from "framer-motion";


export interface IWorkProps {
    data: SanityDoc.Works[]
}

const {info: {work: {tabs}}} = data

const Work = ({data: works}: IWorkProps) => {
    const {filterWork, handleWorkFilter, animateCardVariants, controls} = FilterWorks(works)

    return (
        <SectionLayout idName={'work'} classNames={'bg-primary'}>
            <div className={'flex-1 flex flex-col items-center space-y-16 px-2 lg:space-y-20'}>

                <Title classNames={'pt-20'}>
                    <Title.Black>My Creative <Title.Blue text='Portfolio'/> Section</Title.Black>
                </Title>

                <div className={'flex flex-wrap justify-start items-center'}>
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            onClick={() => handleWorkFilter(tab)}
                            className={'group cursor-pointer py-2 px-4 m-2 flex items-center justify-center bg-white rounded-2xl text-sm text-black font-semibold drop-shadow-sm transition-all duration-200 ease-in-out hover:bg-secondary hover:drop-shadow-md'}
                        >
                            <p className={'transition-all duration-200 ease-in-out group-hover:text-white'}>
                                {tab}
                            </p>
                        </div>
                    ))}
                </div>

                <motion.div
                    variants={animateCardVariants}
                    initial={animateCardVariants.static}
                    animate={controls}
                    className={'grid grid-flow-col-dens grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3'}
                >
                    {filterWork && filterWork.map((work) =>
                        <TerminalCard key={work._id} work={work}/>
                    )}
                </motion.div>

                <Copyright/>
            </div>
        </SectionLayout>
    );
};

export default Work;
