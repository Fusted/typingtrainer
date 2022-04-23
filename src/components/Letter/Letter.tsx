import React from 'react';
import {observer} from 'mobx-react-lite'
import letters from '../../store/letters'
import styles from './letter.module.scss'

interface ILetter {
    letter: string
    key?: string
    index: number
}

const Letter = observer(({letter, key, index}: ILetter) => {
    let className = styles.letterDefault
    const {text, enteredText} = letters

    if (index <= enteredText.length) {
        if (index === letters.currentLetterId) {
            className = styles.letterActive
            letters.setCurrentLetter(letter)
        } else {
            if (text[index] == enteredText[index]) {
                className = styles.letterDone
            } else {
                className = styles.letterFalse
            }

        }
    }


    return (
        <span className={className} id={index.toString()}> 
            {letter}
        </span>
    )
})

export default Letter;