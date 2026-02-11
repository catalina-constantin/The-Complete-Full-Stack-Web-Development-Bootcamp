import React from "react";
import ReactDOM from "react-dom";

const name = "Constantin Catalina";
const currentdate = new Date();
const year = currentdate.getFullYear();

ReactDOM.render(
    <div>
        <p>Created by {name}</p>
        <p>Copyright {year}</p>
    </div>,
    document.getElementById("root")
);