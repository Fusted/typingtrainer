import styles from "../TypingArea/typingArea.module.scss"

import React, { FC, memo, PropsWithChildren } from "react"
import { useAtom } from "@reatom/npm-react"
import cn from 'classnames'
import { isEditableAtom } from "atoms/state"
import Letter from "components/Letter/Letter"

interface Props {
    visibleText: string
}

const ShowingText: FC<Props> = ({ visibleText }) => {
    const [isEditable] = useAtom(isEditableAtom)

    return (
        <div
            className={cn(
                styles.area,
                isEditable ? undefined : styles.immutable
            )}
        >
            {formatText(visibleText)}
        </div>
    )
}

const compareProps = (
    prev: Readonly<PropsWithChildren<Props>>,
    next: Readonly<PropsWithChildren<Props>>
) => {
    return prev.visibleText === next.visibleText
}
function formatText(text: string) {
    return text
        .split("")
        .map((letter, index) => (
            <Letter letter={letter} index={index} key={index + letter} />
        ))
}

export default memo(ShowingText, compareProps)


