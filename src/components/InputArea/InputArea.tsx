import styles from "../TypingArea/typingArea.module.scss"

import React, {
    ChangeEvent,
    ForwardedRef,
    forwardRef,
    SyntheticEvent,
    useCallback,
    useState,
} from "react"
import { observer } from "mobx-react-lite"
import cn from "classnames"
import letters from "store/letters"

const InputArea = ({}, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const [prevTextLength, setPrevTextLength] = useState(0)
    const onChange = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement>): void => {
            const enteredText = e.target.value
            const lastSymbolId = enteredText.length - 1
            const isInCorrect =
                enteredText[lastSymbolId] != letters.text[lastSymbolId] &&
                enteredText.length > 0 &&
                prevTextLength < letters.enteredText.length

            if (isInCorrect) {
                letters.incrementMistakesCounter()
            }

            if (!letters.isTyping) {
                letters.setTyping(Boolean(letters.enteredText.length))
            }
            // TODO: какое то говно
            if (!enteredText.includes("\n")) {
                letters.setEnteredText(enteredText)
            }

            setPrevTextLength(letters.enteredText.length)
        },
        []
    )

    const onFocus = useCallback((): void => {
        letters.setFocus(true)
    }, [])

    const onBlur = (): void => {
        letters.setFocus(false)
    }

    const onSelect = (event: SyntheticEvent<HTMLTextAreaElement, Event>) => {
        if (event.target instanceof HTMLTextAreaElement) {
            letters.setCurrentLetterId(event.target.selectionStart ?? 0)
        }
    }

    return (
        <textarea
            onFocus={onFocus}
            onBlur={onBlur}
            className={cn(styles.area, styles.input)}
            onSelect={onSelect}
            onChange={onChange}
            disabled={!letters.isEditable}
            ref={ref}
            value={letters.enteredText}
        />
    )
}

export default observer(forwardRef(InputArea))
