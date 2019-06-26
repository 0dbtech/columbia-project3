import React, { Component } from "react";
import FrontPage from './pages/index'
import './App.css';
import VideoComponent from "./components/Video/video";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <FrontPage /> */}
        <VideoComponent />
      </div>
    )
  }

}

export default App;
