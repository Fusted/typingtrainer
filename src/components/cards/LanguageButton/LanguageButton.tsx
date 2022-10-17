import styles from "../cards.module.scss"

import React, { ChangeEvent, FC } from "react"
import { observer } from "mobx-react-lite"
import settings from "store/settings"

interface ILanguageButton {
    languages: string[]
}

const LanguageButton: FC<ILanguageButton> = ({ languages }) => {
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        settings.setLanguage(e.target.value)
        localStorage.setItem("typing-lan", e.target.value)
    }

    const languageOptions = languages.map((language) => {
        return (
            <option key={language} value={language}>
                {language.toUpperCase()}
            </option>
        )
    })

    return (
        <select
            className={styles.select}
            value={settings.language}
            onChange={onChange}
        >
            {languageOptions}
        </select>
    )
}

export default observer(LanguageButton)
