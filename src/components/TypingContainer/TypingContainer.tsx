import React, {createRef, useEffect} from "react";
import StatsList from "../cards/StatsList/StatsList";
import TypingArea from "../TypingArea/TypingArea";
import ButtonsList from "../cards/ButtonsList/ButtonsList";
import styles from './TypingContainer.module.scss'
import Service from "../../services/service";
import settings from "../../store/settings";
import letters from "../../store/letters";


const TypingContainer = () => {
    const hiddenAreaRef = createRef<HTMLTextAreaElement>()

    const changeMainText = (): void => {
        const text = Service.getText(settings.language)
        text.then(text => {
            letters.setText(text)
            letters.setEnteredText('')
        })
    }

    useEffect(() => {
        changeMainText()
    }, [settings.language])

    return (
        <div className={styles.container}>
            <StatsList />
            <TypingArea
                changeMainText={changeMainText}
                ref={hiddenAreaRef}
            />
            <ButtonsList
                hiddenAreaRef={hiddenAreaRef}
                changeMainText={changeMainText}
            />
        </div>
    )
}

export default TypingContainer