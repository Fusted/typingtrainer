import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import letters from "../../../store/letters"
import style from "../cards.module.scss"



export interface IButton {
    setNewEnteredText(newEnteredText: string): void
    hiddenAreaRef: React.RefObject<HTMLElement>
    changeMainText: () => void
    selection: Selection | null
}

const ButtonStart: FC<IButton> = ({
    hiddenAreaRef,
    changeMainText,
    setNewEnteredText,
    selection
}) => {
    const resetState = (): void => {
        letters.turnOffStatus()
        letters.setCurrentLetterId(0)
        letters.setCurrentLetter(letters.text[0])
        setNewEnteredText("")
    }

    const addSelectionListener = (): void => {
        document.addEventListener("selectionchange", () => {
            const pos = selection?.focusOffset
            letters.setCurrentLetter(pos as never)
        })
    }

    const onStart = (): void => {
        if (!letters.status && hiddenAreaRef) {
            hiddenAreaRef?.current?.focus()
        } else {
            changeMainText()
        }
        resetState()
        letters.setEditableTrue()
    }

    useEffect(() => {
        hiddenAreaRef.current?.focus()
        addSelectionListener()
    }, [])

    const text = !letters.status ? "Start" : "Reset"

    return (
        <div className={style.button} onClick={onStart}>
            {text}
        </div>
    )
}

export default observer(ButtonStart)
