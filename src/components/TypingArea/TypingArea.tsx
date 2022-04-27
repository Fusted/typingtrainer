import cn from "classnames"
import React, { ForwardedRef, forwardRef, useState } from "react"
import { observer } from "mobx-react-lite"
import ContentEditable, { ContentEditableEvent } from "react-contenteditable"
import letters from "../../store/letters"
import styles from "./typingArea.module.scss"
import ShowingText from "../ShowingText/ShowingText"

interface TypingAreaProps {
    enteredText: string
    setNewEnteredText(newEnteredText: string): void
    changeMainText(): void
    selection: Selection | null
}

const TypingArea = (
    { enteredText, setNewEnteredText, changeMainText, selection }: TypingAreaProps,
    ref: ForwardedRef<HTMLElement>
) => {
    const [focusStatus, setFocusStatus] = useState(false)

    const onChange = (e: ContentEditableEvent): void => {
        const contentHtml: HTMLElement = e.currentTarget
        const newHTML = contentHtml.innerText

        //fixing spaces
        // const nonBreakableSpace = "&nbsp;"
        // if (
        //     contentHtml.innerHTML.slice(-nonBreakableSpace.length) ==
        //     nonBreakableSpace
        // ) {
        //     newHTML = `${newHTML.slice(0, newHTML.length - 1)} `
        // }
        //inc mistakes
        const lastSymbolId = newHTML.length - 1
        if (
            newHTML[lastSymbolId] != letters.text[lastSymbolId] &&
            newHTML.length > enteredText.length
        ) {
            letters.incrementMistakesCounter()
        }

        if (
            enteredText.length == 0 &&
            contentHtml.innerHTML.length === 1 &&
            !letters.status
        ) {
            letters.toggleStatus()
        }

        setNewEnteredText(newHTML)

        letters.setCurrentLetterId(selection?.focusOffset as any)
    }

    const onFocus = (): void => {
        setFocusStatus(true)
    }

    const onBlur = (): void => {
        setFocusStatus(false)
    }

    return (
        <div className={styles.wrapper}>
            <ShowingText
                changeMainText={changeMainText}
                enteredText={enteredText}
                focusStatus={focusStatus} />
            <ContentEditable
                onFocus={onFocus}
                onBlur={onBlur}
                className={cn(styles.area, styles.invisible)}
                onChange={onChange}
                html={enteredText}
                disabled={!letters.editable}
                innerRef={ref as React.RefObject<HTMLElement>}
            />
        </div>
    )
}

export default observer(forwardRef(TypingArea))
