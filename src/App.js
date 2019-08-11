import React, { Component } from "react";
import "./App.css";
import CatFact from "./components/Catfact";
import Calculator from "./components/Calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CATCULATOR</h1>
        <div className="heading">
          <img src="/images/undraw_chilling_8tii.svg" alt="undraw_chilling" />{" "}
          <div className="cat-fact">
            <CatFact />
          </div>
        </div>

        <Calculator />

        <div className="footer">
          <div className="footer-text">
            Made by{" "}
            <a href="https://www.linkedin.com/in/adontcova/">Anna Dontcova</a>.
            The illustration is from <a href="https://undraw.co/">undraw</a>.
            Favicon made by{" "}
            <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from{" "}
            <a href="https://www.flaticon.com/">flaticon</a> © 2019
          </div>
        </div>
      </div>
    );
  }
}

export default App;
