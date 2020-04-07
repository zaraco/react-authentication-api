import React, {Component} from 'react';
import {Form, Button, Alert} from "react-bootstrap";
import axios from "axios";


class Register extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            passconfirm: '',
            message: '',
            error: ''
        }
    }

    nameChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    emailChangeHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    passconfirmChangeHandler = (e) => {
        this.setState({
            passconfirm: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()

    }

    clickHandler = () => {

        const config = {
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }
        }

        const register = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.passconfirm,
        }
        console.log(register)
        axios.post(`http://127.0.0.1:8000/api/auth/signup`, register, config)
            .then(res => {
                this.setState({
                    message: "you registered as successfully",
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
        let successRegister = this.state.message !== '' ? <Alert variant="success"> {this.state.message}</Alert> : ''
        let errorRegister = this.state.error !== '' ? <Alert variant="danger">{this.state.error} </Alert> : ''

        return (
            <div>
                {successRegister}
                {errorRegister}
                <Form onSubmit={this.submitHandler}>
                    <Form.Group onChange={this.nameChangeHandler}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name"/>
                    </Form.Group>
                    <Form.Group onChange={this.emailChangeHandler}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group onChange={this.passwordChangeHandler}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>

                    <Form.Group onChange={this.passconfirmChangeHandler}>
                        <Form.Label>Passconfirm</Form.Label>
                        <Form.Control type="password" placeholder="Passconfirm"/>
                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={this.clickHandler}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Register;
