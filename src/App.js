import React, { Component } from "react";
import "./App.css";
import CatFact from "./components/Catfact";
import Calculator from "./components/Calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="heading">
          <h1>Catculator</h1>
          <img
            src="/images/undraw_chilling_8tii.svg"
            alt="undraw_chilling"
          />{" "}
        </div>
        <div className="cat-fact">
          <CatFact />
        </div>

        <Calculator />
      </div>
    );
  }
}

export default App;
