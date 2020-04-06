import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import User from "./Component/User";


class App extends Component {

  render() {
    return(
        <div>
            <Router>
                <Switch>
                <Route exact path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/user" component={User}/>
                </Switch>
            </Router>

        </div>
    );
  }
}
export default App;
