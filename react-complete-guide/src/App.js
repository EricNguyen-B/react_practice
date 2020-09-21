import React from 'react';
import './App.css';
import Output from './Output/Output';

// UserInput component
const App = () => {
  return(
    <div className="App">
      <h1>Form</h1>
      <input type="text"></input>
      <Output username="Sam" />
      <Output username="Dan" />
      <Output username="Kevin" />
    </div>
  );
}

export default App;




