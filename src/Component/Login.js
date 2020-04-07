import React, {Component} from 'react';
import {Alert, Button, Col, Form} from "react-bootstrap";
import axios from "axios";
import Cookie from "js-cookie";
import login from "./Login.module.css"


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
                Cookie.set("token", res.data.access_token);

                this.setState({
                    message: "you logged in successfully",
                    error: ''
                })
            })
            .catch(error => {
                this.setState({
                    error: error.toString(),
                    message: ''
                })
            })
    }

    render() {
        let successAlert = this.state.message !== '' ? <Alert variant="success">
            {this.state.message} </Alert> : ''
        let errorAlert = this.state.error !== '' ? <Alert variant="danger">
            {this.state.error} </Alert> : ''
        return (
            <div>
                        {successAlert}

                        {errorAlert}

                        <Form onSubmit={this.submitHandler}>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                              onChange={this.emailChangeHandler}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter email"
                                              onChange={this.passwordChangeHandler}/>
                            </Form.Group>
                            <Button id={login.primary} type="submit" onClick={this.clickHandler}>Log in</Button>

                        </Form>

            </div>

        );
    }
}

export default Login;
