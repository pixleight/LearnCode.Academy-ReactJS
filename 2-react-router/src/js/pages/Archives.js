import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
    // Getting url params, eg /archives/some-article
    const { params } = this.props;
    const { article } = params;
    // Getting url queries, eg ?date=today&filter=none
    const { query } = this.props.location;
    const { date, filter } = query;

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>Archives<br/>
          <small>article: {article}, date: {date}, filter: {filter}</small>
        </h1>
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
