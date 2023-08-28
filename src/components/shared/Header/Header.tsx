import React from "react";
import logo from "../../../assets/Book-club-graphic-1.webp";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import { setUser } from "../../../../redux/features/users/usersSlice";
import { auth } from "../../../lib/Firebase";
import { signOut } from "firebase/auth";
const Header = () => {
  const { user } = useAppSelector((state: any) => state.users);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="text-white text-lg" to="/">
          Home
        </Link>
      </li>
      {!user.email && (
        <>
          <li>
            <Link className="text-white text-lg " to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="text-white text-lg " to="/signUp">
              Sign Up
            </Link>
          </li>
        </>
      )}

      {user.email && (
        <>
          <button className="btn btn-warning btn-md" onClick={handleLogOut}>
            Logout
          </button>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-100  bg-violet-700 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="h-12 w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
