import { useEffect, useState } from "react";
import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import ExpenseTracker from "./assets/components/expenseTrackerComponents/ExpenseTracker";
import RecentTransactions from "./assets/components/recentTransactionComponents/RecentTransactions";
import TopExpenses from "./assets/components/topExpensesComponents/TopExpenses";

function App() {
  const [balance, setBalance] = useState(() => {
    const stored = localStorage.getItem("balance");
    return stored ? JSON.parse(stored) : 5000;
  });

  const [expenseList, setExpenseList] = useState(() => {
    const stored = localStorage.getItem("expenseList");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [balance]);

  useEffect(() => {
    localStorage.setItem("expenseList", JSON.stringify(expenseList));
  }, [expenseList]);

  return (
    <div style={{ margin: "10px" }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <ExpenseTracker
            balance={balance}
            setBalance={setBalance}
            expenseList={expenseList}
            setExpenseList={setExpenseList}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <RecentTransactions />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TopExpenses />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
