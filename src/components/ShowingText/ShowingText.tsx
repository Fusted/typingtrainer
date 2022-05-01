import React, { Fragment, FC } from "react"
import Letter from "../Letter/Letter"
import styles from "../TypingArea/typingArea.module.scss"


interface IShowingText {
    changeMainText(): void
    text: string
}

const ShowingText: FC<IShowingText> = ({ text }) => {
    const formatText = (text: string) => {
        return text.split("").map((letter, index) => {
            return (
                <Fragment key={index}>
                    <Letter
                        index={index}
                        letter={letter}
                    />
                </Fragment>
            )
        })
    }

    const formattedText = formatText(text)
    return <div className={styles.area}>{formattedText}</div>
}

export default ShowingText
