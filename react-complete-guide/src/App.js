import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// Function that manages state
const app = props => {
    const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Max', age: 28, mood: "happy"},
        { name: 'Manu', age: 29, mood: "sad"},
        { name: 'Stephanie', age: 26, mood: "excited"}
      ],
      otherState: 'some other value'
    });
  
    const [otherState, setOtherState] = useState('some other value');

    console.log(personsState, otherState);
//
// Function that can have other functions do something
    const switchNameHandler = (newName) => {
      // console.log('Was clicked!')
      // DON'T DO THIS, WILL NOT WORK: this.state.person[0].name = 'Maximilian'
      setPersonsState( {
        persons: [
          { name: newName, age: 28, mood: "thicc"},
          { name: 'Manu', age: 29, mood: "happy"},
          { name: 'Stephanie', age: 27, mood: "litty"}
        ],
        otherState: personsState.otherState
      } )
    }

    const nameChangedHandler = (event) => {
      setPersonsState( {
        persons: [
          { name: 'Max', age: 28, mood: "thicc"},
          { name: event.target.value, age: 29, mood: "happy"},
          { name: 'Stephanie', age: 27, mood: "litty"}
        ],
        otherState: personsState.otherState
      } )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
        <Person 
          name={personsState.persons[0].name}
          age={personsState.persons[0].age} 
          mood={personsState.persons[0].mood} 
        />
        <Person 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age} 
          mood={personsState.persons[1].mood}
          click={switchNameHandler.bind(this, 'Max!!')}
          changed={nameChangedHandler} > Manu's hobbies are crying to sad rom com movies :C 
        </Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age} 
          mood={personsState.persons[2].mood} 
        />
      </div>
    );
}

export default app;

