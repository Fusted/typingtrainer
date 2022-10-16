import { makeAutoObservable } from "mobx"

class Settings {
    language = "en"
    mode = "words"
    lettersLimit = 400
    timeLimit = 60

    constructor() {
        makeAutoObservable(this)
    }

    setMode(newMode: string) {
        this.mode = newMode
    }

    setLanguage(newLanguage: string) {
        this.language = newLanguage
    }
}

export default new Settings()
