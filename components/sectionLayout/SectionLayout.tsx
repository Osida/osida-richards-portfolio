import React from 'react';
import {NavigationDots, SocialMedia} from "../index";

interface IProps {
    children: React.ReactNode | React.ReactNode[],
    idName: string,
    classNames?: string,
}

const SectionLayout = ({children, idName, classNames}: IProps) => {
    return (
        <section id={idName} className={`w-full min-h-screen flex px-4 py-6 sm:px-0 ${classNames}`}>
            <SocialMedia/>
            {children}
            <NavigationDots active={idName}/>
        </section>
    );
};

export default SectionLayout;
