import style from "../cards.module.scss"

import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import letters from "store/letters"

export interface Props {
    focusArea: VoidFunction
}

const ResetButton: FC<Props> = ({ focusArea }) => {
    const reset = (): void => {
        letters.dispose()
        focusArea()
    }

    const onKeyReset = (event: KeyboardEvent) => {
        if (event.code === "Enter") {
            reset()
        }
    }
    useEffect(() => {
        focusArea()
        document.addEventListener("keyup", onKeyReset)
        return function cleanup() {
            document.removeEventListener("keyup", onKeyReset)
        }
    }, [focusArea, onKeyReset])

    return (
        <div className={style.button} onClick={reset} tabIndex={1}>
            Reset
        </div>
    )
}

export default observer(ResetButton)
