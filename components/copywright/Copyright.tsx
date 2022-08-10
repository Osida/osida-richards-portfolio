import React from 'react';
import data from "../../data/";

interface ICopyrightProps {
    isVisible?: boolean,
    classNames?: string,
}

const {info: {copyright: {txt1, txt2}}} = data

const Copyright = ({isVisible = true, classNames}: ICopyrightProps) => {
    return (
        <aside
            className={`${isVisible ? 'flex' : 'hidden'} w-full flex-col items-end space-y-2 uppercase text-black text-xs ${classNames}`}>
            <p>{txt1}</p>
            <p>{txt2}</p>
        </aside>
    );
};

export default Copyright;
