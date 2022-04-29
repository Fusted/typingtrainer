import React, { useState, useEffect, FC, useCallback } from "react"
import styles from "../cards.module.scss"
import letters from "../../../store/letters"
import { observer } from "mobx-react-lite"

interface ITimerCard {
    enteredText: string
}

const TimerCard: FC<ITimerCard> = ({ enteredText }) => {
    const [timerStatus, setTimerStatus] = useState<boolean>(false)
    const [time, setTime] = useState<number>(letters.time)

    const id = React.useRef<number | undefined>()
    const speedCounter = useCallback(
        (inputtedText: string, templateText: string): number => {
            let speed = 0
            inputtedText.split("").forEach((letter, index) => {
                if (letter == templateText[index]) {
                    speed++
                }
            })
            return speed
        },
        []
    )

    useEffect(() => {
        // timer run
        const isGetStarted = !timerStatus && letters.status && letters.editable
        if (isGetStarted) {
            setTimerStatus(true)
            id.current = window.setInterval(() => {
                setTime((time) => time - 1)
            }, 1000)
        }
        //timer stop
        if (time === 0 && timerStatus) {
            setTime(letters.time)
            letters.setEditableFalse()
            window.clearInterval(id.current)
            setTimerStatus(false)
            //сделать нормальный визуал
            console.log(
                `Your speed is ${speedCounter(enteredText, letters.text)} SPM`
            )
        }

        if (!enteredText) {
            setTime(letters.time)
            window.clearInterval(id.current)
            setTimerStatus(false)
        }

    }, [time, timerStatus, enteredText, speedCounter])

    return <div className={styles.card}>Time left: {time}</div>
}

export default observer(TimerCard)
