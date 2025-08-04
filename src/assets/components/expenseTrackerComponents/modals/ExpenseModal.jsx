import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const modalStyle = {
  width: { xs: "80%", sm: "500px" },
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  backgroundColor: "#EFEFEFD9",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

const ExpenseModal = ({
  open,
  onClose,
  balance,
  setBalance,
  expenseList,
  setExpenseList,
  addOrEdit,
}) => {
  const initialExpenseObject = { title: "", price: 0, category: "", date: "" };
  const [expenseObject, setExpenseObject] = useState(initialExpenseObject);

  const handleAddExpense = () => {
    const newErrors = [];

    if (!expenseObject.title.trim()) newErrors.push("Title is required");
    if (!expenseObject.price) newErrors.push("Price is required");
    if (!expenseObject.category.trim()) newErrors.push("Category is required");
    if (!expenseObject.date.trim()) newErrors.push("Date is required");

    if (newErrors.length === 0) {
      console.log("Submitting:", expenseObject);
      setExpenseList((prev) => [...prev, expenseObject]);
      setExpenseObject(initialExpenseObject);
      onClose();
    } else {
      const allErr = newErrors.reduce((acc, item) => acc + item, "");
      alert(allErr);
    }
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography
          sx={{
            textAlign: {
              xs: "center",
              sm: "left",
            },
            fontFamily: "Ubuntu",
            fontSize: "30px",
            color: "black",
            fontWeight: "bold",
          }}
        >
          {addOrEdit} Expenses
        </Typography>

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
            <TextField
              type="text"
              placeholder="Title"
              variant="standard"
              value={expenseObject.title}
              sx={{
                background:
                  "linear-gradient(0deg, #FBFBFB, #FBFBFB), linear-gradient(0deg, #D9D9D9, #D9D9D9), #D9D9D9",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "15px",
                width: "217px",
                height: "51px",
                "& input": {
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#919191",
                  padding: "0 16px",
                  height: "51px",
                },
                "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                  display: "none",
                },
              }}
              onChange={(e) =>
                setExpenseObject((prev) => {
                  return { ...prev, title: e.target.value };
                })
              }
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
            <TextField
              type="number"
              placeholder="Price"
              variant="standard"
              sx={{
                "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
                background:
                  "linear-gradient(0deg, #FBFBFB, #FBFBFB), linear-gradient(0deg, #D9D9D9, #D9D9D9), #D9D9D9",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "15px",
                width: "217px",
                height: "51px",
                "& input": {
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#919191",
                  padding: "0 16px",
                  height: "51px",
                },
                "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                  display: "none",
                },
              }}
              onChange={(e) =>
                setExpenseObject((prev) => {
                  return { ...prev, price: e.target.value };
                })
              }
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
            <TextField
              type="text"
              placeholder="Category"
              variant="standard"
              value={expenseObject.category}
              sx={{
                background:
                  "linear-gradient(0deg, #FBFBFB, #FBFBFB), linear-gradient(0deg, #D9D9D9, #D9D9D9), #D9D9D9",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "15px",
                width: "217px",
                height: "51px",
                "& input": {
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#919191",
                  padding: "0 16px",
                  height: "51px",
                },
                "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                  display: "none",
                },
              }}
              onChange={(e) =>
                setExpenseObject((prev) => {
                  return { ...prev, category: e.target.value };
                })
              }
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={expenseObject.date ? dayjs(expenseObject.date) : null}
                onChange={(newValue) =>
                  setExpenseObject((prev) => ({
                    ...prev,
                    date: newValue ? newValue.format("YYYY-MM-DD") : "",
                  }))
                }
                format="DD/MM/YYYY"
                slotProps={{
                  textField: {
                    variant: "standard",
                    placeholder: "dd/mm/yyyy",
                    InputProps: {
                      disableUnderline: true,
                    },
                    InputLabelProps: {
                      shrink: false,
                    },
                    sx: {
                      background:
                        "linear-gradient(0deg, #FBFBFB, #FBFBFB), linear-gradient(0deg, #D9D9D9, #D9D9D9), #D9D9D9",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "15px",
                      width: "217px",
                      height: "51px",

                      "& input": {
                        fontFamily: "'Open Sans', sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "51px", // ✅ Vertically center
                        color: "#919191",
                        padding: "0 16px",
                        height: "51px", // matches container height
                        boxSizing: "border-box", // fix for Safari
                      },

                      "& .MuiPickersInputBase-root": {
                        alignItems: "center", // ensure full input centers content
                        height: "100%",
                        marginLeft: "10px",
                      },
                    },
                  },
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(0deg, #F4BB4A, #F4BB4A), linear-gradient(0deg, #D9D9D9, #D9D9D9), #D9D9D9",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "15px",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "16px",
                textTransform: "none",
                width: "90%",
              }}
              onClick={handleAddExpense}
            >
              Add Expense
            </Button>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex" }}>
            <Button
              variant="contained"
              onClick={() => {
                setExpenseObject(initialExpenseObject);
                onClose();
              }}
              sx={{
                background:
                  "linear-gradient(0deg, #E3E3E3, #E3E3E3), linear-gradient(0deg, #D9D9D9, #D9D9D9), #D9D9D9",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "15px",
                color: "#000000",
                fontWeight: 400,
                fontSize: "16px",
                textTransform: "none",
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ExpenseModal;
