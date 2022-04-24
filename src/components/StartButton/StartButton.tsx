import React, { FC } from "react"
import letters from "../../store/letters"
import { observer } from "mobx-react-lite"
import styles from "../CardList/cardList.module.scss"

export interface IButton {
    hiddenAreaRef: React.RefObject<HTMLElement>
    changeMainText: () => void
}

const ButtonStart: FC<IButton> = ({ hiddenAreaRef, changeMainText }) => {
    const resetState = (): void => {
        letters.toggleStatus()
        letters.setCurrentLetterId(0)
        letters.setCurrentLetter(letters.text[0])
        letters.setEnteredText("")
    }

    const keyListener = (): void => {
        document.addEventListener("selectionchange", () => {
            const cursorPosition = window.getSelection() as Selection
            // console.log(cursorPosition.focusOffset)
            letters.setCurrentLetterId(cursorPosition.focusOffset)
        })
    }

    const onStart = (): void => {
        if (!letters.status && hiddenAreaRef) {
            hiddenAreaRef?.current?.focus()
            keyListener()
        } else {
            changeMainText()
        }
        resetState()
    }

    const text = !letters.status ? "Start" : "Reset"

    return (
        <div className={styles.button} onClick={onStart}>
            {text}
        </div>
    )
}

export default observer(ButtonStart)
