import styles from "../cards.module.scss"

import React, { ChangeEvent } from "react"
import { observer } from "mobx-react-lite"
import settings from "store/settings"

const ModesButton = () => {
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        settings.setMode(e.target.value)
        localStorage.setItem("typing-mode", e.target.value)
    }

    return (
        <select
            className={styles.button}
            value={settings.mode}
            onChange={onChange}
        >
            <option value="words">Words</option>
            <option value="texts">Texts</option>
        </select>
    )
}

export default observer(ModesButton)
