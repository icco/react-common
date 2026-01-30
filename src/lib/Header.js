import React from "react";

import Logo from "./Logo";

class Header extends React.Component {
  render() {
    let prefix = <></>;
    let head = <></>;
    let nav = (
      <a
        className="text-sm inline-block mr-3 text-black hover:opacity-70 md:mr-4"
        href="/auth/sign-in"
      >
        Sign In
      </a>
    );

    if (this.props.loggedInUser) {
      nav = (
        <>
          <a
            className="text-sm inline-block mr-3 text-black hover:opacity-70 md:mr-4"
            href="/auth/sign-out"
          >
            Sign Out
          </a>
        </>
      );
    }

    if (this.props.noLogo) {
      prefix = (
        <a href="/" className="hover:opacity-70">
          <Logo
            size={50}
            className="align-middle mx-0 inline-block text-center px-0 logo"
          />
        </a>
      );
    }

    return (
      <div>
        <nav className="flex justify-between uppercase">
          <div className="flex items-center p-3">{prefix}</div>
          <div className="flex-grow p-3 flex items-center">{nav}</div>
        </nav>
        {head}
      </div>
    );
  }
}

export default Header;
