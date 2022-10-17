import "./app.scss"

import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import TypingContainer from "components/TypingContainer/TypingContainer"
import settings from "store/settings"

function App() {
    useEffect(() => {
        const language = localStorage.getItem("typing-lan")

        language ? settings.setLanguage(language) : "en"
    }, [])

    return (
        <div className="app">
            <TypingContainer />
        </div>
    )
}

export default observer(App)
