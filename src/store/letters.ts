import { makeAutoObservable } from "mobx"


class Letters {

	currentLetterId: number = 0
	currentLetter: string = ''
	mistakesCounter: number = 0
	text: string[] = []

	constructor(){
		makeAutoObservable(this)
	}

	setText(newText: string[]) {
		this.text = newText
	}

	setCurrentLetterId(newId: number) {
		this.currentLetterId = newId
	}

	setCurrentLetter(newLetter: string) {
		this.currentLetter = newLetter
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