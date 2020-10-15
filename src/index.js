import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let city = "Madrid";
let person = {
  name: "Seun",
  country: "Spain",
};

ReactDOM.render(
  //React.createElement("h1", { style: { color: "red" } }, "Hello!"),
  <div>
    <h1 id="heading" className="cool-text">
      {" "}
      Hello from {city}
    </h1>
    <h1>
      {" "}
      You are {person.name} from {person.country}
    </h1>
    <ul>
      <li>Hot Dog</li>
      <li>Hot Yam</li>
      <li>Hot Bread</li>
      <li>Hot Corn</li>
      <li>Hot Beans</li>
    </ul>
  </div>,
  document.getElementById("root")
);
