import React from "react";
import { withRouter, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="h-20 items-center mx-auto p-10   flex justify-between text-2xl bg-green-200">
      <div className="w-48">
        <img src="/logo.png" alt="" />
      </div>
      <div className="flex justify-between space-x-5 text-green-600 uppercase ">
        <NavLink
          className="hover:text-green-900 transition duration-500"
          to="/"
        >
          Recipes
        </NavLink>
        <NavLink
          className="hover:text-green-900 transition duration-500"
          to="/"
        >
          New
        </NavLink>
        <NavLink
          className="hover:text-green-900 transition duration-500"
          to="/top"
        >
          Top
        </NavLink>
        <NavLink
          className="hover:text-green-900 transition duration-500"
          to="/search"
        >
          Search
        </NavLink>
        <NavLink
          className="hover:text-green-900 transition duration-500"
          to="/create"
        >
          Create
        </NavLink>
      </div>
      <div className="uppercase text-green-600">
        <NavLink
          className="hover:text-green-900 transition duration-500  "
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default withRouter(Header);
