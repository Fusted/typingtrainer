import React, { FC } from "react";
import letters from '../../store/letters'
import {observer} from 'mobx-react-lite'
import {IButton} from '../../interfaces/interfaces'


const ButtonStart: FC<IButton> = ({ text }) => {


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
    letters.setCurrentLetterId(0)
    letters.setCurrentLetter(letters.text[0])
    keyListener()
  } 

  
  return (
	<div className='button card' onClick={onStart}>
		{text}
	</div>
  
  )     
}

export default ButtonStart;
