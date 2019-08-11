import React, { Component } from "react";
import axios from "axios";

class Catfact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      facts: [],
      randomFact:
        "A cat's brain is 90% similar to a human's — more similar than to a dog's."
    };
  }

  getFacts = () => {
    this.setState({ loading: true });
    const proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "https://cat-fact.herokuapp.com/facts";

    return axios
      .get(proxyUrl + targetUrl)
      .then(response => {
        const facts = response.data.all;
        this.setState({
          loading: false,
          facts: facts
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getFacts();
  }

  handleClick = () => {
    const facts = this.state.facts.map(item => item.text);

    let random = Math.floor(Math.random() * facts.length);
    this.setState({
      randomFact: facts[random]
    });
  };

  render() {
    const text = this.state.loading ? "loading..." : this.state.randomFact;

    return (
      <div>
        <p className="fact-text">{text} </p>
        <button onClick={this.handleClick}>New cat fact</button>
      </div>
    );
  }
}

export default Catfact;
