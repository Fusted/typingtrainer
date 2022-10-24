import styles from "./typingArea.module.scss"

import React, { ForwardedRef, forwardRef, useEffect } from "react"
import cn from "classnames"
import ShowingText from "components/ShowingText/ShowingText"
import InputArea from "components/InputArea/InputArea"
import { setVisibleTextAction, visibleTextAtom } from "../../atoms/visibleText"
import { useAction, useAtom } from "@reatom/npm-react"
import { enteredTextAtom, resetEneteredTextAction } from "atoms/enteredTextAtom"
import { isEditableAtom } from "atoms/state"

const TypingArea = ({}, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const resetEnteredText = useAction(resetEneteredTextAction)
    const setVisisbleText = useAction(setVisibleTextAction)
    const [enteredText] = useAtom(enteredTextAtom)
    const [visibleText] = useAtom(visibleTextAtom)
    const [isEditable] = useAtom(isEditableAtom)

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
        <div
            className={cn(
                styles.wrapper,
                isEditable ? undefined : styles.immutable
            )}
        >
            <ShowingText visibleText={visibleText} />
            <InputArea ref={ref} />
        </div>
    )
}

export default forwardRef(TypingArea)
