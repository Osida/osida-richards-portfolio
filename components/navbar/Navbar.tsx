import React, {useState} from 'react';
import Image from "next/image";
import {data, images} from "../../constants";
import {CodeIcon, CogIcon, FingerPrintIcon, HomeIcon, InboxInIcon, MenuIcon, XIcon} from "@heroicons/react/solid";
import {motion} from "framer-motion";

interface MobileMenuProps {
    menuToggle: boolean,
    setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const menuLinks: { link: string, Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element }[] = [
    {link: 'home', Icon: HomeIcon}, {link: 'about', Icon: FingerPrintIcon},
    {link: 'work', Icon: CodeIcon}, {link: 'skills', Icon: CogIcon},
    {link: 'contact', Icon: InboxInIcon}
]

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState<boolean>(false)

    return (
        <header className={'bg-white/25 backdrop-blur-sm w-full fixed left-0 right-0 z-50'}>
            <nav
                className={'flex py-4 px-8 flex items-center'}>
                <Logo/>
                <PageLinks/>
                <MobileMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle}/>
            </nav>
        </header>
    );
};

const Logo = () => (
    <div className={'w-16 h-5'}>
        <Image
            src={images.logo}
            alt={'Logo'}
            layout={'responsive'}
            objectFit={'cover'}
        />
    </div>
)

const PageLinks = () => (
    <ul className={'hidden flex-1 items-center justify-center space-x-12 lg:flex'}>
        {data.links.map((link) => (
            <li key={link}
                className={'relative flex flex-col items-center group '}
            >
                <div
                    className={'relative w-1 h-1 rounded-full bg-transparent -top-1 group-hover:bg-secondary transition-all duration-200 ease-in-out'}/>
                <a href={`#${link}`}
                   className={'uppercase nav-link group-hover:text-secondary transition-all duration-200 ease-in-out'}
                >{link}</a>
            </li>
        ))}
    </ul>
)

const MobileMenu = ({menuToggle, setMenuToggle}: MobileMenuProps) => (
    <div className={' bg-secondary p-2 rounded-full ml-auto mr-0 lg:hidden'}>
        <MenuIcon
            onClick={() => setMenuToggle(true)}
            className={'text-white h-5 w-5 cursor-pointer'}
        />

        {menuToggle && (
            // Menu div
            <motion.div
                whileInView={{
                    x: [300, 0],
                    transition: {duration: 0.85, ease: 'easeInOut'}
                }}
                className={'absolute right-0 top-0 z-[100] h-screen w-4/5 flex flex-col space-y-4 py-4 pr-8 pl-12 bg-menu shadow-lg'}
            >
                {/* Menu X icon */}
                <XIcon
                    onClick={() => setMenuToggle(false)}
                    className={'h-8 w-auto text-blue-900 self-end cursor-pointer'}
                />
                {/* Menu Links */}
                <ul className={'flex flex-col space-y-10'}>
                    {menuLinks.map(({link, Icon}) => (
                        <li key={link} className={'group rounded-full'}>
                            <motion.span
                                whileHover={{
                                    scale: [1, 1.1],
                                    transition: {duration: 0.4, ease: 'easeInOut'}
                                }}
                                className={'flex items-center space-x-2'}
                            >
                                <Icon
                                    className={'text-gray-500 w-4 h-4 group-hover:text-secondary transition-all duration-200 ease-in-out'}/>
                                <a href={`#${link}`}
                                   className={'uppercase nav-link text-base group-hover:text-secondary transition-all duration-200 ease-in-out'}
                                >{link}</a>
                            </motion.span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        )}
    </div>
)

export default Navbar;
