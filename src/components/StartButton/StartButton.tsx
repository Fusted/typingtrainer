import React, {FC} from "react";
import letters from '../../store/letters'
import {observer} from 'mobx-react-lite'
import styles from '../CardList/cardList.module.scss'


export interface IButton {
    hiddenAreaRef:  React.RefObject<HTMLElement>
    changeMainText: () => void
}

const ButtonStart: FC<IButton> = observer(({hiddenAreaRef, changeMainText}) => {
    const resetState = ():void => {
        letters.toggleStatus()
        letters.setCurrentLetterId(0)
        letters.setCurrentLetter(letters.text[0])
        letters.setEnteredText('')
    }

    // const onCorrectInput = (): void => {
    //   letters.incrementCurrentId()
    // }

    const onIncorrectInput = (): void => {
        letters.incrementMistakesCounter()
    }

    const keyListener = () : void => {
        document.addEventListener('selectionchange', () => {
            const sel = window.getSelection() as Selection
            letters.setCurrentLetterId(sel.focusOffset)
        })
    }

    const onStart = (e:React.MouseEvent): void => {
        if (!letters.status && hiddenAreaRef) {
            hiddenAreaRef?.current?.focus();
            keyListener()
        } else {
            changeMainText()
        }
        resetState()
    }

    const text = !letters.status ? 'Start' : 'Reset'

    return (
        <div className={styles.button} onClick={onStart}>
            {text}
        </div>

    )
})

export default ButtonStart;
