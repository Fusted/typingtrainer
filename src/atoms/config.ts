import { atom, action } from "@reatom/core"
import { Lang } from "services/languages"
import { getStorageLanguage, setStorageLanguage } from "services/storage"

const language = getStorageLanguage()
const lettersLimitAtom = atom(400)
const timeLimitAtom = atom(60)
const languageAtom = language ? atom(language) : atom("en" as Lang)

const setLanguageAction = action((ctx, language: Lang) => {
    languageAtom(ctx, language)
    setStorageLanguage(language)
})

export { setLanguageAction, languageAtom, lettersLimitAtom, timeLimitAtom }
