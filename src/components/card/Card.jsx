import React from "react";
import styles from "./Card.module.css";
import Button from "../button/Button";

const Card = ({ cardTitle, amount, amountColour, buttonText, buttonStyle }) => {
  return (
    <div className={styles.card}>
      <p className={styles.h3}>
        {cardTitle}:{" "}
        <span style={{ color: amountColour, fontWeight: "bold" }}>
          ₹{amount}
        </span>
      </p>
      <Button buttonText={buttonText} buttonStyle={buttonStyle}></Button>
    </div>
  );
};

export default Card;
