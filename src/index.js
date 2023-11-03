import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a Paragraph</p>
  </div>,
  document.querySelector("#root")
); // render arguements are (what to show, where to show it); Can only take in a single html element.
