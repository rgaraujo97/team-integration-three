import React from 'react';
import style from "./styles.module.css"
import cn from "classnames"

export const Typography = ({children}) => {
    
    const classNames = cn({
        [style.primary]: true,
    })

    return <span className={classNames}> {children} </span>
}