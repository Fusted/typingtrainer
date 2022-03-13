import React from 'react';
import './letter.scss'
import {observer} from 'mobx-react-lite'
import letters from '../../store/letters'


interface ILetter {
    letter: string
    key?: string
    className: string
    index: number
}

const Letter = observer(({letter, key, className, index} : ILetter) => {

    const {currentLetterId} = letters
    
    if (index === currentLetterId) {
        className = 'letter-active'
        letters.currrentLetter = letter
    } else if (index < currentLetterId) {
        className = 'letter-done'
    }


    return (
        <span className={className} id={index.toString()}> 
            {letter}
        </span>
    )
})

export default Letter;