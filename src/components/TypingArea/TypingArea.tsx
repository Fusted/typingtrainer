import cn from "classnames"
import React, {ForwardedRef, forwardRef, useEffect} from "react"
import { observer } from "mobx-react-lite"
import ContentEditable, { ContentEditableEvent } from "react-contenteditable"
import letters from "../../store/letters"
import styles from "./typingArea.module.scss"
import ShowingText from "../ShowingText/ShowingText"

const TypingArea = (_ = {}, ref: ForwardedRef<HTMLElement> | null) => {
    const onChange = (e: ContentEditableEvent): void => {
        const contentHtml: HTMLElement = e.currentTarget
        const nonBreakableSpace = "&nbsp;"
        let newHTML = contentHtml.innerText

        if (
            contentHtml.innerHTML.slice(-nonBreakableSpace.length) ==
            nonBreakableSpace
        ) {
            newHTML = `${newHTML.slice(0, newHTML.length - 1)} `
        }
        letters.setEnteredText(newHTML)
        const sel = window.getSelection() as Selection
        letters.setCurrentLetterId(sel.focusOffset)
        if (newHTML[newHTML.length - 1] != letters.text[newHTML.length - 1]) {
            letters.incrementMistakesCounter()
        }
    }
    useEffect(() =>{
        console.log(letters.enteredText)
    })
    return (
        <div className={styles.wrapper}>
            <ShowingText />
            <ContentEditable
                className={cn(styles.area, styles.invisible)}
                onChange={onChange}
                html={letters.enteredText}
                // disabled={!letters.status}
                disabled={false}
                innerRef={ref}
            />
        </div>
    )
}


export default observer(forwardRef(TypingArea))
