import React from 'react';
import Image from "next/image";
import {motion} from 'framer-motion';
import assets from "../../../assets";

const motionImage = {
    container: {
        whileInView: {
            x: [-100, 0],
            opacity: [0, 1],
            transition: {duration: 0.5, delayChildren: 0.5}
        },
    },
    circle: {
        whileInView: {
            scale: [0, 1],
            transition: {duration: 1, ease: 'easeInOut'}
        },
    },
}

const {images} = assets

const MainImage = () => {
    return (
        <motion.div
            whileInView={motionImage.container.whileInView}
            className={'relative basis-2/4 flex-1 flex items-center justify-center'}
        >

            <div className={'w-full h-96 lg:w-full lg:h-full z-10'}>
                <Image src={images.designer} alt={'Web Designer'} layout={'fill'} objectFit={'contain'}/>
            </div>

            <motion.div
                whileInView={motionImage.circle.whileInView}
                className={'absolute left-0 right-10 z-0 z-0 w-full h-full'}
            >
                <Image src={images.circle} alt={'Circle'} layout={'fill'} objectFit={'contain'}/>
            </motion.div>

        </motion.div>
    );
};

export default MainImage;
