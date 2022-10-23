import styles from "./TypingContainer.module.scss"

import React, { createRef, useCallback, useEffect } from "react"
import { observer } from "mobx-react-lite"
import StatsList from "components/cards/StatsList/StatsList"
import TypingArea from "components/TypingArea/TypingArea"
import ButtonsList from "components/cards/ButtonsList/ButtonsList"
import { useAction } from "@reatom/npm-react"
import { resetEneteredTextAction } from "../../atoms/enteredTextAtom"
import { setVisibleTextAction } from "../../atoms/visibleText"
import { setLanguageAction } from "atoms/config"

const TypingContainer = () => {
    const reset = useAction(resetEneteredTextAction)
    const set = useAction(setVisibleTextAction)
    const hiddenAreaRef = createRef<HTMLTextAreaElement>()

    const setLanguage = useAction(setLanguageAction)
    useEffect(() => {
        const language = localStorage.getItem("typing-lan")
        language ? setLanguage(language) : "en"
    }, [setLanguage])

    const focusArea = useCallback(() => {
        hiddenAreaRef?.current?.focus()
    }, [hiddenAreaRef])

    // TODO: какое то говно
    useEffect(() => {
        set()
        reset()
    }, [set, reset])

    return (
        <div className={styles.container}>
            <StatsList />
            <TypingArea ref={hiddenAreaRef} />
            <ButtonsList focusArea={focusArea} />
        </div>
    )
}

export default observer(TypingContainer)
