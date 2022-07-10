import React, {ForwardedRef, forwardRef, useEffect, useState} from "react"
import { observer } from "mobx-react-lite"
import ShowingText from "../ShowingText/ShowingText"
import InputArea from "../InputArea/InputArea"
import letters from "../../store/letters"
import styles from "./typingArea.module.scss"


interface ITypingArea  {
    changeMainText(): void
}

const TypingArea = ({changeMainText}:ITypingArea, ref: ForwardedRef<HTMLTextAreaElement>) => {

    const [isImmutable, setImmutable] = useState(false)

    useEffect(() => {
        if (letters.enteredText.length === letters.text.length) {
            changeMainText()
        }
        const isIm = !!(!letters.editable && letters.enteredText)
        console.log(isIm);
        setImmutable(isIm)
    }, [letters.enteredText, letters.editable])

    return (
        <div className={styles.wrapper}>
            <ShowingText
                text={letters.text}
                isImmutable={isImmutable}
            />
            <InputArea ref={ref} />
        </div>
    )
}

export default observer(forwardRef(TypingArea))
