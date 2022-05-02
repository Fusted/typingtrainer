import React, { ForwardedRef, forwardRef} from "react"
import { observer } from "mobx-react-lite"
import ShowingText from "../ShowingText/ShowingText"
import InputArea from "../InputArea/InputArea"
import letters from "../../store/letters"
import styles from "./typingArea.module.scss"

const TypingArea = ({}, ref: ForwardedRef<HTMLTextAreaElement>) => {

    return (
        <div className={styles.wrapper}>
            <ShowingText text={letters.text} />
            <InputArea ref={ref} />
        </div>
    )
}

export default observer(forwardRef(TypingArea))
