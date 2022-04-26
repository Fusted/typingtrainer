import { useState, useEffect } from "react"

export function useInterval(time: number, delay: number) {
    // запомнить переданное время в секундах
    const [timeLeft, setTimeLeft] = useState(time)

    useEffect(() => {
        if (delay === null) return
        const tick = () => {
            setTimeLeft(timeLeft - 1)
        }
        const timerId = setInterval(tick, delay)
        if (timeLeft <= 0) clearInterval(timerId)
        return () => clearInterval(timerId)
    }, [delay, timeLeft])

    // передать управление интервалом вовне
    return [timeLeft, setTimeLeft]
}
