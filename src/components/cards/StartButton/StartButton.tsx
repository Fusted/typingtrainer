import React, {FC, useEffect} from "react"
import letters from "../../../store/letters"
import { observer } from "mobx-react-lite"
import style from "../cards.module.scss"

export interface IButton {
    hiddenAreaRef: React.RefObject<HTMLElement>
    changeMainText: () => void
}

const ButtonStart: FC<IButton> = ({ hiddenAreaRef, changeMainText }) => {
    const resetState = (): void => {
        letters.turnOffStatus()
        letters.setCurrentLetterId(0)
        letters.setCurrentLetter(letters.text[0])
        letters.setEnteredText("")
    }

    const addSelectionListener = (): void => {
        document.addEventListener("selectionchange", () => {
            const cursorPosition = window.getSelection() as Selection
            letters.setCurrentLetterId(cursorPosition.focusOffset)
        })
    }

    const onStart = (): void => {
        if (!letters.status && hiddenAreaRef) {
            letters.setEditableTrue()
            hiddenAreaRef?.current?.focus()
        } else {
            changeMainText()
            letters.setEditableTrue()
        }
        resetState()
    }

    useEffect(() => {
        addSelectionListener()
    })

    const text = !letters.status ? "Start" : "Reset"

    return (
        <div className={style.button} onClick={onStart}>
            {text}
        </div>
    )
}

export default observer(ButtonStart)
