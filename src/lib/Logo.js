import React from "react";
import SVG from "svg.js";

function buildSVG(size, el) {
  var canvas = SVG(el).size(size, size);
  var k = size / 4;
  [[k * 1, k * 1], [k * 3, k * 1], [k * 1, k * 3], [k * 3, k * 3]].forEach(
    function(arr, i) {
      // Set the radius
      var c = canvas.circle(size / 4.0 + size / 10.0);

      // Put it where we want to
      c.cx(arr[0]);
      c.cy(arr[1]);

      // Style it
      c.fill({ color: "#fff", opacity: 0.0 });
      c.stroke({
        width: 0.04 * size,
        color: "#000",
      });
    }
  );

  //new Vivus('drawing', { duration: 200 }, myCallback);
  return el;
}

class Logo extends React.Component {
  render() {
    let size = 200;
    if (this.props.size) {
      size = this.props.size;
    }

    return buildSVG(size, <div className={this.props.className} />);
  }
}

export default Logo;
