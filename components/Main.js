import { withRouter } from "next/router";
import React from "react";

import Submit from "../components/Submit";

class Main extends React.Component {
  render() {
    let content = (
      <>
        <h1 className="f-headline-ns f-subheadline mw7 center pa4">
          Please sign-in to upload photos.
        </h1>
      </>
    );

    if (this.props.loggedInUser) {
      content = (
        <>
          <Submit />
        </>
      );
    }

    return content;
  }
}

export default withRouter(Main);
