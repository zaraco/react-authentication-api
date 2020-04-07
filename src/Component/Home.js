import React, {Component} from "react";
import {Alert} from "react-bootstrap";
import {AlertHeading} from "react-bootstrap/Alert";


class Home extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <>

                    <Alert variant="info">
                        <Alert.Heading>Hey, Welcome to my site</Alert.Heading>
                    </Alert>


            </>


        );
    }
}

export default Home;