import React from 'react';

type ltr = string 

interface ILetter {
    letter: ltr;
}

const Letter = ({letter} : ILetter) => {
    return (
        <div>
            {letter}
        </div>
    );
};

export default Letter;