import React from "react";
import styles from "./Button.module.css";

const Button = ({ buttonText, buttonStyle }) => {
  return (
    <button className={`${styles[buttonStyle]} ${styles.button}`}>
      {buttonText}
    </button>
  );
};

export default Button;
