import React, { createRef, useEffect } from "react"
import StatsList from "../cards/StatsList/StatsList"
import TypingArea from "../TypingArea/TypingArea"
import ButtonsList from "../cards/ButtonsList/ButtonsList"
import styles from "./TypingContainer.module.scss"
import settings from "../../store/settings"
import letters from "../../store/letters"
import { observer } from "mobx-react-lite"
import { getRandomText, getRandomWords } from "../../services/service"

const TypingContainer = () => {
    const hiddenAreaRef = createRef<HTMLTextAreaElement>()

    const changeMainText = (): void => {
        if (settings.mode == "words") {
            getRandomWords(settings.language, 400).then((text) =>
                resetText(text)
            )
        } else {
            getRandomText(settings.language).then((text) => resetText(text))
        }
    }

    const resetText = (text: string) => {
        letters.setText(text)
        letters.setEnteredText("")
    }

    useEffect(() => {
        changeMainText()
    }, [settings.language, settings.mode])

    return (
        <div className={styles.container}>
            <StatsList />
            <TypingArea changeMainText={changeMainText} ref={hiddenAreaRef} />
            <ButtonsList
                hiddenAreaRef={hiddenAreaRef}
                changeMainText={changeMainText}
            />
        </div>
    )
}

export default observer(TypingContainer)
