import styles from "./TypingContainer.module.scss"

import React, { createRef, useCallback, useEffect } from "react"
import StatsList from "components/cards/StatsList/StatsList"
import TypingArea from "components/TypingArea/TypingArea"
import ButtonsList from "components/cards/ButtonsList/ButtonsList"
import { useAction } from "@reatom/npm-react"
import { resetEneteredTextAction } from "../../atoms/enteredTextAtom"
import { setVisibleTextAction } from "../../atoms/visibleText"
import { setLanguageAction } from "atoms/config"
import { setFocusedAction } from "atoms/state"

const TypingContainer = () => {
    const resetEneteredText = useAction(resetEneteredTextAction)
    const setVisibleText = useAction(setVisibleTextAction)
    const setFocus = useAction(setFocusedAction)
    const hiddenAreaRef = createRef<HTMLTextAreaElement>()

    const setLanguage = useAction(setLanguageAction)
    useEffect(() => {
        const language = localStorage.getItem("typing-lan")
        language ? setLanguage(language) : "en"
    }, [setLanguage])

    const focusArea = useCallback(() => {
        hiddenAreaRef?.current?.focus()
        setFocus(true)
    }, [hiddenAreaRef, setFocus])

    useEffect(() => {
        setVisibleText()
        resetEneteredText()
    }, [setVisibleText, resetEneteredText])

    return (
        <div className={styles.container}>
            <StatsList />
            <TypingArea ref={hiddenAreaRef} />
            <ButtonsList focusArea={focusArea} />
        </div>
    )
}

export default TypingContainer
