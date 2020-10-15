import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Hello({ name, message, number }) {
  return (
    <div>
      <h1> Welcome to {name}</h1>
      <p>Let's us build and {message}</p>
      <p>{number} Props Total</p>
    </div>
  );
}

ReactDOM.render(
  <Hello name="Seun" message="Have fun!" number={4} />,
  document.getElementById("root")
);
