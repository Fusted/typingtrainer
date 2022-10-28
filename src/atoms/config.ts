import { atom, action } from "@reatom/core"
import { Lang } from "services/languages"

const localLang = localStorage.getItem("typing-lan") as Lang

export const lettersLimitAtom = atom(400)
export const timeLimitAtom = atom(60)
export const languageAtom = localLang ? atom(localLang): atom("en" as Lang)

export const setLanguageAction = action((ctx, language: Lang) => {
    languageAtom(ctx, language)
})
