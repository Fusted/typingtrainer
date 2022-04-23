import React, {Fragment} from "react";
import {observer} from 'mobx-react-lite';
import letters from "../../store/letters";
import Letter from "../Letter/Letter";
import styles from "../TypingArea/typingArea.module.scss"

const  ShowingText = observer(() => {
    const textArray = letters.text.split('').map((letter, index) => {
        return (
            <Fragment key={index.toString() + Math.random()}>
                <Letter
                    index={index}
                    letter={letter}
                />
            </Fragment>
        )
    });

    return (
        <div className={styles.area}>{textArray}</div>
    )
})

export default ShowingText