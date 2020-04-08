import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import User from "./Component/User";
import Home from "./Component/Home";
import Logout from "./Component/Logout";
import {Button, Col, Container, Form, FormControl, Nav, Navbar, Row} from "react-bootstrap";


class App extends Component {

    render() {
        return (
            <div>
                <Container>
                        <Row>
                            <Col>
                                <Navbar expand="lg" bg="dark" variant="dark">
                                    <Navbar.Brand href="/home">Home</Navbar.Brand>
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/login">Login</Nav.Link>
                                        <Nav.Link href="/register">Register</Nav.Link>
                                        <Nav.Link href="/user">User</Nav.Link>
                                        <Nav.Link href="/logout">Logout</Nav.Link>
                                    </Nav>
                                    <Form inline>
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                        <Button variant="outline-info">Search</Button>
                                    </Form>

                                </Navbar>
                                <Router>
                                    <Switch>
                                        <Route path="/home" component={Home}/>
                                        <Route path="/login" component={Login}/>
                                        <Route path="/register" component={Register}/>
                                        <Route path="/user" component={User}/>
                                        <Route path="/Logout" component={Logout}/>
                                    </Switch>
                                </Router>
                            </Col>
                        </Row>


                </Container>
            </div>
        );
    }
}

export default App;
