import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import M from "../../node_modules/materialize-css/dist/css/materialize.css";

//import Components
import Title from "./components/title/index"

class App extends Component {


  render() {
    return (
      <div>
      <Title>Title</Title>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </div>
    );
  }
}

export default App;
