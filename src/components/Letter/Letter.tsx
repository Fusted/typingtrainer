import React, { useMemo} from "react"
import styles from "./letter.module.scss"
import cn from "classnames"
import {observer} from "mobx-react-lite";
import letters from "../../store/letters";

interface ILetter {
    letter: string
    index: number
}

const Letter = ({
    letter,
    index,
}: ILetter) => {
    // Todo: мейби создать ts файл для функциональщины и туда вынести эту всю логику ?
    const expectedLetter = letters.text[index]
    const isStart = !letters.currentLetterId && letters.enteredText.length
    const isNotDefault = index <= letters.enteredText.length
    const isCorrect = expectedLetter == letters.enteredText[index]
    const isInCorrect = index < letters.enteredText.length
    const isCursor = index === letters.currentLetterId && !isStart && letters.focusStatus

    const className: string = useMemo(() => {
        let setClassname = styles.default
        // Todo: Вынести в файл функционала и использовать модуль classname, чтобы получилось cn(isTest && test, isTest2 && test2)
        if (isNotDefault) {
            if (isCorrect) {
                setClassname = styles.done
            } else if (isInCorrect) {
                setClassname = styles.false
            }

            if (isCursor) {
                setClassname = cn(setClassname, styles.active)
            }
        }

        return setClassname;
    }, [isCursor, isInCorrect, isCorrect, isNotDefault])


    return (
        <span className={className}>
            {letter}
        </span>
    )
}

export default observer(Letter)