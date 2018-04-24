import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class WorkPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} />

      <div className="mw7 center ph3 pv4">
        <div className="flex flex-wrap mhn1">

          <div className="w-100 hover-text">
            <img src={getAsset(entry.getIn(["data", "main", "image3", "image"]))}/>
          </div>
        </div>
      </div>
    </div>;
  }
}
