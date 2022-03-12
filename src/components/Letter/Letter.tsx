import React from 'react';
import './letter.scss'

type letter = string 
type id = string
type className = string


interface ILetter {
    letter: letter
    key?: id
    className: className
    id: any
}

const Letter = ({letter, key, className, id} : ILetter) => {
    return (
        <span className={className} id={id}> 
            {letter}
        </span>
    );
};

export default Letter;