import React, { ForwardedRef, forwardRef, useEffect} from "react"
import { observer } from "mobx-react-lite"
import ShowingText from "../ShowingText/ShowingText"
import InputArea from "../InputArea/InputArea"
import letters from "../../store/letters"
import styles from "./typingArea.module.scss"

interface ITypingArea  {
    changeMainText(): void
}

const TypingArea = ({changeMainText}:ITypingArea, ref: ForwardedRef<HTMLTextAreaElement>) => {

    useEffect(() => {
        if (letters.enteredText.length === letters.text.length) {
            changeMainText()
        }
    }, [letters.enteredText])

    return (
        <div className={styles.wrapper}>
            <ShowingText text={letters.text} />
            <InputArea ref={ref} />
        </div>
    )
}

export default observer(forwardRef(TypingArea))
