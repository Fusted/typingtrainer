import React, {useEffect} from "react"
import './app.scss'
import TypingContainer from "./components/TypingContainer/TypingContainer";
import {observer} from "mobx-react-lite";
import settings from "./store/settings";

function App() {

    useEffect(() => {
        const language = localStorage.getItem("typing-lan")
        const mode = localStorage.getItem("typing-mode")

        language ? settings.setLanguage(language) : "en"
        mode ? settings.setMode(mode) : "words"
    }, [])

    return (
        <div className="app">
            <TypingContainer />
        </div>
    )
}

export default observer(App)
