import React from 'react';
import './letter.scss'
import {observer} from 'mobx-react-lite'
import currentLetter from '../../store/currenLetter'


interface ILetter {
    letter: string
    key?: string
    className: string
    index: number
}

const Letter = observer(({letter, key, className, index} : ILetter) => {
    const {currentLetterId} = currentLetter
    if (index === currentLetterId) {
        className = 'letter-active'
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