import React from "react";

export default class Ad extends React.Component {
  render() {
    const { adText } = this.props;
    return (
      <aside class="row">
        <div class="col-lg-12">
          <div class="well text-center">
            { adText }
          </div>
        </div>
      </aside>
    );
  }
}
