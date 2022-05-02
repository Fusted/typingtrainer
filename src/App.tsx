import React, {createRef, useEffect} from "react"
import Service from "./services/service"
import TypingArea from "./components/TypingArea/TypingArea"
import letters from "./store/letters"
import ButtonsList from "./components/cards/ButtonsList/ButtonsList"

import StatsList from "./components/cards/StatsList/StatsList"
import "./app.scss"
import settings from "./store/settings";
import {observer} from "mobx-react-lite";

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

    const hiddenAreaRef = createRef<HTMLTextAreaElement>()

    return (
        <div className="App">
            <div className="container">
                <StatsList />
                <TypingArea
                    ref={hiddenAreaRef}
                />
                <ButtonsList
                    hiddenAreaRef={hiddenAreaRef}
                    changeMainText={changeMainText}
                />
            </div>
        </div>
    )
}

export default observer(App)
