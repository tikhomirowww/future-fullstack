import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../helpers/hooks";
import { logout } from "../../store/slices/users.slice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Link to={"/register"}>Register</Link>
      <Link to={"/login"}>Login</Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Navbar;
