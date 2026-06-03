import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleMinus = () => {
    setCounter(counter - 1);
  };
  const handlePlus = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center mt-70">
        <p className="bg-amber-400 text-white">Counter: {counter}</p>
        <hr />
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={handleMinus}
            className="p-3 hover:cursor-pointer text-white rounded bg-red-400"
          >
            Minus
          </button>
          <button
            onClick={handlePlus}
            className="p-3 hover:cursor-pointer text-white rounded bg-blue-400"
          >
            Plus
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
