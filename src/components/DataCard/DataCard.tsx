import React, { FC } from "react"
import styles from "../CardList/cardList.module.scss"

interface ICard {
    text: string
    value: string
}

const DataCard: FC<ICard> = ({ text, value }) => {
    return (
        <div className={styles.card}>
            {text}: {value}
        </div>
    )
}

export default DataCard
