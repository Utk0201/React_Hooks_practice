import React from "react";
import ReactDOM from "react-dom";

//  we must use hook inside a functional component

var ct = 0;

function clk() {
  ct++;
  ReactDOM.render(
    <div className="container">
      <h1>{ct}</h1>
      <button onClick={clk}>+</button>
    </div>,
    document.getElementById("root")
  );
}

ReactDOM.render(
  <div className="container">
    <h1>{ct}</h1>
    <button onClick={clk}>+</button>
  </div>,
  document.getElementById("root")
);
