import React from 'react';
import {motion} from 'framer-motion';
import data from "../../../data";

const motionBubble = {
    container: {
        whileInView: {
            x: [-100, 0], opacity: [0, 1],
            transition: {duration: 0.5, ease: 'easeIn'}
        },
    },
    lg: {
        whileHover: {
            scale: 1.2,
            transition: {duration: 0.2, ease: 'easeInOut'}
        },
    },
}

const {info: {header: {name, hello, title}}} = data

const Quotes = () => {
    return (
        <div className={'flex-1 basis-1/4'}>

            <motion.div
                whileInView={motionBubble.container.whileInView}
                className={'flex flex-col space-y-9 items-start lg:items-end xl:space-y-11'}
            >

                <motion.div
                    drag dragSnapToOrigin
                    whileHover={motionBubble.lg.whileHover}
                    className={'flex flex-col justify-center bg-white rounded-3xl drop-shadow-md py-5 px-8 cursor-pointer xl:py-7 xl:px-10'}
                >
                    <div className={'flex items-center space-x-4'}>
                        <span className={'text-4xl xl:text-5xl'}>👋</span>
                        <div className={'space-y-2'}>
                            <p className={'p-text'}>{hello}</p>
                            <h3 className={'text-4xl font-semibold text-black xl:text-5xl'}>{name}</h3>
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    drag dragSnapToOrigin
                    whileHover={motionBubble.lg.whileHover}
                    className={'flex flex-col justify-center bg-white rounded-3xl drop-shadow-md py-3 px-8 cursor-pointer p-text text-xs uppercase xl:px-10'}
                >
                    <p>{title}</p>
                </motion.div>

            </motion.div>

        </div>
    );
};

export default Quotes;
