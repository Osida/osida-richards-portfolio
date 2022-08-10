import React from 'react';
import Image, {StaticImageData} from "next/image";
import {motion} from 'framer-motion';

interface IProps {
    image: StaticImageData,
    alt: string,
    classNames: string,
}

const motionScale = {
    whileHover: {
        scale: 1.2,
        transition: {duration: 0.2, ease: 'easeInOut'}
    },
};

const Technologies = ({classNames, alt, image}: IProps) => {
    return (
        <motion.div
            drag
            dragSnapToOrigin
            whileHover={motionScale.whileHover}
            className={`cursor-pointer flex justify-center items-center bg-white rounded-full drop-shadow-md ${classNames}`}
        >
            <div className={'relative h-4/6 w-4/6'}>
                <Image src={image} alt={alt} layout={'fill'} objectFit={'cover'}/>
            </div>
        </motion.div>
    );
};

export default Technologies;
