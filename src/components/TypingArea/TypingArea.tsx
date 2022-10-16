import styles from "./typingArea.module.scss"

import React, { ForwardedRef, forwardRef, useEffect } from "react"
import { observer } from "mobx-react-lite"
import letters from "store/letters"
import ShowingText from "components/ShowingText/ShowingText"
import InputArea from "components/InputArea/InputArea"

const TypingArea = ({}, ref: ForwardedRef<HTMLTextAreaElement>) => {
    useEffect(() => {
        if (letters.enteredText.length === letters.text.length) {
            letters.resetText()
        }
    }, [letters.enteredText])

    return (
        <div className={styles.wrapper}>
            <ShowingText text={letters.text} />
            <InputArea ref={ref} />
        </div>
    )
}

export default observer(forwardRef(TypingArea))
