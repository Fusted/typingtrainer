import cn from "classnames"
import React, { ForwardedRef, forwardRef } from "react"
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
        //fixing spaces
        if (
            contentHtml.innerHTML.slice(-nonBreakableSpace.length) ==
            nonBreakableSpace
        ) {
            newHTML = `${newHTML.slice(0, newHTML.length - 1)} `
        }
        //inc mistakes
        const lastSymbolId = newHTML.length - 1
        if (newHTML[lastSymbolId] != letters.text[lastSymbolId] && (newHTML.length > letters.enteredText.length)) {
            letters.incrementMistakesCounter()
        }

        letters.setEnteredText(newHTML)
        const sel = window.getSelection() as Selection
        letters.setCurrentLetterId(sel.focusOffset)
    }

    return (
        <div className={styles.wrapper}>
            <ShowingText />
            <ContentEditable
                className={cn(styles.area, styles.invisible)}
                onChange={onChange}
                html={letters.enteredText}
                // disabled={!letters.status}
                disabled={false}
                innerRef={ref as React.RefObject<HTMLElement>}
            />
        </div>
    )
}

export default observer(forwardRef(TypingArea))
