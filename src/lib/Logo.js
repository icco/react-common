import React from "react";
import SVG from "svg.js";

function buildSvg(size) {
  let root = SVG().size(size, size)
  return root.circle(size/4).stroke("#000")
}


class Logo extends React.Component {
  render() {
    let size = 200;
    if (this.props.size) {
      size = this.props.size;
    }

    let svg = buildSvg(size);

    return (
      <div className={this.props.className} >
        {svg}
      </div>
    );
  }
}

export default Logo;
