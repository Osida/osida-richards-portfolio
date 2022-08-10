import React from 'react';
import {MenuIcon, XIcon} from "@heroicons/react/solid";
import ToggleMenu from "../hooks/ToggleMenu";
import {motion} from "framer-motion";
import data from "../../../data";

const motionMenu = {
    div: {
        whileInView: {
            x: [300, 0],
            transition: {duration: 0.85, ease: 'easeInOut'}
        }
    },
    span: {
        whileHover: {
            scale: [1, 1.1],
            transition: {duration: 0.3, ease: 'easeInOut'}
        }
    },
}

const {info: {navbar: {menu_links}}} = data

const Menu = () => {
    const {menuToggle, handleMenuToggle} = ToggleMenu();

    return (
        <div className={'bg-blue-900 p-2 rounded-full lg:hidden'}>
            <MenuIcon onClick={handleMenuToggle} className={'cursor-pointer h-5 w-5 text-white'}/>

            {menuToggle && (
                <motion.div
                    whileInView={motionMenu.div.whileInView}
                    className={'absolute right-0 top-0 z-[100] min-h-screen w-4/5 flex flex-col space-y-4 py-4 pr-8 pl-12 bg-menu shadow-lg'}
                >
                    <XIcon onClick={handleMenuToggle} className={'cursor-pointer h-8 w-auto text-blue-900 self-end'}/>

                    <ul className={'flex flex-col space-y-10'}>
                        {menu_links.map(({link, Icon}) => (
                            <li key={link} className={'group'}>
                                <motion.span
                                    whileHover={motionMenu.span.whileHover}
                                    className={'flex items-center space-x-2 nav-link group-hover:text-blue-900'}
                                >
                                    <Icon
                                        className={'text-gray-500 w-4 h-4 group-hover:text-blue-900 transition-all duration-200 ease-in'}/>
                                    <a href={`#${link}`}
                                       className={'uppercase text-base transition-all duration-200 ease-in'}
                                    >
                                        {link}
                                    </a>
                                </motion.span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </div>
    );
};

export default Menu;
