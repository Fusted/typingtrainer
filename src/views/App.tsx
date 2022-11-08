import "./app.scss"

import React, { useEffect } from "react"
import { useQueryParam, StringParam } from "use-query-params"
import { useAction } from "@reatom/npm-react"
import { setLanguageAction } from "atoms/config"
import TypingContainer from "components/TypingContainer/TypingContainer"
import { isLang, Lang } from "services/languages"
import { disposeAction } from "atoms/dispose"

const App = (): React.ReactElement => {
    const setLanguage = useAction(setLanguageAction)
    const dispose = useAction(disposeAction)
    const [language] = useQueryParam("language", StringParam)

    useEffect(() => {
        if (language && isLang(language)) {
            setLanguage(language as Lang)
            dispose()
        }
    }, [language, setLanguage, dispose])

    return (
        <div className="app">
            <TypingContainer />
        </div>
    )
}

export default App
