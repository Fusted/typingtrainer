import React, { FC } from "react";
import letters from '../../store/letters'
import {observer} from 'mobx-react-lite'
import styles from '../CardList/cardList.module.scss'


export interface IButton {
  text?: string;
}
const ButtonStart: FC<IButton> = observer(() => {


  const onCorrectInput = (): void => {
    letters.incrementCurrentId()
  }

  const onIncorrectInput = (): void => {
    letters.incrementMistakesCounter()
  }

  const keyListener = () : void => {
    document.addEventListener('keyup', (e) => {
      if (e.key === letters.currentLetter) {
        onCorrectInput()
      } else if (e.key.length === 1){
        onIncorrectInput()
      } 
    })
  }

  const onStart = (e:object): void => {
    if (!letters.status) {
      letters.toggleStatus()
      letters.setCurrentLetterId(0)
      letters.setCurrentLetter(letters.text[0])
      keyListener()
    }
    
  } 

  const text = !letters.status ? 'start' : 'reset' 
  
  return (
	<div className={styles.button} onClick={onStart}>
		{text}
	</div>
  
  )     
})

export default ButtonStart;
