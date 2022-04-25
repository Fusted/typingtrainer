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
    // const [temp, setTemp] = useState(0)
    let className = styles.default
    const { text, enteredText } = letters

    if (index <= enteredText.length) {
        if (index === letters.currentLetterId) {
            className = styles.active
        } else {
            if (text[index] == enteredText[index]) {
                className = styles.done
            } else {
                className = styles.false
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
