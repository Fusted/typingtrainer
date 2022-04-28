import React, { Fragment, FC } from "react"
import { observer } from "mobx-react-lite"
import Letter from "../Letter/Letter"
import styles from "../TypingArea/typingArea.module.scss"
import letters from "../../store/letters"

interface IShowingText {
    enteredText: string
    focusStatus: boolean
    changeMainText(): void
}

const ShowingText: FC<IShowingText> = ({ enteredText, focusStatus }) => {
    const formatText = (text: string) => {
        return text.split("").map((letter, index) => {
            return (
                <Fragment key={index.toString() + Math.random()}>
                    <Letter
                        enteredText={enteredText}
                        focusStatus={focusStatus}
                        index={index}
                        letter={letter}
                        expectedLetter={letters.text[index]}
                        currentLetterId={letters.currentLetterId}
                    />
                </Fragment>
            )
        })
    }
    console.log('+')
    const formattedText = formatText(letters.text)
    return <div className={styles.area}>{formattedText}</div>
}

export default observer(ShowingText)
