import React from 'react';
import {observer} from 'mobx-react-lite'
import letters from '../../store/letters'
import styles from './letter.module.scss'

interface ILetter {
    letter: string
    key?: string
    index: number
}

const Letter = observer(({letter, key, index} : ILetter) => {
    let className = 'letter-defalet' 
    
    const {currentLetterId} = letters
    
    if (index === currentLetterId) {
        className = styles.letterActive
        letters.setCurrentLetter(letter)
    } else if (index < currentLetterId) {
        className = styles.letterDone
    }


    return (
        <span className={className} id={index.toString()}> 
            {letter}
        </span>
    )
})

export default Letter;