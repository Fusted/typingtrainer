import styles from "../cards.module.scss"

import React from "react"
import ResetButton from "../ResetButton/ResetButton"
import LanguageButton from "../LanguageButton/LanguageButton"

interface Props {
    focusArea: VoidFunction
}

const ButtonsList: React.FC<Props> = ({ focusArea }) => {
    return (
        <div className={styles.cardList}>
            <ResetButton focusArea={focusArea} />
            <LanguageButton />
        </div>
    )
}

export default ButtonsList
