import { action } from "@reatom/core"
import { setEnteredTextAction } from "./enteredTextAtom"
import {
    setTypingAction,
    setEditableAction,
    setFocusedAction,
    setShouldResetAction,
    resetMistakesCounterAction,
    setCurrentLetterIdAction,
} from "./state"
import { setVisibleTextAction } from "./visibleText"

export const disposeAction = action((ctx) => {
    resetMistakesCounterAction(ctx)
    setVisibleTextAction(ctx)
    setEnteredTextAction(ctx, "")
    setCurrentLetterIdAction(ctx, 0)
    setEditableAction(ctx, true)
    setShouldResetAction(ctx, true)
    setTypingAction(ctx, false)
    setFocusedAction(ctx, false)
})
