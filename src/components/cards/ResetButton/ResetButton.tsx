import React, { createRef, FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import letters from "../../../store/letters"
import style from "../cards.module.scss"

export interface IButton {
    hiddenAreaRef: React.RefObject<HTMLTextAreaElement>
    changeMainText: () => void
}

const ResetButton: FC<IButton> = ({ hiddenAreaRef, changeMainText }) => {
    const resetRef = createRef<HTMLDivElement>()
    useEffect(() => {
        hiddenAreaRef.current?.focus()
        document.addEventListener("keyup", onKeyReset)
        return function cleanup() {
            document.removeEventListener("keyup", onKeyReset)
        }
    }, [resetRef])
    const resetState = (): void => {
        letters.setStatusFalse()
        letters.setCurrentLetterId(0)
        letters.setCurrentLetter(letters.text[0])
        letters.resetMistakesCounter()
    }

    const onReset = (): void => {
        letters.setShouldReset(true)
        letters.setEditableTrue()
        letters.resetMistakesCounter()
        changeMainText()
        hiddenAreaRef?.current?.focus()
        resetState()
    }

    const onKeyReset = (e: KeyboardEvent) => {
        if (e.code === "Enter") {
            onReset()
        }
    }

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
