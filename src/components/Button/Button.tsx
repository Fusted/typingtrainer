import React from 'react';

const Button = () => {

    const onSpace = (e: object) => {
        document.addEventListener('keypress', () => {
            console.log(e)
        })
    }

    return (
        <button onClick={onSpace}>
            Click me
        </button>
    );
};

export default Button;