import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import letters from "../../../store/letters"
import style from "../cards.module.scss"



export interface IButton {
    setNewEnteredText(newEnteredText: string): void
    hiddenAreaRef: React.RefObject<HTMLTextAreaElement>
    changeMainText: () => void
}

const ButtonStart: FC<IButton> = ({
    hiddenAreaRef,
    changeMainText,
    setNewEnteredText,
}) => {
    const resetState = (): void => {
        letters.setStatusFalse()
        letters.setCurrentLetterId(0)
        letters.setCurrentLetter(letters.text[0])
        setNewEnteredText("")
    }

    const onClick = (): void => {
        if (letters.status && hiddenAreaRef) {
            changeMainText()
            setNewEnteredText('')
        }
        hiddenAreaRef?.current?.focus()
        resetState()
        letters.setEditableTrue()
    }

    useEffect(() => {
        hiddenAreaRef.current?.focus()
    }, [hiddenAreaRef])

    const text = letters.status ? "Reset" : "Start"

    return (
        <div className={style.button} onClick={onClick}>
            {text}
        </div>
    )
}

export default observer(ButtonStart)
