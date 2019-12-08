import React from "react";
import Vivus from "vivus";

// This modifies the DOM, as such, can only be called from componentDidMount.
function buildSVG(size) {
  let viewBox = [0, 0, size, size].join(" ");
  let paths = [];

  let k = size / 4;
  [
    [k * 1, k * 1],
    [k * 3, k * 1],
    [k * 1, k * 3],
    [k * 3, k * 3],
  ].forEach(function(arr, i) {
    // Set the radius
    let rx = size / 4.0 + size / 10.0;
    let ry = rx;
    let cx=arr[0];
    let cy=arr[1];

        let path = pathArrayToString([
        ['M', cx - rx, cy],
        ['A', rx, ry, 0, 0, 0, cx + rx, cy],
        ['A', rx, ry, 0, 0, 0, cx - rx, cy],
        ['z']
      ])

    paths[i] = (
      <path stroke="#000" strokeWidth={0.04 * size} fill="none" d={path} />
    );
  });

  return (
    <svg
      xmlns="http://www.w3.org/svg/2000"
      viewBox={viewBox}
      width={size}
      height={size}
      id="logo"
    >
      {paths}
    </svg>
  );
}

function pathArrayToString (a) {
  for (var i = 0, il = a.length, s = ''; i < il; i++) {
    s += a[i][0]

    if (a[i][1] != null) {
      s += a[i][1]

      if (a[i][2] != null) {
        s += ' '
        s += a[i][2]

        if (a[i][3] != null) {
          s += ' '
          s += a[i][3]
          s += ' '
          s += a[i][4]

          if (a[i][5] != null) {
            s += ' '
            s += a[i][5]
            s += ' '
            s += a[i][6]

            if (a[i][7] != null) {
              s += ' '
              s += a[i][7]
            }
          }
        }
      }
    }
  }

  return s + ' '
}


class Logo extends React.Component {
  componentDidMount() {
    const { size } = this.props;
    new Vivus("logo", { duration: 200 });
  }

  render() {
    const { size } = this.props;

    return (
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className={this.props.className}
      >
        {buildSVG(size)}
      </div>
    );
  }
}

export default Logo;
