import React, {useState, useEffect, FC, SetStateAction, Dispatch} from "react"
import styles from "../cards.module.scss"
import letters from "../../../store/letters"
import { observer } from "mobx-react-lite"

interface ITimerCard {
    enteredText: string
    time: number,
    setTime: Dispatch<SetStateAction<number>>
}

const TimerCard: FC<ITimerCard> = ({ enteredText, time, setTime }) => {
    const [timerStatus, setTimerStatus] = useState<boolean>(false)
    const id = React.useRef<number | undefined>()


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
            // setTime(letters.time)
            letters.setEditableFalse()
            window.clearInterval(id.current)
            setTimerStatus(false)
        }

        if (!enteredText) {
            setTime(letters.time)
            window.clearInterval(id.current)
            setTimerStatus(false)
        }

    }, [time, timerStatus, enteredText, setTime])

    return <div className={styles.card}>Time left: {time}</div>
}

export default observer(TimerCard)
