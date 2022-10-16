import styles from "../TypingArea/typingArea.module.scss"

import React, { Fragment, FC, useState, useEffect, memo } from "react"
import Letter from "components/Letter/Letter"

interface Props {
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
const ShowingText: FC<Props> = ({ text }) => {
    const [textArray, setTextArray] = useState<JSX.Element[]>()

    useEffect(() => {
        setTextArray(formatText(text))
    }, [text])

    return <div className={styles.area}>{textArray}</div>
}

const compareProps = (
    prev: Readonly<React.PropsWithChildren<Props>>,
    next: Readonly<React.PropsWithChildren<Props>>
) => {
    return prev.text == next.text
}

export default memo(ShowingText, compareProps)
