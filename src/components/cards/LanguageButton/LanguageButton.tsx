import styles from "../cards.module.scss"

import React, { ChangeEvent, FC } from "react"
import { languageAtom, setLanguageAction } from "atoms/config"
import { useAction, useAtom } from "@reatom/npm-react"
import { disposeAction } from "atoms/dispose"

interface ILanguageButton {
    languages: string[]
}

const LanguageButton: FC<ILanguageButton> = ({ languages }) => {
    const [language] = useAtom(languageAtom)
    const setLanguage = useAction(setLanguageAction)
    const dispose = useAction(disposeAction)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value)
        dispose()
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
        <select className={styles.select} value={language} onChange={onChange}>
            {languageOptions}
        </select>
    )
}

export default LanguageButton
