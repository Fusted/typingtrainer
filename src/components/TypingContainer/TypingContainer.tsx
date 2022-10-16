import styles from "./TypingContainer.module.scss"

import React, { createRef, useCallback, useEffect } from "react"
import { observer } from "mobx-react-lite"
import StatsList from "components/cards/StatsList/StatsList"
import TypingArea from "components/TypingArea/TypingArea"
import ButtonsList from "components/cards/ButtonsList/ButtonsList"
import settings from "store/settings"
import letters from "store/letters"

const TypingContainer = () => {
    const hiddenAreaRef = createRef<HTMLTextAreaElement>()

    const focusArea = useCallback(() => {
        hiddenAreaRef?.current?.focus()
    }, [hiddenAreaRef])

    useEffect(() => {
        letters.resetText()
    }, [settings.language, settings.mode])

    return (
        <div className={styles.container}>
            <StatsList />
            <TypingArea ref={hiddenAreaRef} />
            <ButtonsList focusArea={focusArea} />
        </div>
    )
}

export default observer(TypingContainer)
