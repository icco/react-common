import React from "react";

import LogoIcon from "./dots.svg";

class Logo extends React.Component {
  render() {
    let size = 200;
    if (this.props.size) {
      size = this.props.size;
    }

    console.log(LogoIcon);

    return (
      <div
        className={this.props.className}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <LogoIcon />
      </div>
    );
  }
}

export default Logo;
