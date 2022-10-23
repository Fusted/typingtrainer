import styles from "../TypingArea/typingArea.module.scss"

import React, {
    ChangeEvent,
    ForwardedRef,
    forwardRef,
    SyntheticEvent,
    useState,
} from "react"
import { observer } from "mobx-react-lite"
import cn from "classnames"
import { useAction, useAtom } from "@reatom/npm-react"
import { setEnteredTextAction, enteredTextAtom } from "atoms/enteredTextAtom"
import { visibleTextAtom } from "atoms/visibleText"
import {
    incrementMistakesCounterAction,
    isEditableAtom,
    isTypingAtom,
    setFocusedAction,
    setTypingAction,
    setCurrentLetterIdAction,
} from "atoms/state"

const InputArea = ({}, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const [prevTextLength, setPrevTextLength] = useState(0)
    const setEnteredText = useAction(setEnteredTextAction)
    const changeCurrentLetterId = useAction(setCurrentLetterIdAction)
    const setFocused = useAction(setFocusedAction)
    const incrementMistakesCounter = useAction(incrementMistakesCounterAction)
    const setTyping = useAction(setTypingAction)
    const [visibleText] = useAtom(visibleTextAtom)
    const [isTyping] = useAtom(isTypingAtom)
    const [isEditable] = useAtom(isEditableAtom)

    const onSelect = (event: SyntheticEvent<HTMLTextAreaElement, Event>) => {
        if (event.target instanceof HTMLTextAreaElement) {
            changeCurrentLetterId(event.target.selectionStart ?? 0)
        }
    }

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const enteredText = event.target.value
        changeCurrentLetterId(enteredText.length)

        // old logics
        const lastSymbolId = enteredText.length - 1
        const isInCorrect =
            enteredText[lastSymbolId] != visibleText[lastSymbolId] &&
            enteredText.length > 0 &&
            prevTextLength < enteredText.length

        if (isInCorrect) {
            incrementMistakesCounter()
        }

        if (!isTyping) {
            setTyping(!!enteredText.length)
        }
        // TODO: какое то говно
        if (!enteredText.includes("\n")) {
            setEnteredText(enteredText)
        }

        setPrevTextLength(enteredText.length)
    }

    const [value] = useAtom(enteredTextAtom)

    return (
        <textarea
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={cn(styles.area, styles.input)}
            onSelect={onSelect}
            onChange={onChange}
            disabled={!isEditable}
            ref={ref}
            value={value}
        />
    )
}

export default observer(forwardRef(InputArea))
