import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { logout } from "../../store/slices/users.slice";
import { getCurrentUser } from "../../store/actions/users.actions";
import { Link, NavLink } from "react-router-dom";
import Search from "../../components/search/Search";
import Button from "../../ui/Button";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.users);
  const tokens = localStorage.getItem("tokens");
  useEffect(() => {
    tokens && dispatch(getCurrentUser());
  }, [dispatch]);

  console.log(user);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Future JS</div>
      <div className={styles.links}>
        <NavLink to={"/"}>Home</NavLink>
      </div>
      <Search />

      {!tokens ? (
        <div className={styles.registerUser}>
          <NavLink to={"/register"}>Register</NavLink>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      ) : (
        <div className={styles.user}>
          <NavLink to={"/favorites"}>See favorites</NavLink>
          <NavLink to={"/add"}>Add product</NavLink>
          {user && <p>{user.email}</p>}
          <Button onClick={() => dispatch(logout())}>Logout</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
