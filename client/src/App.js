
import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import FooterComponent from "./components/Footer";
import NavbarComponent from "./components/navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchComponent from "./pages/Search";
import SignUp from "./pages/signup";
import LogIn from "./pages/login";
import withAuth from "./withAuth";




// import { Link, Switch, Route } from 'react-router-dom';
// import React, { Component } from "react";
// import './App.css';
// import Home from './pages/home';
// import Dogs from './pages/dogs';
// <<<<<<< rita
// import LogIn from "./pages/login"
// import Details from './pages/details';
// import Signup from "./pages/signup"

import Details from './pages/details';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Switch>


            <Route exact={true} path="/" component={withAuth(SearchComponent)}/>
            <Route path="/search" component={withAuth(SearchComponent)}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>

//             <Route exact path="/"  component={Home} />
//             <Route path="/Dogs" component={Dogs} />   
//             <Route path="/Details/:dogId" component={Details} />
//             <Route path="/Signin" component={LogIn} />
//             <Route path="/Signup" component={Signup} />


            <Route exact path="/"  component={Home} />
            <Route path="/Dogs" component={Dogs} />   
            <Route path="/Details/:dogId" component={Details} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;