import styles from "./letter.module.scss"

import React from "react"
import { useAtom } from "@reatom/npm-react"
import cn from "classnames"
import { isfocusedAtom, currentLetterIdAtom } from "atoms/state"
import { enteredTextAtom } from "atoms/enteredTextAtom"

interface ILetter {
    index: number
    letter: string
}

const Letter = ({ letter, index }: ILetter) => {
    const [className] = useAtom((ctx) => {
        const currentLetterId = ctx.spy(currentLetterIdAtom)
        const enteredText = ctx.spy(enteredTextAtom)
        const isFocused = ctx.spy(isfocusedAtom)
        const isStart = !currentLetterId && enteredText.length

        const isCorrect = enteredText[index] === letter
        const isInCorrect = index < enteredText.length
        const isDefault = index > enteredText.length
        const isCursor = index === currentLetterId && !isStart && isFocused

        return getClassName(isCursor, isCorrect, isDefault, isInCorrect)
    })
    return <span className={className}>{letter}</span>
}

const getClassName = (
    isCursor: boolean,
    isCorrect: boolean,
    isDefault: boolean,
    isIncorrect: boolean
): string => {
    if (isDefault) {
        return ""
    }

    let className = styles.default

    if (isCorrect) {
        className = styles.done
    } else if (isIncorrect) {
        className = styles.false
    }

    return isCursor ? cn(className, styles.active) : className
}

export default Letter
