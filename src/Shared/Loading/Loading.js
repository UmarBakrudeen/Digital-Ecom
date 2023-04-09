import React from "react";
import "./Loading.scss";
import ReactDOM from "react-dom";

const Loading = () => {
  return ReactDOM.createPortal(
    <div className="loading__container">
      <img
        src="https://imgs.search.brave.com/XGTHxafH_OevcVUXUIlDZbEXjmSsMl-DFWqj4SOFd2w/rs:fit:800:600:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVhL2Qw/LzQ3LzVhZDA0N2Ex/ODc3MmNmMDQ4OGE5/MDhkOTg5NDJmOWJm/LmdpZg.gif"
        alt="Loading"
      />
    </div>,
    document.getElementById("loading")
  );
};

export default Loading;
