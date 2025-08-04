import React from "react";
import styles from "./RecentTransactions.module.css";
import { Typography } from "@mui/material";

const RecentTransactions = () => {
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
        Recent Transactions
      </Typography>
      <div className={styles.rtdiv}>
        <h1>asd</h1>
      </div>
    </div>
  );
};

export default RecentTransactions;
