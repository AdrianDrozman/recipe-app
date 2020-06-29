import React, { useContext } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { FirebaseContext } from "../firebase";
import firebaseConfig from "../firebase/config";

function Header() {
  const { user, firebase } = useContext(FirebaseContext);
  return (
    <div className="h-20 items-center mx-auto p-10 flex justify-between text-2xl bg-white">
      <div className="w-48">
        <img src="/logo.png" alt="" />
      </div>
      <div className="flex justify-between space-x-5 text-green-900 font-bold  ">
        <NavLink
          className="hover:text-green-400 transition duration-500"
          to="/"
        >
          Recipes
        </NavLink>
        <NavLink
          className="hover:text-green-400 transition duration-500"
          to="/"
        >
          New
        </NavLink>
        <NavLink
          className="hover:text-green-400 transition duration-500"
          to="/top"
        >
          Top
        </NavLink>
        <NavLink
          className="hover:text-green-400 transition duration-500"
          to="/search"
        >
          Search
        </NavLink>
        {user && (
          <NavLink
            className="hover:text-green-400 transition duration-500"
            to="/create"
          >
            Create
          </NavLink>
        )}
      </div>
      <div className=" text-green-600">
        {user ? (
          <div className="flex justify-between space-x-5">
            <div className="hover:text-green-400 text-green-900 font-bold transition duration-500 ">
              Welcome,{user.displayName}
            </div>
            <div
              className="hover:text-green-400 text-green-900 font-bold transition duration-500 cursor-pointer "
              onClick={() => firebase.logout()}
            >
              <i class="fas fa-sign-out-alt"></i>
            </div>
          </div>
        ) : (
          <NavLink
            className="hover:text-green-400 text-green-900 font-bold transition duration-500  "
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default withRouter(Header);
