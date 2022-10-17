import { makeAutoObservable } from "mobx"
import settings from "./settings"
import { getRandomWords } from "../services/service"

class Letters {
    enteredText = ""
    text = ""
    currentLetter = ""
    currentLetterId = 0
    mistakesCounter = 0
    time = settings.timeLimit
    isFocused = false
    isTyping = false
    isEditable = true
    shouldReset = false

    constructor() {
        makeAutoObservable(this)
    }

    setEnteredText(newText: string) {
        this.enteredText = newText
    }

    setTyping(isTyping: boolean) {
        this.isTyping = isTyping
    }

    setFocus(isFocused: boolean) {
        this.isFocused = isFocused
    }

    setText(newText: string) {
        this.text = newText
    }

    setCurrentLetterId(newId: number) {
        this.currentLetterId = newId
    }

    setCurrentLetter(newLetter: string) {
        this.currentLetter = newLetter
    }

    incrementMistakesCounter() {
        this.mistakesCounter += 1
    }

    resetMistakesCounter() {
        this.mistakesCounter = 0
    }

    setEditable(isEditable: boolean) {
        this.isEditable = isEditable
    }

    setShouldReset(value: boolean) {
        this.shouldReset = value
    }

    resetText(): void {
        const text = getRandomWords(settings.language, settings.lettersLimit)
        text.then((text) => {
            this.setText(text)
            this.setEnteredText("")
        })
    }

    dispose(): void {
        this.setShouldReset(true)
        this.setEditable(true)
        this.setTyping(false)
        this.setCurrentLetter("")
        this.setCurrentLetterId(0)
        this.resetMistakesCounter()
        this.resetText()
        this.resetMistakesCounter()
    }
}

export default new Letters()
