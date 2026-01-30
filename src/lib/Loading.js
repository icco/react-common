import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ height, width, className }) => (
  <ReactLoading
    key="loading"
    type={"bars"}
    height={height || 64}
    width={width || 64}
    className={className || "mx-auto text-gray-700"}
    style={{ fill: "#333" }}
  />
);

export default Loading;
