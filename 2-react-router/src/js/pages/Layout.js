import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.pushState(null, "/");
  }

  render() {
    const { history } = this.props;
    console.log(history.isActive("archives"));
    return (
      <div>
        <h1>KillerNews.net</h1>
        <Link to="archives" activeClassName="test">archives</Link>
        <Link to="settings">settings</Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
        {this.props.children}
      </div>
    );
  }
}
