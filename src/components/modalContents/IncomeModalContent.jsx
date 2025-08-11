import React, { useState } from "react";
import styles from "./ModalContent.module.css";
import { useSnackbar } from "notistack";

const IncomeModalContent = ({ balance, setBalance, onClose }) => {
  const [amount, setAmount] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const handleAdd = (e) => {
    e.preventDefault();
    if (!amount) {
      enqueueSnackbar("Please enter some amount", {
        variant: "warning",
      });
      return;
    }
    setBalance(balance + Number(amount));
    onClose();
  };
  return (
    <div>
      <p className={styles.heading}>Add Balance</p>
      <form onSubmit={handleAdd} className={styles.modalContentsIncome}>
        <input
          className={styles.inputField}
          type="number"
          placeholder="Income Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className={styles.actionButton} type="submit">
          Add Balance
        </button>
        <button className={styles.closeButton} onClick={onClose}>
          close
        </button>
      </form>
    </div>
  );
};

export default IncomeModalContent;
