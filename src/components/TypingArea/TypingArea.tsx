import cn from "classnames"
import React, {
    ForwardedRef,
    forwardRef,
    useState,
    SyntheticEvent,
    useCallback,
} from "react"
import { observer } from "mobx-react-lite"
import letters from "../../store/letters"
import styles from "./typingArea.module.scss"
import ShowingText from "../ShowingText/ShowingText"

interface TypingAreaProps {
    enteredText: string
    setNewEnteredText(newEnteredText: string): void
    changeMainText(): void
}

const TypingArea = (
    { enteredText, setNewEnteredText, changeMainText }: TypingAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
) => {
    const [focusStatus, setFocusStatus] = useState(false)

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
            const enteredText = e.target.value
            const lastSymbolId = enteredText.length - 1
            const isInCorrect =
                enteredText[lastSymbolId] != letters.text[lastSymbolId] &&
                enteredText.length > enteredText.length

            if (isInCorrect) {
                letters.incrementMistakesCounter()
            }

            if (!enteredText.length && !letters.status) {
                letters.setStatusFalse()
            }

            if (enteredText.length && !letters.status) {
                letters.setStatusTrue()
            }

            setNewEnteredText(enteredText)
        },
        [setNewEnteredText]
    )

    const onFocus = useCallback((): void => {
        setFocusStatus(true)
    }, [])

    const onBlur = (): void => {
        setFocusStatus(false)
    }

    const onSelect = (e: SyntheticEvent<HTMLTextAreaElement, Event>) => {
        if (e.target instanceof HTMLTextAreaElement) {
            letters.setCurrentLetterId(e.target.selectionStart ?? 0)
        }
    }

    return (
        <div className={styles.wrapper}>
            <ShowingText
                changeMainText={changeMainText}
                enteredText={enteredText}
                focusStatus={focusStatus}
            />
            <textarea
                onFocus={onFocus}
                onBlur={onBlur}
                className={cn(styles.area, styles.input)}
                onSelect={onSelect}
                onChange={onChange}
                disabled={!letters.editable}
                ref={ref}
                value={enteredText}
            />
        </div>
    )
}

export default observer(forwardRef(TypingArea))
