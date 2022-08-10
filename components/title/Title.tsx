import React from 'react';

interface IProps {
    children?: React.ReactNode | React.ReactNode[],
    classNames?: string,
    restProps?: any,
    text?: string,
}

const Title = function Title({children, classNames, ...restProps}: IProps) {
    return (
        <h1 {...restProps}
            className={`max-w-[850px] mx-auto text-4xl text-center font-semibold leading-snug lg:leading-normal lg:text-5xl xl:text-6xl ${classNames}`}
        >
            {children}
        </h1>
    );
};

Title.Black = function TitleBlack({children, classNames, ...restProps}: IProps) {
    return (
        <span {...restProps} className={`text-black ${classNames}`}>
            {children}
        </span>
    );
}

Title.Blue = function TitleBlue({children, classNames, text = '', ...restProps}: IProps) {
    return (
        <span {...restProps} className={`text-blue-900 ${classNames}`}>
            {text.length > 0 ? text : children}
        </span>
    );
}

export default Title;
