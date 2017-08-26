import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    // Create state & set default title. Accessed via this.state.title
    this.state = {
      title: "Welcome",
    };
  }

  // Function to change this.state.title
  changeTitle(title) {
    this.setState({title});
  }

  render() {
    // Add changeTitle to Header element. Make sure to .bind(this) to use function in this component
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer/>
      </div>
    );
  }
}
