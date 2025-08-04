import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./ExpenseTracker.module.css";
import IncomeModal from "./modals/IncomeModal";
import ExpenseModal from "./modals/ExpenseModal";

const ExpenseTracker = ({
  balance,
  setBalance,
  expenseList,
  setExpenseList,
}) => {
  const [openIncomeModal, setOpenIncomeModal] = useState(false);
  const [openExpenseModal, setOpenExpenseModal] = useState(false);

  const [expenseAmount, setExpenseAmount] = useState(0);

  function calculateTotalExpense(list) {
    console.log(list);
    return list.reduce((acc, item) => acc + item.price, 0);
  }

  useEffect(() => {
    setExpenseAmount(expenseList.reduce((acc, item) => acc + item.cost, 0));
    setBalance(balance - expenseAmount);
  }, [expenseList]);
  return (
    <div>
      <Typography
        sx={{
          textAlign: { xs: "center", sm: "left" },
          fontSize: "32px",
          fontWeight: "bold",
          fontFamily: "Ubuntu",
        }}
      >
        Expense Tracker
      </Typography>

      <Box sx={{ backgroundColor: "#505050", borderRadius: "10px" }}>
        <Grid container>
          {/* income----------------------------------------------------------------------------------- */}
          <Grid size={{ xs: 12, sm: 4 }} className={styles.etgrid}>
            <div className={styles.etcomponent}>
              <Typography sx={{ fontFamily: "Ubuntu", fontSize: "30px" }}>
                Wallet Balance:{" "}
                <span
                  style={{
                    color: "#9DFF5B",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  ₹{balance}
                </span>
              </Typography>
              <Button
                sx={{
                  background:
                    "linear-gradient(90deg, #B5DC52 0%, #89E148 100%)",
                  color: "#ffffff",
                  borderRadius: "20px",
                  paddingX: 3,
                  paddingY: 1,
                  textTransform: "none",
                }}
                onClick={() => setOpenIncomeModal(true)}
              >
                + Add income
              </Button>
              <IncomeModal
                open={openIncomeModal}
                onClose={() => setOpenIncomeModal(false)}
                balance={balance}
                setBalance={setBalance}
              ></IncomeModal>
            </div>
          </Grid>
          {/* expense----------------------------------------------------------------------------------- */}
          <Grid size={{ xs: 12, sm: 4 }} className={styles.etgrid}>
            <div className={styles.etcomponent}>
              <Typography sx={{ fontFamily: "Ubuntu", fontSize: "30px" }}>
                Expenses:{" "}
                <span
                  style={{
                    color: "#F4BB4A",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  ₹{expenseAmount}
                </span>
              </Typography>
              <Button
                sx={{
                  background:
                    "linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)",
                  color: "#ffffff",
                  borderRadius: "20px",
                  paddingX: 3,
                  paddingY: 1,
                  textTransform: "none",
                }}
                onClick={() => setOpenExpenseModal(true)}
              >
                + Add Expense
              </Button>
              <ExpenseModal
                open={openExpenseModal}
                onClose={() => setOpenExpenseModal(false)}
                balance={balance}
                setBalance={setBalance}
                expenseList={expenseList}
                setExpenseList={setExpenseList}
                addOrEdit={"Add"}
              />
            </div>
          </Grid>
          {/* pie */}
          <Grid size={{ xs: 12, sm: 4 }} className={styles.etgrid}>
            <div className={styles.etcomponent}>
              <p>pie chart</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ExpenseTracker;
