import React, { useEffect } from "react"
import Service from "./services/service"
import letters from "./store/letters"
import settings from "./store/settings";
import {observer} from "mobx-react-lite";
import './app.scss'
import TypingContainer from "./components/TypingContainer/TypingContainer";

function App() {
    const changeMainText = (): void => {
        const text = Service.getText(settings.language)
        text.then(text => {
            letters.setText(text)
        })
    }

    useEffect(() => {
        changeMainText()
    }, [settings.language])



    return (
        <div className="app">
            <TypingContainer changeMainText={changeMainText}/>
        </div>
    )
}

export default observer(App)
