import styles from "./typingArea.module.scss"

import React, { ForwardedRef, forwardRef, useEffect } from "react"
import ShowingText from "components/ShowingText/ShowingText"
import InputArea from "components/InputArea/InputArea"
import { setVisibleTextAction, visibleTextAtom } from "../../atoms/visibleText"
import { useAction, useAtom } from "@reatom/npm-react"
import { enteredTextAtom, resetEneteredTextAction } from "atoms/enteredTextAtom"


const TypingArea = ({}, ref: ForwardedRef<HTMLTextAreaElement>) => {
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

export default forwardRef(TypingArea)
