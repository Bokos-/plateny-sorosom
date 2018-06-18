import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Home />

      </Router>
    );
  }
}

export default App;
