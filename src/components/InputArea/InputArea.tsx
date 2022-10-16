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

            if (!enteredText.length && !letters.status) {
                letters.setStatusFalse()
            }

            if (enteredText.length && !letters.status) {
                letters.setStatusTrue()
            }
            if (!enteredText.includes("\n")) {
                letters.setEnteredText(enteredText)
            }

            setPrevTextLength(letters.enteredText.length)
        },
        []
    )

    const onFocus = useCallback((): void => {
        letters.setFocusStatus(true)
    }, [])

    const onBlur = (): void => {
        letters.setFocusStatus(false)
    }

    const onSelect = (e: SyntheticEvent<HTMLTextAreaElement, Event>) => {
        if (e.target instanceof HTMLTextAreaElement) {
            letters.setCurrentLetterId(e.target.selectionStart ?? 0)
        }
    }

    return (
        <textarea
            onFocus={onFocus}
            onBlur={onBlur}
            className={cn(styles.area, styles.input)}
            onSelect={onSelect}
            onChange={onChange}
            disabled={!letters.editable}
            ref={ref}
            value={letters.enteredText}
        />
    )
}

export default observer(forwardRef(InputArea))
