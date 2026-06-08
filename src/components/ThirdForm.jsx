import React from "react";
import { useForm } from "react-hook-form";

const ThirdForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-md"
      >
        {/* Name Field */}
        <div>
          <input
            type="text"
            {...register("name", {
              required: "Username is required",
              maxLength: {
                value: 10,
                message: "Username cannot exceed 10 characters",
              },
            })}
            className={`w-full p-2 border rounded ${
              errors.name ? "border-red-500 outline-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              maxLength: {
                value: 10,
                message: "Password cannot exceed 10 characters",
              },
            })}
            className={`w-full p-2 border rounded ${
              errors.password
                ? "border-red-500 outline-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter your password"
          />

          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThirdForm;
