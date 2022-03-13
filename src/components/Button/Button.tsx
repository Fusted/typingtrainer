import React, { FC } from "react";
import letters from '../../store/letters'
import {observer} from 'mobx-react-lite'


interface IButton {
  text?: string;
}


const Button: FC<IButton> = observer(({ text }) => {

  const onCorrectInput = (): void => {
    letters.increment()
  }

  const onStart = (e:object): void => {
    document.addEventListener('keydown', (e) => {
      if (e.key === letters.currrentLetter) {
        onCorrectInput()
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
