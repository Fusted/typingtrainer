import React, {createRef, useEffect} from "react"
import Service, {getRandomInt} from "./services/service"

import TypingArea from "./components/TypingArea/TypingArea"
import letters from "./store/letters"
import CardList from "./components/cards/CardList/CardList"
import "./app.scss"

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
    })

    const hiddenAreaRef = createRef<HTMLElement>()

    return (
        <div className="App">
            <div className="container">
                <TypingArea ref={hiddenAreaRef} />
                <CardList
                    hiddenAreaRef={hiddenAreaRef}
                    changeMainText={changeMainText}
                />
            </div>
        </div>
    )
}

export default App
