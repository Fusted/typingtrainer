import React, { createRef, useEffect } from "react"
import StatsList from "../cards/StatsList/StatsList"
import TypingArea from "../TypingArea/TypingArea"
import ButtonsList from "../cards/ButtonsList/ButtonsList"
import styles from "./TypingContainer.module.scss"
import {getRandomWords, getText} from "../../services/service"
import settings from "../../store/settings"
import letters from "../../store/letters"
import {observer} from "mobx-react-lite";

const TypingContainer = () => {
    const hiddenAreaRef = createRef<HTMLTextAreaElement>()

    // TODO: Вынести api запрос в hook, а еще лучше сделать singleton
    const changeMainText = (): void => {

        if (settings.mode == 'words') {
            const text = getRandomWords(settings.language, 400)
            text.then((text) => {
                letters.setText(text)
                letters.setEnteredText("")
            })
        }
        else if (settings.mode == 'texts') {
            const text = getText(settings.language)
            text.then((text) => {
                letters.setText(text)
                letters.setEnteredText("")
            })
        }
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
// TODO: Убрать default export и сделать index файлы (есть бинд в idea)
export default observer(TypingContainer)
