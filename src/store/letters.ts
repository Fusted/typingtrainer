import { makeAutoObservable } from "mobx"


class Letters {

    currentLetterId: number = 0
    currrentLetter: string = ''
    mistakesCounter: number = 0
    text: string[] = []

    constructor(){
        makeAutoObservable(this)
    }

    setText(newText: string[]) {
        this.text = newText
    }

    changeCurrentLetter(newLetter: string) {
        this.currrentLetter = newLetter
    }

    setCurrentLetterId(newId: number) {
        this.currentLetterId = newId
    }

    setMitstakesCounter(newValue: number) {
        this.mistakesCounter = newValue
    }

    incrementMistakesCounter() {
        this.mistakesCounter += 1
    }

    incrementCurrentId(){
        this.currentLetterId += 1
    }

    decrementCurrentId(){
        this.currentLetterId -= 1
    }

}



export default new Letters()