import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Card from "./components/card/Card";
import Piechart from "./components/piechart/Piechart";
import TransactionList from "./components/transactionList/TransactionList";

function App() {
  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? JSON.parse(storedBalance) : 5000;
  });

  const [expenseList, setExpenseList] = useState(() => {
    const storedList = localStorage.getItem("expenseList");
    return storedList ? JSON.parse(storedList) : [];
  });

  const calculateExpense = () => {
    expenseList.reduce((acc, item) => acc + Number(item.price), 0);
  };

  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [balance]);
  useEffect(() => {
    localStorage.setItem("expenseList", JSON.stringify(expenseList));
  }, [expenseList]);
  return (
    <div className={styles.container}>
      <h1>Expense Tracker</h1>
      <div className={styles.cardContainer}>
        <Card
          cardTitle={"Wallet Balance"}
          amount={balance}
          amountColour="#9DFF5B"
          buttonText="+ Add Income"
          buttonStyle="incomeButton"
        ></Card>
        <Card
          cardTitle={"Expenses"}
          amount={calculateExpense()}
          amountColour="#F4BB4A"
          buttonText={"+ Add Expense"}
          buttonStyle={"expenseButton"}
        ></Card>
        <Piechart />
      </div>
      <div className={styles.transactionContainer}>
        <div>
          <h2 style={{ fontStyle: "italic" }}>Recent Transactions</h2>
          <TransactionList />
        </div>
        <div>
          <h2 style={{ fontStyle: "italic" }}>Top Expenses</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
