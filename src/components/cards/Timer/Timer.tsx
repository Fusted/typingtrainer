import React, { useState, useEffect } from "react"
import { timeLimitAtom } from "atoms/config"
import { useAtom, useAction } from "@reatom/npm-react"
import {
    isEditableAtom,
    isShouldResetAtom,
    isTypingAtom,
    setEditableAction,
    setShouldResetAction,
} from "atoms/state"
import Card from "packages/Card"

interface Props {
    time: number
    setTime: React.Dispatch<React.SetStateAction<number>>
}

const Timer: React.FC<Props> = ({ time, setTime }) => {
    const timer = React.useRef<number | undefined>()
    const [isActive, setTimerActive] = useState<boolean>(false)
    const [timeLimit] = useAtom(timeLimitAtom)
    const [isShouldReset] = useAtom(isShouldResetAtom)
    const [isTyping] = useAtom(isTypingAtom)
    const [isEditable] = useAtom(isEditableAtom)
    const setEditable = useAction(setEditableAction)
    const setShouldReset = useAction(setShouldResetAction)

    useEffect(() => {
        const isStarted = !isActive && isTyping && isEditable

        // running timer
        if (isStarted) {
            setTimerActive(true)
            timer.current = window.setInterval(() => {
                setTime((time) => time - 1)
            }, 1000)
        }

        //stopping timer
        if (time === 0 && isActive) {
            setEditable(false)
            setTimerActive(false)
            window.clearInterval(timer.current)
        }

        // resetting timer
        if (isShouldReset) {
            setTime(timeLimit)
            setTimerActive(false)
            setShouldReset(false)
            window.clearInterval(timer.current)
        }
    }, [
        time,
        isActive,
        setTime,
        isTyping,
        isEditable,
        isShouldReset,
        setEditable,
        timeLimit,
        setShouldReset,
    ])

    return <Card text="Time left" value={time} />
}

export default Timer
