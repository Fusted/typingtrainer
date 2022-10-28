import styles from "./typingArea.module.scss"

import React, { useEffect } from "react"
import { useAction, useAtom } from "@reatom/npm-react"
import { setVisibleTextAction, visibleTextAtom } from "atoms/visibleText"
import { enteredTextAtom, resetEneteredTextAction } from "atoms/enteredTextAtom"
import ShowingText from "components/ShowingText/ShowingText"
import InputArea from "components/InputArea/InputArea"

const TypingArea = ({}, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    const resetEnteredText = useAction(resetEneteredTextAction)
    const setVisisbleText = useAction(setVisibleTextAction)
    const [enteredText] = useAtom(enteredTextAtom)
    const [visibleText] = useAtom(visibleTextAtom)

    useEffect(() => {
        if (enteredText.length === visibleText.length) {
            resetEnteredText()
            setVisisbleText()
        }
    }, [
        enteredText.length,
        visibleText.length,
        setVisisbleText,
        resetEnteredText,
    ])

    return (
        <div className={styles.wrapper}>
            <ShowingText visibleText={visibleText} />
            <InputArea ref={ref} />
        </div>
    )
}

export default React.forwardRef(TypingArea)
