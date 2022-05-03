import React, {useState, useEffect, FC, SetStateAction, Dispatch} from "react"
import styles from "../cards.module.scss"
import letters from "../../../store/letters"
import { observer } from "mobx-react-lite"

interface ITimerCard {
    time: number,
    setTime: Dispatch<SetStateAction<number>>
}

const TimerCard: FC<ITimerCard> = ({ time, setTime }) => {
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
            letters.setEditableFalse()
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
