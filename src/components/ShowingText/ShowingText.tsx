import React, {Fragment, FC} from "react";
import {observer} from 'mobx-react-lite';
import letters from "../../store/letters";
import Letter from "../Letter/Letter";
import styles from "../TypingArea/typingArea.module.scss"

interface IShowingText {
    focusStatus: boolean
}

const  ShowingText : FC<IShowingText> = ({focusStatus}) => {
    const textArray = letters.text.split('').map((letter, index) => {
        return (
            <Fragment key={index.toString() + Math.random()}>
                <Letter
                    focusStatus={focusStatus}
                    index={index}
                    letter={letter}
                />
            </Fragment>
        )
    });

    return (
        <div className={styles.area}>{textArray}</div>
    )
}

export default observer(ShowingText)