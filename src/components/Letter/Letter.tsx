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
    const {currentLetterId, enteredText, focusStatus} = letters
    const expectedLetter = letters.text[index]
    const isStart = !currentLetterId && enteredText.length

    const className: string = useMemo(() => {
        let setClassname = styles.default

        if (index <= enteredText.length) {
            if (expectedLetter == enteredText[index]) {
                setClassname = styles.done
            } else if (index < enteredText.length) {
                setClassname = styles.false
            }

            if (index === currentLetterId && !isStart && focusStatus) {
                setClassname = cn(setClassname, styles.active)
            }
        }
        
        return setClassname;
    }, [currentLetterId, enteredText, expectedLetter, focusStatus, index, isStart])


    return (
        <span className={className} id={index.toString()}>
            {letter}
        </span>
    )
}

export default observer(Letter)
