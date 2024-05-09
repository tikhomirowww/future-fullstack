import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import { logout } from "../../store/slices/users.slice";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/actions/users.actions";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.users);
  const tokens = localStorage.getItem("tokens");
  useEffect(() => {
    tokens && dispatch(getCurrentUser());
  }, [dispatch]);

  console.log(user);

  return (
    <div>
      {user && <p>{user.email}</p>}
      <Link to={"/register"}>Register</Link>
      <Link to={"/login"}>Login</Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Navbar;
