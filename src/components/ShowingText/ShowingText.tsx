import styles from "../TypingArea/typingArea.module.scss"

import React, { Fragment, FC, useState, useEffect, memo } from "react"
import Letter from "components/Letter/Letter"

interface IShowingText {
    text: string
}
// TODO: вынести в function и вниз компонента
const formatText = (text: string) => {
    return text.split("").map((letter, index) => (
        <Fragment key={index}>
            <Letter index={index} letter={letter} />
        </Fragment>
    ))
}
const ShowingText: FC<IShowingText> = ({ text }) => {
    const [textArray, setTextArray] = useState<JSX.Element[]>()

    useEffect(() => {
        setTextArray(formatText(text))
    }, [text])

    return <div className={styles.area}>{textArray}</div>
}

const compProps = (
    prev: Readonly<React.PropsWithChildren<IShowingText>>,
    next: Readonly<React.PropsWithChildren<IShowingText>>
) => {
    return prev.text == next.text
}

export default memo(ShowingText, compProps)
