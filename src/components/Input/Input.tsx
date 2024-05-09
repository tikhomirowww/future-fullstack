import React, { ChangeEvent, FC } from 'react';
import styles from "./input.module.css"

interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string;
  placeholder: string;
}

const Input:FC<InputProps> = ({ onChange, name, type, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.input}
    />
  );
}

export default Input;