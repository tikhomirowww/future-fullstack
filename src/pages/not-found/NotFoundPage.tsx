import React from "react";
import styles from "./notFound.module.css"
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={styles.errorPage}>
        <div className={styles.goHome}>
        <Link to={'/register'}>
        Let's get you out of here
      </Link>
        </div>
      <img src={require('../../images/notFoundPage.jpeg')} alt="Wrong Page!" />

    </div>
  );
};

export default NotFoundPage;
