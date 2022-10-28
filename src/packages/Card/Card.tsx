import styles from "./card.module.scss"

import React from "react"

interface Props {
    text: string
    value: string | number
}

const Card: React.FC<Props> = ({ text, value }) => {
    return (
        <div className={styles.card}>
            {text}: {value}
        </div>
    )
}

export default Card
