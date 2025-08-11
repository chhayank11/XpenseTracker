import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Pagination = ({ currPage, setCurrPage, totalPages }) => {
  const handleLeft = () => {
    setCurrPage(currPage - 1);
  };
  const handleRight = () => {
    setCurrPage(currPage + 1);
  };
  return (
    <div className={styles.paginationWrapper}>
      <button
        className={styles.button}
        disabled={currPage === 1}
        onClick={handleLeft}
      >
        <GoArrowLeft />
      </button>
      <p className={styles.page}>{currPage}</p>
      <button
        className={styles.button}
        disabled={currPage === totalPages}
        onClick={handleRight}
      >
        <GoArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
