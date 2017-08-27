import React from "react";

export default class Archives extends React.Component {
  render() {
    // Getting url params, eg /archives/some-article
    const { params } = this.props;
    const { article } = params;
    // Getting url queries, eg ?date=today&filter=none
    const { query } = this.props.location;
    const { date, filter } = query;
    return (
      <div>
        <h1>Archives ({article})</h1>
        <h4>date: {date}, filter: {filter}</h4>
      </div>
    );
  }
}
