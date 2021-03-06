import React from "react";

import Ad from "../components/Ad";
import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];
    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];

    return (
      <div>
        <h1>Featured</h1>
        <Ad adText={randomAd}></Ad>
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
