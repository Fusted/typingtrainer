import React, {Fragment, FC, useState, useEffect, memo} from "react"
import cn from "classnames"
import Letter from "../Letter/Letter"
import styles from "../TypingArea/typingArea.module.scss"


interface IShowingText {
    text: string,
    isImmutable: boolean
}


const ShowingText: FC<IShowingText> = ({ text, isImmutable }) => {
    const [textArray, setTextArray] = useState<JSX.Element[]>()

    useEffect(() => {
        setTextArray(formatText(text))
    }, [text])

    return (
        <div className={cn(styles.area, isImmutable ? styles.immutable : 'mutable')}>
            {textArray}
        </div>
    )
}

function formatText(text: string){
    return text.split("").map((letter, index) => (
        <Fragment key={index}>
            <Letter index={index} letter={letter} />
        </Fragment>
    ))
}

export default memo(ShowingText)
