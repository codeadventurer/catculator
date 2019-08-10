import React, { Component } from "react";

export class ClearButton extends Component {
  render() {
    return <div className="clear-btn">{this.props.children}</div>;
  }
}

export default ClearButton;
