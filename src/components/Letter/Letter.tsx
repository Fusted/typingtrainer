import React from "react"
import { observer } from "mobx-react-lite"
import letters from "../../store/letters"
import styles from "./letter.module.scss"

interface ILetter {
    letter: string
    key?: string
    index: number
}

const Letter = ({ letter, key, index }: ILetter) => {
    let className = styles.letter_default
    const { text, enteredText } = letters

    if (index <= enteredText.length) {
        if (index === letters.currentLetterId) {
            className = styles.letter_active
        } else {
            if (text[index] == enteredText[index]) {
                className = styles.letter_done
            } else {
                className = styles.letter_false
            }
        }
    }

    return (
        <span key={key} className={className} id={index.toString()}>
            {letter}
        </span>
    )
}

export default observer(Letter)
