import React, { FC, useEffect, useState } from "react"
import ResetButton from "../ResetButton/ResetButton"
import LanguageButton from "../LanguageButton/LanguageButton"
import ModesButton from "../ModesButton/ModesButton";
import styles from "../cards.module.scss"
import { getLanguages } from "../../../services/service"

interface ICardList {
    hiddenAreaRef: React.RefObject<HTMLTextAreaElement>
    changeMainText: () => void
}

const ButtonsList: FC<ICardList> = ({ hiddenAreaRef, changeMainText }) => {
    const [languages, setLanguages] = useState([""])

    useEffect(() => {
        const languages = getLanguages()
        languages.then((languages) => {
            setLanguages(languages)
        })
    }, [])

    return (
        <div className={styles.cardList}>
            <ResetButton
                hiddenAreaRef={hiddenAreaRef}
                changeMainText={changeMainText}
            />
            <LanguageButton languages={languages} />
            <ModesButton></ModesButton>
        </div>
    )
}

export default ButtonsList
