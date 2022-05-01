import React, {createRef, useEffect} from "react"
import Service, {getRandomInt} from "./services/service"

import TypingArea from "./components/TypingArea/TypingArea"
import letters from "./store/letters"
import ButtonsList from "./components/cards/ButtonsList/ButtonsList"
import "./app.scss"
import StatsList from "./components/cards/StatsList/StatsList";



function App() {
    const changeMainText = (): void => {
        const text = Service.getText()
        text.then((textsList) => {
            const indexOfText = getRandomInt(textsList.texts.length)
            const newText = textsList.texts[indexOfText]

            letters.setText(newText)
        })
    }

    useEffect(() => {
        changeMainText()
    }, [])

    const hiddenAreaRef = createRef<HTMLTextAreaElement>()

    return (
        <div className="App">
            <div className="container">
                <StatsList/>
                <TypingArea
                    changeMainText={changeMainText}
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

export default App
