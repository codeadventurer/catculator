import React, { Component } from "react";
import axios from "axios";

class Catfact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
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
          loading: false
        });
        this.props.fillFacts(facts);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getFacts();
  }

  handleClick = () => {
    this.props.refreshFact();
  };

  render() {
    const text = this.state.loading ? "loading..." : this.props.randomFact;

    return (
      <div>
        <p className="fact-text">{text}</p>
        {/* <button onClick={this.handleClick}>New cat fact</button> */}
      </div>
    );
  }
}

export default Catfact;
