import { makeAutoObservable } from "mobx"


class Letters {

    currentLetterId: number = 0
    currrentLetter: string = ''

    constructor(){
        makeAutoObservable(this)
    }

    changeCurrentLetter(newLetter: string) {
        this.currrentLetter = newLetter
    }

    setCurrentLetterId(newId: number) {
        this.currentLetterId = newId
    }

    increment(){
        this.currentLetterId += 1
    }

    decrement(){
        this.currentLetterId -= 1
    }

}



export default new Letters()