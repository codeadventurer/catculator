import React, { Component } from "react";
import "./App.css";
import CatFact from "./components/Catfact";
import Calculator from "./components/Calculator";

class App extends Component {
  facts = [];

  state = {
    randomFact:
      "A cat's brain is 90% similar to a human's — more similar than to a dog's."
  };

  refreshFact = () => {
    const facts = this.facts.map(item => item.text);
    let random = Math.floor(Math.random() * facts.length);

    this.setState({
      randomFact: facts[random]
    });
  };

  fillFacts = facts => {
    this.facts = facts;
  };

  render() {
    return (
      <div className="App">
        <h1>CATCULATOR</h1>
        <div className="heading">
          <img src="/images/undraw_chilling_8tii.svg" alt="undraw_chilling" />{" "}
        </div>

        <div className="main">
          <div className="cat-fact">
            <CatFact
              fillFacts={facts => this.fillFacts(facts)}
              randomFact={this.state.randomFact}
              refreshFact={this.refreshFact}
            />
          </div>
          <Calculator refreshFact={this.refreshFact} />
        </div>

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
