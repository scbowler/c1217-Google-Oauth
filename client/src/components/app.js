import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import User from './user';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
            <User/>
        </div>
    </div>
);

export default App;
