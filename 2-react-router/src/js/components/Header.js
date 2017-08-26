import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  // Handle change event. Gets value from input element, sets title using changeTitle function in Layout.js
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <header>
        <Title title={this.props.title} />
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </header>
    );
  }
}
