import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import User from "./Component/User";
import Home from "./Component/Home";
import {Col, Container, Row} from "react-bootstrap";


class App extends Component {

    render() {
        return (
            <div>
                <Container fluid={"md"}>
                        <Row xs={12}>
                            <Col xs={12} md={8}>
                                <Router>
                                    <Switch>
                                        <Route path="/" component={Home}></Route>
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
