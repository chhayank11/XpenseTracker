import { useState } from "react";
import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import ExpenseTracker from "./assets/components/expenseTrackerComponents/ExpenseTracker";
import RecentTransactions from "./assets/components/recentTransactionComponents/RecentTransactions";
import TopExpenses from "./assets/components/topExpensesComponents/TopExpenses";

function App() {
  return (
    <div style={{ margin: "10px" }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography
            sx={{
              textAlign: { xs: "center", sm: "left" },
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Expense Tracker
          </Typography>
          <ExpenseTracker />
        </Grid>
        <Grid className={"grid"} size={{ xs: 12, sm: 8 }}>
          <RecentTransactions />
        </Grid>
        <Grid className={"grid"} size={{ xs: 12, sm: 4 }}>
          <TopExpenses />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
