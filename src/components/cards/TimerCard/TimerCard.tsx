import styles from "../cards.module.scss"

import React, { useState, useEffect, FC, SetStateAction, Dispatch } from "react"
import { timeLimitAtom } from "atoms/config"
import { useAtom, useAction } from "@reatom/npm-react"
import {
    isEditableAtom,
    isShouldResetAtom,
    isTypingAtom,
    setEditableAction,
    setShouldResetAction,
} from "atoms/state"

interface Props {
    time: number
    setTime: Dispatch<SetStateAction<number>>
}

const TimerCard: FC<Props> = ({ time, setTime }) => {
    const [timerStatus, setTimerStatus] = useState<boolean>(false)
    const id = React.useRef<number | undefined>()

    const [timeLimit] = useAtom(timeLimitAtom)
    const [isShouldReset] = useAtom(isShouldResetAtom)
    const [isTyping] = useAtom(isTypingAtom)
    const [isEditable] = useAtom(isEditableAtom)
    const setEditable = useAction(setEditableAction)
    const setShouldReset = useAction(setShouldResetAction)

    //Todo: вынести этот жир в функциональный файл и я думаю тут можно все как-то упроситить
    useEffect(() => {
        // timer run
        const isGetStarted = !timerStatus && isTyping && isEditable

        if (isGetStarted) {
            setTimerStatus(true)
            id.current = window.setInterval(() => {
                setTime((time) => time - 1)
            }, 1000)
        }
        //timer stop
        if (time === 0 && timerStatus) {
            setEditable(false)
            window.clearInterval(id.current)
            setTimerStatus(false)
        }
        // reset timer
        if (isShouldReset) {
            setTime(timeLimit)
            window.clearInterval(id.current)
            setTimerStatus(false)
            setShouldReset(false)
        }
        // тут была зависсимость от ввденного текста
    }, [
        time,
        timerStatus,
        setTime,
        isTyping,
        isEditable,
        isShouldReset,
        setEditable,
        timeLimit,
        setShouldReset,
    ])

    return <div className={styles.card}>Time left: {time}</div>
}

export default TimerCard
