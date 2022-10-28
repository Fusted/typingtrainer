import styles from "./select.module.scss"

import React from "react"
import { Option } from "types/baseTypes"

interface Props {
    options: Option[]
    value?: string | number
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void
}

const Select: React.FC<Props> = ({ options, value, onChange }) => {
    const optionsView = options.map(({ value, label }) => {
        return (
            <option key={value} value={value}>
                {label}
            </option>
        )
    })

    return (
        <select className={styles.select} value={value} onChange={onChange}>
            {optionsView}
        </select>
    )
}

export default Select
