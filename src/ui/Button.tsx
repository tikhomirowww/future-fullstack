import React, { FC } from "react";
import styles from "./button.module.css";

interface IButton {
  children?: string;
  onClick?: () => void; 
}

const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <>  
      <button className={styles.button} onClick={onClick}>
        {children}
    </button>
    </>
  );
};

export default Button;
