import React, { Component } from "react";
import Stockchart from "./components/Apexcharts"
// import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Stockchart />
      </div>
    );
  }
}

export default App;
