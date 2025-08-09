import React, { useEffect, useState } from "react";
import styles from "./ModalContent.module.css";
import { useSnackbar } from "notistack";

const initialState = { title: "", price: "", category: "", date: "", id: "" };

const ExpenseModalContent = ({
  balance,
  setBalance,
  expenseList,
  setExpenseList,
  onClose,
  toBeEdited,
}) => {
  //-----------------useStates-----------------------------
  const [expObject, setExpObject] = useState(initialState);
  const { enqueueSnackbar } = useSnackbar();
  //------------useeffect-----------------------------------
  useEffect(() => {
    setExpObject(
      toBeEdited
        ? expenseList.find((item) => item.id === toBeEdited)
        : initialState
    );
  }, []);

  //-----------------logics--------------------------------
  function createId() {
    return Date.now() + "-" + Math.floor(Math.random() * 1000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (toBeEdited) {
      const amountToBeUpdated = 0;
      setBalance((prev) => prev + amountToBeUpdated);
      onClose();
    } else {
      if (Number(expObject.price) > balance) {
        enqueueSnackbar("Insufficient Balance", { variant: "warning" });
        return;
      }
      expObject.id = createId();
      setBalance((prev) => prev - Number(expObject.price));
      setExpenseList((prev) => [{ ...expObject }, ...prev]);
      setExpObject(initialState);
      onClose();
    }
  };
  return (
    <div>
      <p className={styles.heading}>Add Expenses</p>
      <form onSubmit={handleSubmit} className={styles.modalContentsExpense}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Title"
          value={expObject.title}
          onChange={(e) =>
            setExpObject((prev) => ({ ...prev, title: e.target.value }))
          }
          required
        />
        <input
          type="number"
          className={styles.inputField}
          placeholder="Price"
          value={expObject.price}
          onChange={(e) =>
            setExpObject((prev) => ({ ...prev, price: e.target.value }))
          }
          required
        />
        <select
          name="category"
          className={styles.inputField}
          value={expObject.category}
          onChange={(e) =>
            setExpObject((prev) => ({ ...prev, category: e.target.value }))
          }
          style={{ color: expObject.category === "" ? "#919191" : "#282727" }}
          required
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="travel">Travel</option>
        </select>
        <input
          type="date"
          style={{ color: expObject.date === "" ? "#919191" : "#282727" }}
          className={styles.inputField}
          value={expObject.date}
          onChange={(e) =>
            setExpObject((prev) => ({ ...prev, date: e.target.value }))
          }
        />

        <button type="submit" className={styles.actionButton}>
          add
        </button>
        <button className={styles.closeButton} onClick={onClose}>
          close
        </button>
      </form>
    </div>
  );
};

export default ExpenseModalContent;
