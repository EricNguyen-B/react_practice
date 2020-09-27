import React from 'react';
import UserGreeting from './UserGreeting/UserGreeting';
import GuestGreeting from './GuestGreeting/GuestGreeting';

Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default Greeting;