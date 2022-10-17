import { makeAutoObservable } from "mobx"

class Settings {
    language = "en"
    lettersLimit = 400
    timeLimit = 60

    constructor() {
        makeAutoObservable(this)
    }

    setLanguage(newLanguage: string) {
        this.language = newLanguage
    }
}

export default new Settings()
