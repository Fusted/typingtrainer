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
        if (
            newHTML[lastSymbolId] != letters.text[lastSymbolId] &&
            newHTML.length > letters.enteredText.length
        ) {
            letters.incrementMistakesCounter()
        }

        if (
            letters.enteredText.length == 0 &&
            contentHtml.innerHTML.length === 1 &&
            !letters.status
        ) {
            letters.toggleStatus()
        }

        letters.setEnteredText(newHTML)
        const selection = window.getSelection() as Selection
        letters.setCurrentLetterId(selection.focusOffset)
    }

    // const onFocus = () => {
    //     if (!letters.status) {
    //
    //     }
    // }

    return (
        <div className={styles.wrapper}>
            <ShowingText />
            <ContentEditable
                // onFocus={onFocus}
                className={cn(styles.area, styles.invisible)}
                onChange={onChange}
                html={letters.enteredText}
                // disabled={!letters.status}
                disabled={!letters.editable}
                innerRef={ref as React.RefObject<HTMLElement>}
            />
        </div>
    )
}

export default observer(forwardRef(TypingArea))
