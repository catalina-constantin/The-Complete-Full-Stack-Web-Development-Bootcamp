import React from "react";
import ReactDOM from "react-dom";

const currentdate = new Date();
const currentHour = currentdate.getHours();

let greeting;
let styleColor = {
    color: "",
}

if (currentHour >= 0 && currentHour < 12) {
    greeting = "Good morning";
    styleColor.color = "red";
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
    styleColor.color = "green";
} else {
    greeting = "Good evening";
    styleColor.color = "blue";
}

ReactDOM.render(
    <div>
        <h1 className="heading" style={styleColor}>{greeting}</h1>
    </div>,
    document.getElementById("root")
);
