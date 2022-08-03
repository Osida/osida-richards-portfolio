import React from 'react'
import {motion} from 'framer-motion'
import {FaGithubAlt, FaLinkedinIn} from "react-icons/fa"
import {IconType} from "react-icons";

const icons: { Icon: IconType, link: string }[] = [
    {Icon: FaGithubAlt, link: 'https://github.com/Osida'},
    {Icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/osida-richards-780524243/'}
]

const SocialMedia = () => {
    return (
        <aside className={'hidden flex-col justify-end space-y-4 py-6 pl-4 sm:flex'}>
            {icons.map(({Icon, link}, index) => (
                <motion.a
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}
                    whileHover={{
                        scale: [1, 1.2],
                        transition: {duration: 0.2, ease: 'easeInOut'}
                    }}
                    drag
                    dragSnapToOrigin
                    className={'bg-white rounded-full shadow-md p-2 cursor-pointer group transition-all duration-300 ease-in-out hover:bg-secondary'}
                >
                    <Icon
                        className={'w-5 h-5 text-gray-500 transition-all duration-300 ease-in-out group-hover:text-white'}/>
                </motion.a>
            ))}
        </aside>
    );
};

export default SocialMedia;
