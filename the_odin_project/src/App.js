import React, {Component} from 'react';
import './App.css';
import UserGreeting from './UserGreeting/UserGreeting';
import GuestGreeting from './GuestGreeting/GuestGreeting';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  render(){
    return (
      <div className="App">
        < UserGreeting />
        < GuestGreeting />
      </div>
    );
  }
}

export default App;
