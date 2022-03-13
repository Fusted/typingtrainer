import { makeAutoObservable } from "mobx"


class CurrentLetter {

    currentLetterId: number = 0

    constructor(){
        makeAutoObservable(this)
    }

    increment(){
        this.currentLetterId += 1
    }

    decrement(){
        this.currentLetterId -= 1
    }

}



export default new CurrentLetter()