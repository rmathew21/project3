import React, { Component } from "react";
<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";
import M from "../../node_modules/materialize-css/dist/css/materialize.css";

//import Components
import Title from "./components/title/index"
=======
import Stockchart from "./components/Apexcharts"
// import "./App.css";
>>>>>>> 0156f7dd6048e342546d90ed1ebf5d479d35cc23

class App extends Component {


  render() {
    return (
      <div>
      <Title>Title</Title>
      <div className="App">
       <Stockchart />
      </div>
      </div>
    );
  }
}

export default App;