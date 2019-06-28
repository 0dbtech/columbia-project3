import { Link, Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import './App.css';
import Home from './pages/home';
import Dogs from './pages/dogs';
import LogIn from "./pages/login"
import Details from './pages/details';
import Signup from "./pages/signup"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/Dogs" component={Dogs} />   
            <Route path="/Details/:dogId" component={Details} />
            <Route path="/Signin" component={LogIn} />
            <Route path="/Signup" component={Signup} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;