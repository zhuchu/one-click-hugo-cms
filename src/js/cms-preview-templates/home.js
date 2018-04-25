import React from "react";
import format from "date-fns/format";

import JumbotronMain from "./components/jumbotronMain";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
        <JumbotronMain image={image} title={entry.getIn(["data", "title"])} />
    </div>
  }
}
