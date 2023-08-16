import React from "react";

import Logo from "./Logo";

class Header extends React.Component {
  render() {
    let prefix = <></>;
    let head = <></>;
    let nav = (
      <a className="f6 link dib dim mr3 black mr4-ns" href="/auth/sign-in">
        Sign In
      </a>
    );

    if (this.props.loggedInUser) {
      nav = (
        <>
          <a className="f6 link dib dim mr3 black mr4-ns" href="/auth/sign-out">
            Sign Out
          </a>
        </>
      );
    }

    if (this.props.noLogo) {
      prefix = (
        <a href="/" className="link dim">
          <Logo size={50} className="v-mid mh0-ns dib-ns center ph0 logo" />
        </a>
      );
    }

    return (
      <div>
        <nav className="flex justify-between ttc">
          <div className="flex items-center pa3">{prefix}</div>
          <div className="flex-grow pa3 flex items-center">{nav}</div>
        </nav>
        {head}
      </div>
    );
  }
}

export default Header;
