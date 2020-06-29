import React from "react";
import useFormValidation from "./useFormValidation";
import validateLogin from "./validateLogin";
import firebase from "../../firebase";

const INITIAL_STATE={
  email:""
}

function ForgotPassword() {
  return (
    <div className="bg-gray-100 flex items-center justify-center w-screen h-screen">
      <div className="bg-white shadow-md rounded p-16  w-1/3 py-24 mb-4">
        <h2 className="text-green-600 font-bold text-3xl text-center mb-8">
          Forgot Password
        </h2>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        />
        <div className=" flex justify-center">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold w-2/3 py-2 rounded focus:outline-none focus:shadow-outline mt-5 "
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
