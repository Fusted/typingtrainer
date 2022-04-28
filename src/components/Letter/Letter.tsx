import React, { useEffect, useState } from "react"
import letters from "../../store/letters"
import styles from "./letter.module.scss"
import cn from "classnames"

interface ILetter {
    focusStatus: boolean
    letter: string
    index: number
    enteredText: string
    expectedLetter: string
    currentLetterId: number
}

const Letter = ({
    letter,
    index,
    focusStatus,
    enteredText,
    expectedLetter,
    currentLetterId,
}: ILetter) => {
    const [className, setClassname] = useState(styles.default)

    const isStart = !currentLetterId && enteredText.length
    useEffect(() => {
        if (index <= enteredText.length) {
            if (expectedLetter == enteredText[index]) {
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

export default Letter
