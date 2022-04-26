import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import StartButton from "../StartButton/StartButton"
import SettingsButton from "../SettingsButton/SettingsButton"
import DataCard from "../DataCard/DataCard"
import letters from "../../../store/letters"
import styles from "../cards.module.scss"
import TimerCard from "../TimerCard/TimerCard";

interface CardListProps {
    hiddenAreaRef: React.RefObject<HTMLElement>
    changeMainText: () => void
}

const CardList: FC<CardListProps> = ({ hiddenAreaRef, changeMainText }) => {
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
        letters.enteredText.length,
        letters.mistakesCounter
    )

    return (
        <div className={styles.cardList}>
            <StartButton
                hiddenAreaRef={hiddenAreaRef}
                changeMainText={changeMainText}
            />
            <DataCard text="Accuracy" value={`${accuracy} %`} />
            <TimerCard />
            <SettingsButton text="Settings" />
        </div>
    )
}

export default observer(CardList)
