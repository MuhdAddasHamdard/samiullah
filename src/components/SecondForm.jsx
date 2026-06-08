import React from "react";
import { useState } from "react";

const SecondForm = () => {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <>
      <div>second from</div>

      <form
        action=""
        className="flex flex-col gap-3  mx-auto container items-center justify-center"
      >
        <input
          className="p-3 border bg-sky-100"
          type="text"
          onChange={(event) => {
            setInput({ ...input, name: event.target.value });
          }}
          placeholder="enter your name"
        />
        <input
          className="p-3 border bg-sky-100"
          type="password"
          onChange={(event) => {
            setInput({ ...input, password: event.target.value });
          }}
          placeholder="enter your passwrod"
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </>
  );
};

export default SecondForm;
