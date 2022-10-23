import styles from "../cards.module.scss"

import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import DataCard from "../DataCard/DataCard"
import TimerCard from "../TimerCard/TimerCard"
import { timeLimitAtom } from "atoms/config"
import { useAtom } from "@reatom/npm-react"
import { enteredTextAtom } from "atoms/enteredTextAtom"
import { isShouldResetAtom, mistakesCounterAtom } from "atoms/state"
import { visibleTextAtom } from "atoms/visibleText"

const StatsList: FC = () => {
    // TODO: вынести логику в атомы
    const [timeLimit] = useAtom(timeLimitAtom)
    const [enteredText] = useAtom(enteredTextAtom)
    const [visibleText] = useAtom(visibleTextAtom)
    const [shouldReset] = useAtom(isShouldResetAtom)
    const [mistakesCounter] = useAtom(mistakesCounterAtom)

    const [time, setTime] = useState<number>(timeLimit)
    const [speed, setSpeed] = useState(0)
    const [accuracy, setAccuracy] = useState(100)
    const [tempLength, setTempLenght] = useState(0)
    const [tempCorrect, setTempCorrect] = useState(0)

    useEffect(() => {
        setAccuracy(
            getAccuracy(enteredText.length + tempLength, mistakesCounter)
        )
        setSpeed(getSpeed(enteredText, visibleText, tempCorrect, time))
    }, [
        enteredText,
        mistakesCounter,
        tempCorrect,
        tempLength,
        time,
        visibleText,
    ])

    useEffect(() => {
        if (enteredText.length === visibleText.length) {
            setTempCorrect(getCorrectLetters(enteredText, enteredText))
            setTempLenght(enteredText.length)
        }
    }, [enteredText, visibleText.length])

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
