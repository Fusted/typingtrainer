import { atom, action } from "@reatom/core"

export const lettersLimitAtom = atom(400)
export const timeLimitAtom = atom(60)
export const languageAtom = atom("en")

export const setLanguageAction = action((ctx, language) => {
    languageAtom(ctx, language)
})
