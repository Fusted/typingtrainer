import { atom, action } from "@reatom/core"

export const isTypingAtom = atom(false)
export const isEditableAtom = atom(true)
export const isfocusedAtom = atom(false)
export const isShouldResetAtom = atom(false)
export const mistakesCounterAtom = atom(0)
export const currentLetterIdAtom = atom(0)

export const setCurrentLetterIdAction = action((ctx, id) => {
    currentLetterIdAtom(ctx, id)
})

export const setTypingAction = action((ctx, bool) => {
    isTypingAtom(ctx, bool)
})

export const setEditableAction = action((ctx, bool) => {
    isEditableAtom(ctx, bool)
})

export const setFocusedAction = action((ctx, bool) => {
    isfocusedAtom(ctx, bool)
})

export const setShouldResetAction = action((ctx, bool) => {
    isShouldResetAtom(ctx, bool)
})

export const incrementMistakesCounterAction = action((ctx) => {
    const mistakes = ctx.get(mistakesCounterAtom)
    mistakesCounterAtom(ctx, mistakes + 1)
})

export const resetMistakesCounterAction = action((ctx) => {
    mistakesCounterAtom(ctx, 0)
})
