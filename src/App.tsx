import React, {createRef, useEffect, useState} from "react"
import Service, {getRandomInt} from "./services/service"

import TypingArea from "./components/TypingArea/TypingArea"
import letters from "./store/letters"
import CardList from "./components/cards/CardList/CardList"
import "./app.scss"

type enteredText = string

function App() {
    const [enteredText, setEnteredText] = useState<enteredText>('')
    const changeMainText = (): void => {
        const text = Service.getText()
        text.then((textsList) => {
            const indexOfText = getRandomInt(textsList.texts.length)
            const newText = textsList.texts[indexOfText]

            letters.setText(newText)
        })
    }

    const setNewEnteredText = (newEnteredText: string):void => {
        setEnteredText(newEnteredText)
    }

    useEffect(() => {
        changeMainText()
    }, [])

    const hiddenAreaRef = createRef<HTMLElement>()
    const selection = window.getSelection()
    return (
        <div className="App">
            <div className="container">
                <TypingArea
                    selection={selection}
                    changeMainText={changeMainText}
                    enteredText={enteredText}
                    setNewEnteredText={setNewEnteredText}
                    ref={hiddenAreaRef}
                />
                <CardList
                    selection={selection}
                    enteredText={enteredText}
                    setNewEnteredText={setNewEnteredText}
                    hiddenAreaRef={hiddenAreaRef}
                    changeMainText={changeMainText}
                />
            </div>
        </div>
    )
}

export default App
