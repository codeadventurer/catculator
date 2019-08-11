import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";
import ClearButton from "./ClearButton";
import "./Calculator.css";

class Calculator extends Component {
  state = {
    input: "",
    previousNumber: "",
    currentNumber: "",
    operator: ""
  };

  addToInput = val => {
    this.setState({
      input: this.state.input + val,
      currentNumber: this.state.input + val
    });
  };

  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({
        input: this.state.input + val,
        currentNumber: this.state.input + val
      });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  add = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "plus"
    });
  };

  substract = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "minus"
    });
  };

  multiply = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "multiply"
    });
  };

  divide = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "divide"
    });
  };

  evaluate = () => {
    if (this.state.operator === "plus") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "minus") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) -
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) /
          parseFloat(this.state.currentNumber)
      });
    }

    this.props.refreshFact();
  };

  render() {
    return (
      <div className="calc">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>

          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.evaluate}>=</Button>
            <Button handleClick={this.substract}>-</Button>
          </div>

          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
