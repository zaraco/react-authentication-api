import React, {Component} from 'react';
import {Form,Button} from "react-bootstrap";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }



    render() {
        return(

                <Form>
                    <input type="text"  placeholder="Enter the email address"/>
                    <br/>
                    <input type="text"  placeholder="Enter the password"/>
                    <br/>
                    <Button type="submit">Log in</Button>
                </Form>

        );
    }
}
export default Login;
