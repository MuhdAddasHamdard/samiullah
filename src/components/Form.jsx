import { useRef } from "react";

const Form = () => {
  const name = useRef(null);
  const password = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value);
    console.log(password.current.value);
  };
  return (
    <>
      <div>
        <form
          className="flex flex-col items-center justify-center gap-1.5 mt-5"
          onSubmit={handleSubmit}
          action=""
        >
          <input
            type="text"
            ref={name}
            placeholder="enter your name"
            className="border rounded bg-slate-200 p-3"
          />
          <input
            type="password"
            ref={password}
            placeholder="enter your password"
            className="border rounded bg-slate-200 p-3"
          />
          <button
            className="cursor-pointer text-white bg-blue-500 p-2 rounded "
            onClick={handleSubmit}
            type="submit"
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
