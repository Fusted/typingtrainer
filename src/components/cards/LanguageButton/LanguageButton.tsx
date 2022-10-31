import React from "react"
import { languageAtom, setLanguageAction } from "atoms/config"
import { useAction, useAtom } from "@reatom/npm-react"
import { disposeAction } from "atoms/dispose"
import { type Lang, langs } from "services/languages"
import Select from "packages/Select"

const LanguageButton: React.FC = () => {
    const [language] = useAtom(languageAtom)
    const setLanguage = useAction(setLanguageAction)
    const dispose = useAction(disposeAction)

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = event.target.value as Lang

        setLanguage(lang)
        dispose()
    }

    return <Select options={langs} value={language} onChange={onChange} />
}

export default LanguageButton
