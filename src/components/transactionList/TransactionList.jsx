import React, { useEffect, useState } from "react";
import styles from "./TransactionList.module.css";
import TransactionCard from "../transactionCard/TransactionCard";
import Pagination from "../pagination/Pagination";

const TransactionList = ({
  expenseList,
  setExpenseList,
  setBalance,
  onModalOpen,
  setToBeEdited,
}) => {
  //--------------------usestates------------------------
  const [currPage, setCurrPage] = useState(1);
  const [active3, setActive3] = useState([]);
  const perPage = 3;
  const totalPages = Math.ceil(expenseList.length / perPage);

  //---------------------useEffects---------------------
  useEffect(() => {
    if (totalPages < currPage && currPage > 1) {
      setCurrPage((prev) => prev - 1);
    }
  }, [totalPages]);
  useEffect(() => {
    setActive3(
      expenseList.slice(currPage * perPage - perPage, currPage * perPage)
    );
  }, [currPage, expenseList]);
  //-----------------------------------------------------
  return (
    <div className={styles.listContainer}>
      {expenseList.length === 0 ? (
        <p style={{ color: "black" }}>No transactions!</p>
      ) : (
        active3.map((item, idx) => (
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
      {totalPages > 1 && (
        <Pagination
          currPage={currPage}
          setCurrPage={setCurrPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default TransactionList;
