import cn from "classnames"
import React, {
    ForwardedRef,
    forwardRef,
    SyntheticEvent,
    useCallback,
} from "react"
import { observer } from "mobx-react-lite"
import letters from "../../store/letters"
import styles from "./typingArea.module.scss"
import ShowingText from "../ShowingText/ShowingText"

interface TypingAreaProps {
    changeMainText(): void
}

const TypingArea = (
    { changeMainText }: TypingAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
) => {

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
            const enteredText = e.target.value
            const lastSymbolId = enteredText.length - 1
            const isInCorrect =
                enteredText[lastSymbolId] != letters.text[lastSymbolId] &&
                enteredText.length > 0

            if (isInCorrect) {
                letters.incrementMistakesCounter()
            }

            if (!enteredText.length && !letters.status) {
                letters.setStatusFalse()
            }

            if (enteredText.length && !letters.status) {
                letters.setStatusTrue()
            }
            letters.setEnteredText(enteredText)

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
        <div className={styles.wrapper}>
            <ShowingText
                text={letters.text}
            />
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
        </div>
    )
}

export default observer(forwardRef(TypingArea))
