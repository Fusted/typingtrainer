import React, {createRef, useEffect, useState} from "react"
import Service, {getRandomInt} from "./services/service"

import TypingArea from "./components/TypingArea/TypingArea"
import letters from "./store/letters"
import CardList from "./components/cards/ButtonsList/ButtonsList"
import "./app.scss"
import StatsList from "./components/cards/StatsList/StatsList";

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

    const hiddenAreaRef = createRef<HTMLTextAreaElement>()

    return (
        <div className="App">
            <div className="container">
                <StatsList
                    enteredText={enteredText}
                />
                <TypingArea
                    changeMainText={changeMainText}
                    enteredText={enteredText}
                    setNewEnteredText={setNewEnteredText}
                    ref={hiddenAreaRef}
                />
                <CardList
                    setNewEnteredText={setNewEnteredText}
                    hiddenAreaRef={hiddenAreaRef}
                    changeMainText={changeMainText}
                />
            </div>
        </div>
    )
}

export default App
