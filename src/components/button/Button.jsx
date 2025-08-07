import React from "react";
import styles from "./Button.module.css";

const Button = ({ buttonText, buttonStyle, listener }) => {
  return (
    <button
      className={`${styles[buttonStyle]} ${styles.button}`}
      onClick={listener}
    >
      {buttonText}
    </button>
  );
};

export default Button;
