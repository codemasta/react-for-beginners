import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hello(props) {
  console.log(props);
  console.log(Object.keys(props)); // returns an array of keys from the props
  return (
    <div>
      <h1> Welcome to {props.name}</h1>
      <p>Let's us build and {props.message}</p>
      <p>{props.number}</p>
      <p>{Object.keys(props).length} Props Total</p>
    </div>
  );
}

ReactDOM.render(
  <Hello name="Seun" message="Have fun!" number={4} />,
  document.getElementById("root")
);
