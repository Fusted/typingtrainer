import styles from "../TypingArea/typingArea.module.scss"

import React, { FC, memo, PropsWithChildren } from "react"
import Letter from "components/Letter/Letter"

interface Props {
    visibleText: string
}

const ShowingText: FC<Props> = ({ visibleText }) => {
    return <div className={styles.area}>{formatText(visibleText)}</div>
}

const compareProps = (
    prev: Readonly<PropsWithChildren<Props>>,
    next: Readonly<PropsWithChildren<Props>>
) => {
    return prev.visibleText === next.visibleText
}
function formatText(text: string) {
    return text
        .split("")
        .map((letter, index) => (
            <Letter letter={letter} index={index} key={index + letter} />
        ))
}

export default memo(ShowingText, compareProps)
