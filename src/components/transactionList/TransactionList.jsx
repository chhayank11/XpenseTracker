import React from "react";
import styles from "./TransactionList.module.css";
import TransactionCard from "../transactionCard/TransactionCard";

const TransactionList = ({
  expenseList,
  setExpenseList,
  setBalance,
  onModalOpen,
  setToBeEdited,
}) => {
  return (
    <div className={styles.listContainer}>
      {expenseList.length === 0 ? (
        <p style={{ color: "black" }}>No transactions!</p>
      ) : (
        expenseList.map((item, idx) => (
          <TransactionCard
            key={idx}
            item={item}
            expenseList={expenseList}
            setExpenseList={setExpenseList}
            setBalance={setBalance}
            onModalOpen={onModalOpen}
            setToBeEdited={setToBeEdited}
          />
        ))
      )}
    </div>
  );
};

export default TransactionList;
