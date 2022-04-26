import React, { useState, useEffect } from "react"
import styles from "../cards.module.scss"
import letters from "../../../store/letters"
import { observer } from "mobx-react-lite"

const TimerCard = () => {
    const [timerStatus, setTimerStatus] = useState<boolean>(false)
    const [time, setTime] = useState<number>(letters.time)

    const id = React.useRef<number | undefined>()
    const speedCounter = (
        inputtedText: string,
        templateText: string
    ): number => {
        let speed = 0
        inputtedText.split("").forEach((letter, index) => {
            if (letter == templateText[index]) {
                speed++
            }
        })
        return speed
    }

    useEffect(() => {
        // timer run
        if (!timerStatus && letters.status && letters.editable) {
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
                `Your speed is ${speedCounter(
                    letters.enteredText,
                    letters.text
                )} SPM`
            )
        }
    }, [letters.status, time, letters.editable])

    return <div className={styles.card}>Time left: {time}</div>
}

export default observer(TimerCard)
