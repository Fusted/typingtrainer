import React, {useEffect, useState} from "react"
import { observer } from "mobx-react-lite"
import letters from "../../store/letters"
import styles from "./letter.module.scss"
import cn from 'classnames'

interface ILetter {
    focusStatus: boolean
    letter: string
    index: number
    enteredText: string
}

const Letter = ({ letter, index, focusStatus, enteredText }: ILetter) => {
    const [className, setClassname] = useState(styles.default)

    const { text , currentLetterId } = letters
    const isStart = !currentLetterId && enteredText.length
    useEffect(() => {
        if (index <= enteredText.length) {
            if (text[index] == enteredText[index]) {
                setClassname(styles.done)
            } else if (index < enteredText.length) {
                setClassname(styles.false)
            }

            if (index === currentLetterId && !isStart && focusStatus) {
                setClassname(cn(className, styles.active))
            }
        }
    }, [letters.currentLetterId])


    return (
        <span className={className} id={index.toString()}>
            {letter}
        </span>
    )
}

export default observer(Letter)
