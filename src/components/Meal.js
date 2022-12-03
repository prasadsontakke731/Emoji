import React from "react";

function Meal(props) {
  return (
    <div className="note">
      <h1>{props.name}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Meal;