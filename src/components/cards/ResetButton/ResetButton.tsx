import React, { createRef, FC, useCallback, useEffect } from "react"
import { observer } from "mobx-react-lite"
import letters from "../../../store/letters"
import style from "../cards.module.scss"

export interface IButton {
    setNewEnteredText(newEnteredText: string): void
    hiddenAreaRef: React.RefObject<HTMLTextAreaElement>
    changeMainText: () => void
}

const ResetButton: FC<IButton> = ({
    hiddenAreaRef,
    changeMainText,
    setNewEnteredText,
}) => {
    const resetRef = createRef<HTMLDivElement>()
    const resetState = useCallback((): void => {
        letters.setStatusFalse()
        letters.setCurrentLetterId(0)
        letters.setCurrentLetter(letters.text[0])
        letters.resetMistakesCounter()
        setNewEnteredText("")
    }, [setNewEnteredText])

    const onReset = useCallback((): void => {
        // if (letters.status && hiddenAreaRef) {
        changeMainText()
        setNewEnteredText("")
        hiddenAreaRef?.current?.focus()
        resetState()
        letters.setEditableTrue()
    }, [changeMainText, hiddenAreaRef, resetState, setNewEnteredText])

    const onKeyReset = (e: KeyboardEvent) => {
        if (e.code === 'Enter') {
            resetRef.current?.click()
        }
    }
    useEffect(() => {
        hiddenAreaRef.current?.focus()
        document.addEventListener("keyup", onKeyReset)
        return function cleanup() {
            document.removeEventListener("keyup", onKeyReset)
        }
    }, [resetRef])

    return (
        <div
            ref={resetRef}
            className={style.button}
            onClick={onReset}
            tabIndex={1}
        >
            Reset
        </div>
    )
}

export default observer(ResetButton)
