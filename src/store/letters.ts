import { makeAutoObservable } from "mobx"

class Letters {
    enteredText = ''

    currentLetterId = 0

    currentLetter = ""

    mistakesCounter = 0

    focusStatus = false

    text = ""

    status = false

    time = 60

    editable = true

    constructor() {
        makeAutoObservable(this)
    }

    setEnteredText(newText: string) {
        this.enteredText = newText
    }

    setStatusTrue() {
        this.status = true
    }

    setFocusStatus(status: boolean) {
        this.focusStatus = status
    }

    setStatusFalse() {
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

    setEditableTrue() {
        this.editable = true
    }

    setEditableFalse() {
        this.editable = false
    }

    setTime(time: number) {
        this.time = time
    }
}


export default new Letters()
