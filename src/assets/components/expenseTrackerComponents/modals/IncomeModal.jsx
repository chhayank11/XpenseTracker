import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";

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

const IncomeModal = ({ open, onClose, balance, setBalance }) => {
  const [amount, setAmount] = useState(0);
  const handleAddIncome = (e) => {
    setBalance(balance + Number(e));
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
          Add Balance
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: "20px",
            color: "black",
          }}
        >
          <TextField
            type="number"
            placeholder="Income Amount"
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
            onChange={(e) => setAmount(e.target.value)}
          />
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
            }}
            onClick={() => {
              if (amount !== 0) {
                handleAddIncome(amount);
                setAmount(0);
                onClose();
              }
            }}
          >
            Add Balance
          </Button>

          <Button
            variant="contained"
            onClick={onClose}
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
        </Box>
      </Box>
    </Modal>
  );
};

export default IncomeModal;
