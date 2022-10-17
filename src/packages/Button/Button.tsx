import React from "react"
import styles from "./button.module.scss"

interface Props {
    onClick?: VoidFunction
    text?: string
}

const Button: React.FC<Props> = (props) => {
    return (
        <button onClick={props.onClick} className={styles.button}>
            {props.text}
        </button>
    )
}

export default Button
