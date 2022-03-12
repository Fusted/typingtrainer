import React, {FC} from 'react';
import Letter from '../Letter/Letter';
import './typingArea.scss'


interface ITypingProps {
    text: string[]
}

const TypingArea: FC<ITypingProps> = ({text}) => {

    const textArray: string[] = text.map({letter => {
        
    })

    return (
        <div style={{color: '#fff'}}>
            <Letter letter = {textArray}/>
        </div>
    );
};

export default TypingArea;