import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Weather from "./components/Weather";
import NavBar from "./components/NavBar";
import Callback from "./components/Callback";
import Unauthorized from "./components/Unauthorized";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/weather" component={Weather} />
            <Route path="/callback" component={Callback} />
            <Route path="/unauthorized" component={Unauthorized} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
