import { action, atom } from "@reatom/core"


export const enteredTextAtom = atom("")

export const setEnteredTextAction = action(
    (ctx, text) => {
        enteredTextAtom(ctx, text)
    }
)

export const resetEneteredTextAction = action((ctx) => enteredTextAtom(ctx, ""))
