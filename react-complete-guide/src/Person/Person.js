import React from 'react';

const person = (props) => {
    return (
    <div>
        <p>I'm {props.name}, I am {props.age} years old, and I am feeling {props.mood}</p>
        <p>{props.children}</p>
    </div>
)
};

export default person;