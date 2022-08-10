import React from 'react';
import Quotes from "./Quotes";
import MainImage from "./MainImage";
import Technologies from "./Technologies";
import {SectionLayout} from "../../../components";
import {motion} from "framer-motion";
import images from "../../../assets/images";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {duration: 1, ease: 'easeInOut'},
    },
};

const Header = () => {
    return (
        <SectionLayout idName={'home'} classNames={'bg-header'}>
            <div
                className={'flex-1 flex flex-col pt-24 space-y-10 lg:flex-row lg:space-y-0 lg:space-x-2'}
            >
                <Quotes/>
                <MainImage/>

                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className={'z-10 flex flex-wrap justify-center flex-1 basis-1/4 md:pt-14 lg:pt-0 lg:flex-col lg:ml-0 xl:justify-evenly'}
                >
                    <Technologies classNames={'h-24 w-24 m-4 xl:h-28 xl:w-28'} image={images.typescriptCube}
                                  alt={'Typescript'}/>
                    <Technologies classNames={'h-40 w-40 m-9 lg:m-7 xl:h-44 xl:w-44 xl:ml-10'}
                                  image={images.reactAtomic} alt={'React'}/>
                    <Technologies classNames={'h-16 w-16 m-4 xl:h-20 xl:w-20'} image={images.tailwind}
                                  alt={'Tailwind'}/>
                </motion.div>

            </div>
        </SectionLayout>
    );
};


export default Header;
