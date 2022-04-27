import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import StartButton from "../StartButton/StartButton"
import SettingsButton from "../SettingsButton/SettingsButton"
import DataCard from "../DataCard/DataCard"
import letters from "../../../store/letters"
import styles from "../cards.module.scss"
import TimerCard from "../TimerCard/TimerCard";

interface ICardList {
    enteredText: string
    setNewEnteredText(newEnteredText: string): void
    hiddenAreaRef: React.RefObject<HTMLElement>
    changeMainText: () => void
    selection: Selection | null
}

const CardList: FC<ICardList> = ({ hiddenAreaRef, changeMainText, enteredText, setNewEnteredText, selection }) => {
    const accuracyCounter = (total: number, incorrect: number) => {
        if (total === 0) {
            if (letters.mistakesCounter != 0) {
                letters.resetMistakesCounter()
            }
            return 100
        }
        return 100 - Math.ceil((incorrect / total) * 100)
    }

    const accuracy = accuracyCounter(
        enteredText.length,
        letters.mistakesCounter
    )

    return (
        <div className={styles.cardList}>
            <StartButton
                selection={selection}
                hiddenAreaRef={hiddenAreaRef}
                setNewEnteredText={setNewEnteredText}
                changeMainText={changeMainText}
            />
            <DataCard text="Accuracy" value={`${accuracy} %`} />
            <TimerCard enteredText={enteredText}/>
            <SettingsButton text="Settings" />
        </div>
    )
}

export default observer(CardList)
