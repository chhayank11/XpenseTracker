import { Box, Grid } from "@mui/material";
import React from "react";
import styles from "./ExpenseTracker.module.css";

const ExpenseTracker = () => {
  return (
    <Box sx={{ backgroundColor: "#505050", borderRadius: "10px" }}>
      <Grid container>
        <Grid size={{ xs: 12, sm: 4 }} className={styles.etgrid}>
          <div className={styles.etcomponent}>
            <p>Wallet Balance : 5000</p>
            <button>add bal</button>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }} className={styles.etgrid}>
          <div className={styles.etcomponent}>
            <p>Expense : 0</p>
            <button>add exp</button>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }} className={styles.etgrid}>
          <div className={styles.etcomponent}>
            <p>pie chart</p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExpenseTracker;
