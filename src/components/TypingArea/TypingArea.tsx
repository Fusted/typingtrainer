import React, { FC, Fragment } from "react";
import Letter from "../Letter/Letter";
import "./typingArea.scss";
import { observer } from "mobx-react-lite";
import letters from '../../store/letters'


const TypingArea: FC = observer(() => {

    const textArray = letters.text.map((letter, index) => {

    return (
        <Fragment key={index.toString() + Math.random()} >
            <Letter 
            index = {index}
            letter={letter} 
            className={'letter-default'}
            />
        </Fragment>
    )
  });
  
  return (
        <div className="typingArea">
            {textArray}
        </div>
  )
})

export default TypingArea;