import React from "react";

export default class JumbotronMain extends React.Component {
  render() {
    const {title} = this.props;
    return <div>
      <div class="flex-container">
        <div className="mw8 center ph3">
          <div class="grid-container">
            <h1 className="f2 f1-l b di lh-title mb3 white">
              { title }
            </h1>
          </div>
        </div>
      </div>
    </div>;
  }
}
