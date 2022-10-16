import styles from "../cards.module.scss"

import React, { FC } from "react"

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
