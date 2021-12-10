import React from "react"
import styles from "./Alert.module.css"
import cn from "classnames"

export const Alert = ({ title, label, variant }) => {

    const classnames = cn({
        [styles.alertContainer]: true,
        [styles[`alertContainer--${variant}`]]: true,
        [styles.default]: !variant,
        [styles.primary]: variant === "primary",
    })

    return (
        <div className={classnames}>
            <h3> { title } </h3>
            <h6> { label } </h6>
        </div>
    )
}