import React, { FC, Fragment, useState } from "react";
import Letter from "../Letter/Letter";
import "./typingArea.scss";

interface ITypingProps {
  text: string[];
}

const TypingArea: FC<ITypingProps> = ({ text }) => {

    const [position, setPosition] = useState(0)
    let style: string

    const onStart = (e:object) => {
        console.log('+')
        setPosition(position + 1)
    }

    const textArray = text.map((letter, index) => {
        console.log('f')
        if (index === position) {
            style = 'letter-active'
        } else {
            style = 'letter-default'
    }
    return (
        <Fragment key={index.toString() + Math.random()} >
            <Letter 
            id = {index}
            letter={letter} 
            className={style}
            />
        </Fragment>
    )
  });

  return (
      <>
        <div style={{ color: "#fff" }}>
            {textArray}
            <button onClick={onStart}>
                Click me
            </button>
        </div>;
      </>
  )
};

export default TypingArea;
