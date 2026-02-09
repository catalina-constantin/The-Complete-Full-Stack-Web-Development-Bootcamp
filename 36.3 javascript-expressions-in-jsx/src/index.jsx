import React from "react";
import ReactDOM from "react-dom";

const firstName="Catalina";
const lastName="Constantin";
const luckyNumber = 5;

ReactDOM.render(
  <div>
    <h1>Hello {firstName + " " + lastName}!</h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root"),
);
