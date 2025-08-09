import React from "react";
import styles from "./TransactionCard.module.css";

const TransactionCard = ({
  item,
  expenseList,
  setExpenseList,
  setBalance,
  onModalOpen,
  setToBeEdited,
}) => {
  const handleDelete = () => {
    setBalance((prev) => prev + Number(item.price));
    setExpenseList((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleEdit = () => {
    setToBeEdited(item.id);
    onModalOpen();
  };
  return (
    <div>
      <div className={styles.cardContainer}>
        <div>icon</div>
        <div className={styles.childContainer}>
          <div className={styles.titleDate}>
            <div>{item.title}</div>
            <div>{item.date}</div>
          </div>
          <div className={styles.amountDeleteEdit}>
            <div>₹{item.price}</div>
            <div className={styles.deleteEdit}>
              <button onClick={handleDelete}>delete</button>
              <button onClick={handleEdit}>edit</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TransactionCard;
