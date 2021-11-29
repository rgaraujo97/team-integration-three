import React from 'react';
import style from "./styles.module.css"
import cn from "classnames"

export const Button = (props) => {
    const {children} = props
    
    const classNames = cn({
        [style.button]: true,
        [style.primary]: props.primary,
        [style.secondary]: props.secondary,
        [style.large]: props.large,
    })

    return <button className={classNames}> {children} </button>
}