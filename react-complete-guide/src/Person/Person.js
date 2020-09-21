import React from 'react';

import './Person.css';

const person = ( props ) => {
    return (
    <div className="Person">
        <p onClick={props.click}>I'm {props.name}, I am {props.age} years old, and I am feeling {props.mood}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
)
};

export default person;