import React, {Component} from "react";
import {Alert, Container,Row, Col, Card} from "react-bootstrap";


class Home extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div>

                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <br/>
                            <Alert variant="info">
                                <Alert.Heading> Hey, Welcome to my site </Alert.Heading>
                            </Alert>
                            <br/>
                            <Card style={{ width: '20rem', height: '20rem' }}>
                                <Card.Img variant="top" src="download.jpeg" />
                                <Card.Body>
                                    <Card.Text>
                                        we want to create the website by react and react-bootstrap..
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br/>
                        </Col>
                        </Row>
                        </Container>
            </div>

    );
    }
        }


    export default Home;