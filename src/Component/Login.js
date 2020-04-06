import React, {Component} from 'react';
import {Alert} from "react-bootstrap";
import axios from "axios";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            message: '',
            error: ''
        }


    }

    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    emailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    clickHandler = () => {

        const config = {
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }
        }

        const login = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(login)
        axios.post(`http://127.0.0.1:8000/api/auth/login`, login, config)
            .then(res => {
                this.setState({
                    message: "you logged in successfully",
                    error: ''
                })
            })
            .catch(error => {
                this.setState({
                    error: "you did not logged in",
                    message: ''
                })
            })
    }

    render() {
        let successAlert = this.state.message !== '' ? <Alert  variant="success">
            {this.state.message} </Alert>: ''
        let errorAlert = this.state.error !== '' ? <Alert  variant="danger">
            {this.state.error} </Alert> : ''
        return (
            <div>
                {successAlert}

                {errorAlert}

                <form onSubmit={this.submitHandler}>
                    <input type="text" onChange={this.emailChangeHandler} placeholder="Enter the email address"/>
                    <br/>
                    <input type="text" onChange={this.passwordChangeHandler} placeholder="Enter the password"/>
                    <br/>
                    <button type="submit" onClick={this.clickHandler}>Log in</button>
                </form>
            </div>

        );
    }
}

export default Login;
