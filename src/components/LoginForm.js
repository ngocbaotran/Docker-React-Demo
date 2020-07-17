import React, { Component } from "react";

class LoginForm extends Component {
    // state = {
    //     username: '',
    //     password: ''
    // };

    // Or
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    };

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label>User name</label>
                        <input onChange={ this.handleUsername } type="text" placeholder="username" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input onChange={ this.handlePassword } type="password" placeholder="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;