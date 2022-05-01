import React, { FC, useCallback, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import DataCard from "../DataCard/DataCard"
import letters from "../../../store/letters"
import styles from "../cards.module.scss"
import TimerCard from "../TimerCard/TimerCard"

const StatsList: FC = () => {
    const [time, setTime] = useState<number>(letters.time)
    const [speed, setSpeed] = useState(0)
    const [accuracy, setAccuracy] = useState(100)

    const accuracyCounter = useCallback((total: number, incorrect: number) => {
        if (total === 0) {
            if (letters.mistakesCounter != 0) {
                letters.resetMistakesCounter()
            }
            return 100
        }
        const accuracy = 100 - Math.ceil((incorrect / total) * 100)
        return accuracy > 0 ? accuracy : 0
    }, [])

    const speedCounter = useCallback(
        (inputtedText: string, templateText: string): number => {
            let letters = 0
            inputtedText.split("").forEach((letter, index) => {
                if (letter == templateText[index]) {
                    letters++
                }
            })
            return Math.round(letters * (1 / ((61 - time) / 60)))
        },
        [time]
    )

    useEffect(() => {
        setAccuracy(
            accuracyCounter(letters.enteredText.length, letters.mistakesCounter)
        )
        setSpeed(speedCounter(letters.enteredText, letters.text))
    }, [time])

    return (
        <div className={styles.cardList}>
            <DataCard text="Accuracy" value={`${accuracy} %`} />
            <DataCard text="Speed" value={`${speed} LPM`} />
            <TimerCard time={time} setTime={setTime} />
        </div>
    )
}

export default observer(StatsList)
