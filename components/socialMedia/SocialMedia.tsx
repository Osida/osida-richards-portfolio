import React from 'react';
import data from "../../data";
import {motion} from 'framer-motion';

const motionSocials = {
    whileHover: {
        scale: [1, 1.2],
        transition: {
            duration: 0.2, ease: 'easeInOut'
        },
    }
}

const {info: {socials}} = data;

const SocialMedia = () => {
    return (
        <aside className={'hidden flex-col justify-end space-y-4 pl-4 sm:flex'}>

            {socials.map(({Icon, link}) => (
                <motion.a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    drag dragSnapToOrigin
                    whileHover={motionSocials.whileHover}
                    className={'group bg-white rounded-full shadow-md p-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-secondary'}
                >
                    <Icon
                        className={'w-5 h-5 text-gray-500 transition-all duration-300 ease-in-out group-hover:text-white'}/>
                </motion.a>
            ))}

        </aside>
    );
};

export default SocialMedia;
