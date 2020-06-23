import React, { useState } from "react";

function Login(props) {
  const [login, setLogin] = useState(true);
  return (
    <div className="bg-gray-100 flex items-center justify-center w-screen h-screen">
      <form className="bg-white shadow-md rounded px-8  w-1/3 py-24 mb-4">
        <h2 className="text-center uppercase text-4xl text-gray-600 mb-5">
          {login ? "Login" : "Create Account"}
        </h2>
        {!login && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>

        <div className="flex flex-col items-center space-y-4 justify-between">
          <a
            className="block text-center font-bold text-sm text-green-500 hover:text-green-800 mt-5"
            type="button"
            onClick={() => setLogin((prevLogin) => !prevLogin)}
            href="#"
          >
            {login ? "Need to create an account?" : "Already have an account?"}
          </a>
          <a
            className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800"
            href="#"
          >
            Forgot Password?
          </a>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold w-1/3 py-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            {login ? "Login" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
