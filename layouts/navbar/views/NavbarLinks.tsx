import React from 'react';
import data from "../../../data";

const {info: {navbar: {links}}} = data

const NavbarLinks = () => {
    return (
        <ul className={'hidden flex-1 items-center justify-center space-x-12 lg:flex'}>

            {links.map((link) => (
                <li key={link} className={'flex flex-col items-center group'}>
                    <div
                        className={'relative w-[0.3rem] h-[0.3rem] rounded-full bg-transparent -top-1 transition-all duration-200 ease-in-out group-hover:bg-blue-900'}/>
                    <a href={`#${link}`}
                       className={'uppercase nav-link transition-all duration-200 ease-in-out group-hover:text-blue-900'}
                    >
                        {link}
                    </a>
                </li>
            ))}

        </ul>
    );
};

export default NavbarLinks;
