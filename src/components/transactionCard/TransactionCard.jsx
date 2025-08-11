import React from "react";
import styles from "./TransactionCard.module.css";
import { PiPizza, PiGift } from "react-icons/pi";
import { BsSuitcase2 } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

import { MdOutlineEdit } from "react-icons/md";

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
        <div className={styles.icon}>
          {item.category === "food" ? <PiPizza /> : <></>}
          {item.category === "entertainment" ? <PiGift /> : <></>}
          {item.category === "travel" ? <BsSuitcase2 /> : <></>}
        </div>
        <div className={styles.childContainer}>
          <div className={styles.titleDate}>
            <div>{item.title}</div>
            <div style={{ color: "#9B9B9B" }}>{item.date}</div>
          </div>
          <div className={styles.amountDeleteEdit}>
            <div style={{ color: "#F4BB4A", fontWeight: "bold" }}>
              ₹{item.price}
            </div>
            <div className={styles.deleteEdit}>
              <button
                className={styles.button}
                style={{ background: "#FF3E3E" }}
                onClick={handleDelete}
              >
                <TiDelete />
              </button>
              <button
                className={styles.button}
                style={{ background: "#F4BB4A" }}
                onClick={handleEdit}
              >
                <MdOutlineEdit />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default TransactionCard;
