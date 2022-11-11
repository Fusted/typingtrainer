import React from "react"
import { languageAtom, setLanguageAction } from "atoms/config"
import { useAction, useAtom } from "@reatom/npm-react"
import { disposeAction } from "atoms/dispose"
import { type Lang, langs } from "services/languages"
import Select from "packages/Select"

import { useQueryParam, StringParam } from "use-query-params"

const LanguageButton: React.FC = () => {
    const [language] = useAtom(languageAtom)
    const setQueryLanguage = useQueryParam("language", StringParam)[1]
    const setLanguage = useAction(setLanguageAction)
    const dispose = useAction(disposeAction)

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = event.target.value as Lang
        setLanguage(lang)
        setQueryLanguage(lang)
        dispose()
    }

    return <Select options={langs} value={language} onChange={onChange} />
}

export default LanguageButton
