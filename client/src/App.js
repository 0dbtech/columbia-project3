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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <NavbarComponent/>
          </div>
          <Switch>
            <Route exact={true} path="/" component={withAuth(SearchComponent)}/>
            <Route path="/search" component={withAuth(SearchComponent)}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>
          </Switch>
        </Router>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
