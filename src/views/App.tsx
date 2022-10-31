import "./app.scss"

import React, { useEffect } from "react"
import { useAction } from "@reatom/npm-react"
import { Lang } from "services/languages"
import { setLanguageAction } from "atoms/config"
import TypingContainer from "components/TypingContainer/TypingContainer"

interface Props {
    lang?: Lang
}

const App: React.FC<Props> = ({ lang }): React.ReactElement => {
    const setLanguage = useAction(setLanguageAction)

    useEffect(() => {
        if (lang) {
            setLanguage(lang)
        }
    }, [lang, setLanguage])

    return (
        <div className="app">
            <TypingContainer />
        </div>
    )
}

export default App
