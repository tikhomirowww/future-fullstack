import { FC } from "react";
import styles from "./button.module.css";

interface IButton {
  children?: string;
  onClick?: () => void;
  disabled?: boolean;
  bg?: string;
}

const Button: FC<IButton> = ({ children, onClick, disabled, bg }) => {
  return (
    <button
      style={{ backgroundColor: bg }}
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
