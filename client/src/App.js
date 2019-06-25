import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, {component} from "react";
import FrontPage from './pages/index';
import Results from './pages/results';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        {/* <Switch> */}
            <Route exact path='/' component={FrontPage} />
            <Route path='/results' component={Results} />
        {/* </Switch> */}
      </div>
    </Router>
    )
  }

}

export default App;
