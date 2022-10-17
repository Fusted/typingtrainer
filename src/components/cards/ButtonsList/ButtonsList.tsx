import styles from "../cards.module.scss"

import React, { FC, useEffect, useState } from "react"
import { getLanguages } from "services/service"
import ResetButton from "../ResetButton/ResetButton"
import LanguageButton from "../LanguageButton/LanguageButton"
import ModesButton from "../ModesButton/ModesButton"

interface Props {
    focusArea: VoidFunction
}

const ButtonsList: FC<Props> = ({ focusArea }) => {
    const [languages, setLanguages] = useState([""])

    useEffect(() => {
        const languages = getLanguages()
        languages.then((languages) => {
            setLanguages(languages)
        })
    }, [])

    return (
        <div className={styles.cardList}>
            <ResetButton focusArea={focusArea} />
            <LanguageButton languages={languages} />
            <ModesButton />
        </div>
    )
}

export default ButtonsList
