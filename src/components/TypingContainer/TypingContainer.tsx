import React, { createRef, useEffect } from "react"
import StatsList from "../cards/StatsList/StatsList"
import TypingArea from "../TypingArea/TypingArea"
import ButtonsList from "../cards/ButtonsList/ButtonsList"
import styles from "./TypingContainer.module.scss"
import Service from "../../services/service"
import settings from "../../store/settings"
import letters from "../../store/letters"
import {observer} from "mobx-react-lite";

const TypingContainer = () => {
    const hiddenAreaRef = createRef<HTMLTextAreaElement>()

    // TODO: Вынести api запрос в hook, а еще лучше сделать singleton
    const changeMainText = (): void => {
        const text = Service.getText(settings.language)
        text.then((text) => {
            letters.setText(text)
            letters.setEnteredText("")
        })
    }

    useEffect(() => {
        changeMainText()
    }, [settings.language])

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
