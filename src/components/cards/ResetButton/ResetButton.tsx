import React, { createRef, FC, useCallback, useEffect } from "react"
import { observer } from "mobx-react-lite"
import letters from "../../../store/letters"
import style from "../cards.module.scss"

export interface IButton {
    hiddenAreaRef: React.RefObject<HTMLTextAreaElement>
    changeMainText: () => void
}

const ResetButton: FC<IButton> = ({
    hiddenAreaRef,
    changeMainText
}) => {
    // Todo: Можно вынести из компонента и не юзать useCallBack
    const resetRef = createRef<HTMLDivElement>()
    const resetState = useCallback((): void => {
        letters.setStatusFalse()
        letters.setCurrentLetterId(0)
        letters.setCurrentLetter(letters.text[0])
        letters.resetMistakesCounter()
    }, [letters.setEnteredText])

    const onReset = useCallback((): void => {
        letters.setShouldReset(true)
        letters.setEditableTrue()
        letters.resetMistakesCounter()
        changeMainText()
        hiddenAreaRef?.current?.focus()
        resetState()
    }, [changeMainText, hiddenAreaRef, resetState, letters.setEnteredText])

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
