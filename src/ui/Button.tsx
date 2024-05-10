import { FC } from "react";
import styles from "./button.module.css";

interface IButton {
  children?: string;
  onClick?: () => void;
  disabled?: boolean; 
}

const Button: FC<IButton> = ({ children, onClick, disabled }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;