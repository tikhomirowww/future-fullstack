import React, { ChangeEvent, FC } from "react";
import styles from "./input.module.css";
import { validateHeaderName } from "http";

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string;
  placeholder: string;
  value?: string;
}

const Input: FC<InputProps> = ({
  onChange,
  name,
  type = "text",
  placeholder,
  value,
}) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.input}
    />
  );
};

export default Input;
