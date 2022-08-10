import React from 'react';
import Image from "next/image";
import assets from "../../../assets";
import NavbarLinks from "./NavbarLinks";
import Menu from "./Menu";

const {images} = assets

const Navbar = () => {
    return (
        <header className={'fixed left-0 right-0 z-50 bg-white/25 backdrop-blur-sm flex items-center py-4 px-8'}>

            <div className={'relative w-16 h-5'}>
                <Image src={images.logo} alt={'Logo'} layout={'fill'} objectFit={'cover'}/>
            </div>

            <nav className={'flex items-center flex-1 justify-end'}>
                <NavbarLinks/>
                <Menu/>
            </nav>

        </header>
    );
};

export default Navbar;
