import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {

    async getUser(){
        const user = await axios.get('/api/current-user');

        console.log('Current User:', user.data);
    }

    async logOut(){
        const result = await axios.get('/api/logout');

        console.log('Logged out:', result.data);
    }

    async isUser(){
        const info = await axios.get('/api/is-user');

        console.log('isUser:', info.data);
    }

    render(){
        return (
            <div>
                <h1>User Stuff</h1>
                <a href="/auth/google">Log in with the Google</a>
                <hr/>
                <button onClick={this.getUser}>Get User Info</button>
                <hr/>
                <button onClick={this.logOut}>Log Out</button>
                <hr />
                <button onClick={this.isUser}>Am I a User</button>
            </div>
        )
    }
}

export default User;
