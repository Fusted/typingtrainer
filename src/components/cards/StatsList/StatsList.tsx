import styles from "../cards.module.scss"

import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import DataCard from "../DataCard/DataCard"
import letters from "store/letters"
import TimerCard from "../TimerCard/TimerCard"

const StatsList: FC = () => {
    // Todo: может вынести в hook это чуда юдо и работу со стейтом?
    const [time, setTime] = useState<number>(letters.time)
    const [speed, setSpeed] = useState(0)
    const [accuracy, setAccuracy] = useState(100)
    const [tempLength, setTempLenght] = useState(0)
    const [tempCorrect, setTempCorrect] = useState(0)
    const { enteredText, mistakesCounter, text, shouldReset } = letters

    useEffect(() => {
        setAccuracy(
            getAccuracy(enteredText.length + tempLength, mistakesCounter)
        )
        setSpeed(getSpeed(enteredText, text, tempCorrect, time))
    }, [time])

    useEffect(() => {
        if (enteredText.length === text.length) {
            setTempCorrect(getCorrectLetters(enteredText, enteredText))
            setTempLenght(enteredText.length)
        }
    }, [enteredText])

    useEffect(() => {
        if (shouldReset) {
            setTempLenght(0)
            setTempCorrect(0)
        }
    }, [shouldReset])

    return (
        <div className={styles.cardList}>
            <DataCard text="Accuracy" value={`${accuracy} %`} />
            <DataCard text="Speed" value={`${speed} LPM`} />
            <DataCard text="Mistakes" value={mistakesCounter} />
            <TimerCard time={time} setTime={setTime} />
        </div>
    )
}

function getCorrectLetters(inputtedText: string, templateText: string) {
    let letters = 0
    inputtedText.split("").forEach((letter, index) => {
        if (letter == templateText[index]) {
            letters++
        }
    })
    return letters
}

function getAccuracy(total: number, incorrect: number) {
    if (!total && incorrect) {
        return 100
    }
    const accuracy = 100 - Math.ceil((incorrect / total) * 100)
    return accuracy > 0 ? accuracy : 0
}

function getSpeed(
    inputtedText: string,
    templateText: string,
    temp: number,
    time: number
): number {
    const correctLetters = getCorrectLetters(inputtedText, templateText)
    return Math.round((correctLetters + temp) * (1 / ((61 - time) / 60)))
}
export default observer(StatsList)
