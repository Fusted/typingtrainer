import React, { FC } from "react"
import styles from "../cards.module.scss"

interface ICard {
    text: string
    value: string | number
}

const DataCard: FC<ICard> = ({ text, value }) => {

    return (
        <div className={styles.card}>
            {text}: {value}
        </div>
    )
}

export default DataCard
