import React, {createRef, FC} from "react";
import StatsList from "../cards/StatsList/StatsList";
import TypingArea from "../TypingArea/TypingArea";
import ButtonsList from "../cards/ButtonsList/ButtonsList";
import styles from './TypingContainer.module.scss'

interface ITypingContainer {
    changeMainText(): void
}

const TypingContainer: FC<ITypingContainer> = ({changeMainText}) => {
    const hiddenAreaRef = createRef<HTMLTextAreaElement>()

    return (
        <div className={styles.container}>
            <StatsList />
            <TypingArea
                changeMainText={changeMainText}
                ref={hiddenAreaRef}
            />
            <ButtonsList
                hiddenAreaRef={hiddenAreaRef}
                changeMainText={changeMainText}
            />
        </div>
    )
}

export default TypingContainer