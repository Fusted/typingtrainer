import React, { FC } from "react";
import letters from '../../store/letters'
import {observer} from 'mobx-react-lite'


interface IButton {
  text?: string;
}


const Button: FC<IButton> = observer(({ text }) => {

  const onCorrectInput = (): void => {
    letters.incrementCurrentId()
  }

  const onIncorrectInput = (): void => {
    letters.incrementMistakesCounter()
  }

  const onStart = (e:object): void => {
    document.addEventListener('keydown', (e) => {
      if (e.key === letters.currrentLetter) {
        onCorrectInput()
      } else if (e.key.length === 1){
        onIncorrectInput()
      } 
    })
  } 

  
  
  return (
	<button onClick={onStart}>
		{letters.currentLetterId}
	</button>
  
  )     
})

export default Button;
