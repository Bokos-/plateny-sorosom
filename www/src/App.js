import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import CanvasImageComponent from "./components/canvas/CanvasImageComponent";
import vlastizradca from "./assets/vlastizradca.jpg"

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

export default App;
