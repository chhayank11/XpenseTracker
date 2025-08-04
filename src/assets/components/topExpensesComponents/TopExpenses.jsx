import React from "react";
import styles from "./TopExpenses.module.css";
import { Typography } from "@mui/material";

const TopExpenses = () => {
  return (
    <div>
      <Typography
        sx={{
          textAlign: { xs: "center", sm: "left" },
          fontSize: "30px",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Top Expenses
      </Typography>
      <div className={styles.tediv}>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
      </div>
    </div>
  );
};

export default TopExpenses;
