import React from 'react';
import {motion} from 'framer-motion';

interface IMotionHOC {
    props: any
}

const MotionWrap = (Component: React.FC, classNames?: string) => function MotionHOC(props: IMotionHOC) {
    return (
        <motion.div
            whileInView={{y: [100, 50, 0], opacity: [0, 0, 1]}}
            transition={{duration: 0.5}}
            className={`flex justify-center items-center ${classNames}`}
        >
            {/*@ts-ignore*/}
            <Component {...props}/>
        </motion.div>
    );
};

export default MotionWrap;
