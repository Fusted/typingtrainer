import React, { FC } from "react";
import currentLetter from '../../store/currenLetter'
import {observer} from 'mobx-react-lite'


interface IButton {
  text?: string;
}

const Button: FC<IButton> = observer(({ text }) => {

  const onInput = (e:object): void => {
    
    currentLetter.increment()
  } 
  
  return (
	<button onClick={onInput}>
		{currentLetter.currentLetterId}
	</button>
  
  )     
})

export default Button;
