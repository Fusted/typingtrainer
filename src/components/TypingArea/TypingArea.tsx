import React, { FC, Fragment } from "react";
import Letter from "../Letter/Letter";
import "./typingArea.scss";

interface ITypingProps {
  text: string[];
}

const TypingArea: FC<ITypingProps> = ({ text }) => {

    
    const textArray = text.map((letter, index) => {

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
      <>
        <div style={{ color: "#fff" }}>
            {textArray}
        </div>
      </>
  )
};

export default TypingArea;
