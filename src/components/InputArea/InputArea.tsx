import styles from "../TypingArea/typingArea.module.scss"

import React, { useState } from "react"
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

const InputArea = ({}, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    const [prevTextLength, setPrevTextLength] = useState(0)
    const setTyping = useAction(setTypingAction)
    const [visibleText] = useAtom(visibleTextAtom)
    const [isTyping] = useAtom(isTypingAtom)
    const [isEditable] = useAtom(isEditableAtom)
    const [value] = useAtom(enteredTextAtom)
    const setEnteredText = useAction(setEnteredTextAction)
    const changeCurrentLetterId = useAction(setCurrentLetterIdAction)
    const setFocused = useAction(setFocusedAction)
    const incrementMistakesCounter = useAction(incrementMistakesCounterAction)

    const onSelect = (
        event: React.SyntheticEvent<HTMLTextAreaElement, Event>
    ) => {
        if (event.target instanceof HTMLTextAreaElement) {
            changeCurrentLetterId(event.target.selectionStart ?? 0)
        }
    }

    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const enteredText = event.target.value

        if (enteredText.match(/\n/g)) {
            return
        }

        const lastSymbolId = enteredText.length - 1
        const isInCorrect =
            enteredText[lastSymbolId] != visibleText[lastSymbolId] &&
            enteredText.length > 0 &&
            prevTextLength < enteredText.length

        changeCurrentLetterId(enteredText.length)

        if (isInCorrect) {
            incrementMistakesCounter()
        }

        if (!isTyping) {
            setTyping(!!enteredText.length)
        }

        setEnteredText(enteredText)
        setPrevTextLength(enteredText.length)
    }

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

export default React.forwardRef(InputArea)
