import React, {Component} from 'react';
import axios from "axios";
import Cookie from "js-cookie"
import {Alert} from "react-bootstrap";


class User extends Component {
    constructor() {
        super();
        this.state = {
            user: '',
            message: '',
            error: ''
        }

        const token = Cookie.get('token')

        const config = {
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: `Bearer ${token}`
            }

        }


        axios.get(`http://127.0.0.1:8000/api/auth/user`, config)
            .then(response => {
                this.setState({
                    user: response.data.name,
                    message: "you login as successfully"
                })

            })
            .catch(error => {
                this.setState({
                    error: error.toString()
                })
            })

    }


    render() {
        let successAlert = this.state.message !== '' ? <Alert variant="success">
            {this.state.message} , hello {this.state.user}</Alert> : ''
        let errorAlert = this.state.error !== '' ? <Alert variant="danger">
            {this.state.error} </Alert> : ''

        return (
            <div>
                {successAlert}
                {errorAlert}
            </div>
        );
    }
}

export default User;
