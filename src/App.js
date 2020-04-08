import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import User from "./Component/User";
import Home from "./Component/Home";
import {Button, Col, Container, Form, FormControl, Nav, Navbar, NavLink, Row} from "react-bootstrap";
import Cookie from "js-cookie";


class App extends Component {

    constructor() {
        super();
        if(Cookie.get("token")){
            this.state = {
                isLogin: true
            }
        } else {
            this.state = {
                isLogin: false
            }

        }
    }

    clickHandler =()=> {
        Cookie.remove("token");
        this.setState({
            isLogin: false
        })

    }

    render() {
        let navString;
        if (!this.state.isLogin) {
            navString = <Nav className="mr-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
        } else {
            navString = <Nav className="mr-auto">
                <Nav.Link href="/user">User</Nav.Link>
            </Nav>
        }

        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Navbar expand="lg" bg="dark" variant="dark">
                                <Navbar.Brand href="/home">Home</Navbar.Brand>
                                {navString}


                                {(this.state.isLogin) ? <Button variant="outline-info" onClick={this.clickHandler}>Logout</Button> : ''}

                            </Navbar>


                            <Router>
                                <Switch>
                                    <Route path="/home" component={Home}/>
                                    <Route path="/login" component={Login}/>
                                    <Route path="/register" component={Register}/>
                                    <Route path="/user" component={User}/>
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
