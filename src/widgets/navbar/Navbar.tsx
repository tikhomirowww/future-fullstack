import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { logout } from "../../store/slices/users.slice";
import { getCurrentUser } from "../../store/actions/users.actions";
import { Link } from "react-router-dom";
import Search from "../../components/search/Search";

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
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        <Link to={"/"}>Home</Link>
      </div>
      <Search />

      {!tokens ? (
        <div className={styles.registerUser}>
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      ) : (
        <div className={styles.user}>
          <Link to={"/favorites"}>See favorites</Link>
          {user && <p>{user.email}</p>}
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
