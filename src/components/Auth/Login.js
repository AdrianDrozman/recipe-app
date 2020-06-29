import React, { useState } from "react";
import useFormValidation from "./useFormValidation";
import { Link } from "react-router-dom";
import validateLogin from "./validateLogin";
import firebase from "../../firebase";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

function Login(props) {
  const {
    handleChange,
    handleSubmit,
    values,
    handleBlur,
    isSubmitting,
    errors,
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const [login, setLogin] = useState(true);
  const [firebaseError, setFirebaseError] = useState(null);

  async function authenticateUser() {
    const { name, email, password } = values;
    try {
      login
        ? await firebase.login(email, password)
        : await firebase.register(name, email, password);
      props.history.push("/");
    } catch (err) {
      console.error("Authentication Error", err);
      setFirebaseError(err.message);
    }
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center w-screen h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8  w-1/3 py-24 mb-4"
      >
        <h2 className="text-center uppercase text-4xl text-green-500 mb-5">
          {login ? "Login" : "Create Account"}
        </h2>
        {!login && (
          <div className="mb-4">
            <label
              className="block text-green-500 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Name
            </label>
            <input
              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              onBlur={handleBlur}
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-green-500 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className={`${
              errors.email && "border border-red-600"
            } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="username"
            type="email"
            name="email"
            required={false}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email"
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-600 font-bold">{errors.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-green-500 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={` ${
              errors.password && "border border-red-600 "
            } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="password"
            type="password"
            value={values.password}
            name="password"
            placeholder="******************"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-600 font-bold">{errors.password}</p>
          )}
          {firebaseError && (
            <p className="text-red-600 font-bold">{firebaseError}</p>
          )}
        </div>

        <div className="flex flex-col items-center space-y-4 justify-between">
          <Link
            className="block text-center font-bold text-sm text-green-500 hover:text-green-800 mt-5"
            type="button"
            onClick={() => {
              setLogin((prevLogin) => !prevLogin);
            }}
            to="#"
          >
            {login ? "Need to create an account?" : "Already have an account?"}
          </Link>
          <Link
            className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
            to="/forgot"
          >
            Forgot Password?
          </Link>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold w-1/3 py-2 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSubmitting}
            style={{ background: isSubmitting ? "grey" : "orange" }}
          >
            {login ? "Login" : "Register"}
          </button>
        </div>
      </form>
      
    </div>
  );
}

export default Login;
