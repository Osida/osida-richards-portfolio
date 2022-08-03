import React, {ReactElement} from 'react';
import {NavigationDots, SocialMedia} from "../index";

interface IHOCProps {
    data?: SanityDoc.Abouts[] | SanityDoc.Works[] | SanityDoc.Skills[] | any
}

interface IMotionHOC {
    props: any
}

const AppWrap = (Component: React.FC | ReactElement<any, any>, idName: string, classNames?: string) => function HOC(props: IHOCProps) {
    return (
        <section id={idName} className={`w-full min-h-[95vh] flex flex-row ${classNames} `}>
            <SocialMedia/>
            <ComponentWrap Component={Component} data={props} idName={idName}/>
            <NavigationDots active={idName}/>
        </section>
    );
};

const ComponentWrap = ({Component, data, idName}: { Component: React.FC | ReactElement<any, any>, data: any, idName: string }) => (
    <div className={'flex-1 w-full h-full flex-col pt-16 px-5 pb-8 justify-center items-center'}>
        {/*@ts-ignore*/}
        <Component {...data}/>

        <div
            className={`${idName === 'home' ? 'hidden' : 'flex'} w-full pt-8  flex-col justify-end items-end uppercase text-black text-xs space-y-1.5`}>
            <p className={''}>@2022 Osida</p>
            <p className={''}>All rights reserved</p>
        </div>
    </div>
)

export default AppWrap;
