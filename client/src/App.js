
import { Link, Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import './App.css';
import Home from './pages/home';
import Dogs from './pages/dogs';

import Details from './pages/details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Switch>
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
