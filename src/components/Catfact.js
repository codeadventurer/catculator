import React, { Component } from "react";
import axios from "axios";

class Catfact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // loading: false,
      facts: [],
      randomFact: ""
    };
  }

  getFacts = () => {
    // this.setState({ loading: true });
    const proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "https://cat-fact.herokuapp.com/facts";

    return axios
      .get(proxyUrl + targetUrl)
      .then(response => {
        //console.log(response.data.all);
        const facts = response.data.all;
        this.setState({
          // loading: false,
          facts: facts
        });
        //console.log(this.state.facts[5].text);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getFacts();
  }

  handleClick(event) {
    event.preventDefault();
    console.log(this.state.facts);
  }
  //   event.preventDefault();
  //   console.log("works!");
  //   let random = Math.floor(Math.random() * this.state.facts.length);
  //   this.setState = {
  //     randomFact: this.state.facts[random].text
  //   };
  // }

  render() {
    // const text = this.state.loading ? "loading..." : this.state.randomFact;

    const facts = this.state.facts.map(item => item.text);
    let random = Math.floor(Math.random() * facts.length);
    const fact = facts[random];
    return (
      <div>
        <p className="fact-text">{fact}</p>
        <button onClick={this.handleClick}>New cat fact</button>
      </div>
    );
  }
}

export default Catfact;
