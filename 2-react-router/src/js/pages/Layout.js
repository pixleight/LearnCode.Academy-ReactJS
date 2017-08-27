import React from "react";
import { Link } from "react-router";

import Ad from "../components/Ad";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { history } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    
    return (
      <div>
        <Nav/>
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>KillerNews.net</h1>
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
        {/* /.container */}
      </div>
    );
  }
}
