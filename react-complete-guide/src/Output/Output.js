import React from 'react';

const output = (props) => {
    return (
        <div className="Output">
            <p>this is {props.username}</p>
            <p>{props.username} is cool!</p>
        </div>
    );
}

export default output; 