import { action, atom } from "@reatom/core"
import { getRandomWords } from "services/service"
import { lettersLimitAtom, languageAtom } from "./config"

export const visibleTextAtom = atom("")

export const setVisibleTextAction = action((ctx) => {    
    const text = getRandomWords(ctx.get(languageAtom), ctx.get(lettersLimitAtom))
    visibleTextAtom(ctx, text)
    
})
