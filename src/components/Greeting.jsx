import React from "react";

const Greeting = (props) => {
  console.log(props.name);
  return (
    <>
      <div>this is {props.name} component</div>
      <h1>{props.age}</h1>
    </>
  );
};

export default Greeting;
