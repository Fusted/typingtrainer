import { makeAutoObservable } from "mobx"

class Settings {

    language = 'en'

    constructor() {
        makeAutoObservable(this)
    }

    setLanguage(newLanguage: string) {
        this.language = newLanguage
    }
}

export default new Settings()
