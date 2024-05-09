import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../helpers/hooks";
import { logout } from "../../store/slices/users.slice";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/actions/users.actions";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const user = useSelector((state: any) => state.user);

  const { id } = useParams();
  useEffect(() => {
    dispatch(getCurrentUser(user.id));
  }, [dispatch, id]);

  return (
    <div>
      {user && <p>{user.username}!</p>}
      <Link to={"/register"}>Register</Link>
      <Link to={"/login"}>Login</Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Navbar;
