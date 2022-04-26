import React from "react"
import { observer } from "mobx-react-lite"
import letters from "../../store/letters"
import styles from "./letter.module.scss"

interface ILetter {
    focusStatus: boolean
    letter: string
    index: number
}

const Letter = ({ letter, index, focusStatus }: ILetter) => {
    let className = styles.default
    const { text, enteredText } = letters

    if (index <= enteredText.length) {
        if (text[index] == enteredText[index]) {
            className = styles.done
        } else if (index < enteredText.length) {
            className = styles.false
        }

        if (
            index === letters.currentLetterId &&
            !(letters.currentLetterId === 0 && enteredText.length !== 0) &&
            focusStatus
        ) {
            className += ` ${styles.active}`
        }
    }

    return (
        <span className={className} id={index.toString()}>
            {letter}
        </span>
    )
}

export default observer(Letter)
