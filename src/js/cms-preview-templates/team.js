import React from "react";
import { List } from 'immutable';

import Jumbotron from "./components/jumbotron";

export default class TeamPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    const entryValues = entry.getIn(["data", "values"]);
    const values = entryValues ? entryValues.toJS() : [];

    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} />

      <div className="bg-off-white pv4">
        <div className="ph3 mw7 center">

          <div className="flex-ns flex-wrap mhn2-ns mb3">
            {(entry.getIn(["data", "intro", "blurbs"]) || []).map((blurb, index) => <div className="ph2-ns w-50-ns mb4" key={index}>
              <img src={blurb.get("image") && getAsset(blurb.get("image"))} alt="" className="center db mb3" style={{width: "240px"}}/>
              <p>{blurb.get("heading")}</p>
              <p>{blurb.get("text")}</p>
            </div>)}
          </div>
        </div>
      </div>
    </div>;
  }
}
