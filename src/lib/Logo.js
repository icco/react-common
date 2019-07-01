import React from "react";

import LogoIcon from "./dots.svg";

class Logo extends React.Component {
  render() {
    let size = 200;
    if (this.props.size) {
      size = this.props.size;
    }

    return (
      <div className={this.props.className} >
        <LogoIcon />
      </div>
    );
  }
}

export default Logo;
