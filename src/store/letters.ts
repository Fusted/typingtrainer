import { makeAutoObservable } from "mobx"

class Letters {
    currentLetterId = 0

    currentLetter = ""

    enteredText = ""

    mistakesCounter = 0

    text = ""

    status = false

    time = 60

    editable = true

    constructor() {
        makeAutoObservable(this)
    }

    toggleStatus() {
        this.status = !this.status
    }

    turnOffStatus() {
        this.status = false
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

    setEnteredText(newText: string) {
        this.enteredText = newText
    }

    setEditableTrue() {
        this.editable = true
    }

    setEditableFalse() {
        this.editable = false
    }
}


export default new Letters()
