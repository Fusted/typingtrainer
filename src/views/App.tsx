import "./app.scss"

import React, { useEffect } from "react"
import { useQueryParam, StringParam } from "use-query-params"
import { useAction } from "@reatom/npm-react"
import { setLanguageAction } from "atoms/config"
import TypingContainer from "components/TypingContainer/TypingContainer"
import { isLang, Lang } from "services/languages"

const App = (): React.ReactElement => {
    const setLanguage = useAction(setLanguageAction)
    const [language] = useQueryParam("language", StringParam)

    useEffect(() => {
        if (language && isLang(language)) {
            setLanguage(language as Lang)
        }
    }, [language, setLanguage])

    return (
        <div className="app">
            <TypingContainer />
        </div>
    )
}

export default App
