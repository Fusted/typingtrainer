import styles from "../cards.module.scss"

import React, { useState, useEffect, FC, SetStateAction, Dispatch } from "react"
import { observer } from "mobx-react-lite"
import letters from "store/letters"

interface Props {
    time: number
    setTime: Dispatch<SetStateAction<number>>
}

const TimerCard: FC<Props> = ({ time, setTime }) => {
    const [timerStatus, setTimerStatus] = useState<boolean>(false)
    const id = React.useRef<number | undefined>()

    //Todo: вынести этот жир в функциональный файл и я думаю тут можно все как-то упроситить
    useEffect(() => {
        // timer run
        const isGetStarted =
            !timerStatus && letters.isTyping && letters.isEditable

        if (isGetStarted) {
            setTimerStatus(true)
            id.current = window.setInterval(() => {
                setTime((time) => time - 1)
            }, 1000)
        }
        //timer stop
        if (time === 0 && timerStatus) {
            letters.setEditable(false)
            window.clearInterval(id.current)
            setTimerStatus(false)
        }
        // reset timer
        if (letters.shouldReset) {
            setTime(letters.time)
            window.clearInterval(id.current)
            setTimerStatus(false)
            letters.setShouldReset(false)
        }
    }, [time, timerStatus, letters.enteredText, setTime])

    return <div className={styles.card}>Time left: {time}</div>
}

export default observer(TimerCard)
