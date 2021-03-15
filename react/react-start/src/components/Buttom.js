import React, { Component } from "react";

class Button extends React.Component {
  render() {
    return <button onClick={this.handleClick.bind(this)}>Error Button</button>;
  }
  handleClick(e) {
    e.preventDefault();
    console.log(this);
    console.log("The link was clicked.");
  }
}

export default Button;
