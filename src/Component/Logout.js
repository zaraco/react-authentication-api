import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Button} from "react-bootstrap";

class Logout extends Component {
    constructor() {
        super();
        this.state = {
            navigate: false
        }
    }

    logout = () => {
        localStorage.clear("token");
        this.setState(
            {navigate: true}
            )
    }

    render() {
        const {navigate} = this.state

        if(navigate){
            return (
                <Redirect to="/home" push={true}/>
            )
        } else {
            return (

                <Button variant="danger" onClick={this.logout}>log out</Button>
            );
        }
    }
}

export default Logout;
