import React from 'react';
import {data} from "../../constants";
import {motion} from 'framer-motion'

interface IProps {
    active: string,
}

const NavigationDots = ({active}: IProps) => {
    return (
        <aside className={'hidden flex-col space-y-6 justify-center p-4 sm:flex'}>
            {data.links.map((dotLink, index) => (
                <motion.a
                    key={index}
                    whileHover={{
                        scale: [1, 1.5],
                        backgroundColor: '#313bac',
                        transition: {duration: 0.2, ease: 'easeInOut'}
                    }}
                    href={`#${dotLink}`}
                    className={`rounded-full border-none outline-none  w-2.5 h-2.5 ${active === dotLink ? 'bg-secondary' : 'bg-gray-300'}`}
                />
            ))}
        </aside>
    );
};

export default NavigationDots;
