import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28, mood: "happy"},
      { name: 'Manu', age: 29, mood: "sad"},
      { name: 'Stephanie', age: 26, mood: "excited"}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!')
    // DON'T DO THIS, WILL NOT WORK: this.state.person[0].name = 'Maximilian'
    this.setState( {
      persons: [
        { name: 'Maximilian', age: 28, mood: "happy"},
        { name: 'Manu', age: 29, mood: "happy"},
        { name: 'Stephanie', age: 27, mood: "excited"}
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} mood={this.state.persons[0].mood} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} mood={this.state.persons[1].mood}>Manu's hobbies are crying to sad rom com movies :C</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} mood={this.state.persons[2].mood}/>
      </div>
    );
  }
}

export default App;
