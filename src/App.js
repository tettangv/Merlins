import React, { Component } from "react";
import "./App.css";
import Merlin from "./Component/Merlin";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Merlin />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
