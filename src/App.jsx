import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Card from "./components/card/Card";
import Piechart from "./components/piechart/Piechart";
import TransactionList from "./components/transactionList/TransactionList";
import CustomModal from "./components/modals/CustomModal";
import IncomeModalContent from "./components/modalContents/IncomeModalContent";
import ExpenseModalContent from "./components/modalContents/ExpenseModalContent";

function App() {
  //-----------------------------------------useStates--------------------------------------------

  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? JSON.parse(storedBalance) : 5000;
  });

  const [expenseList, setExpenseList] = useState(() => {
    const storedList = localStorage.getItem("expenses");
    return storedList ? JSON.parse(storedList) : [];
  });

  const [isBalanceModalOpen, setIsBalanceModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);

  const [toBeEdited, setToBeEdited] = useState("");

  //-----------------------------------------logics--------------------------------------------

  const calculateExpense = () => {
    if (expenseList.length === 0) return 0;
    return expenseList.reduce((acc, item) => acc + Number(item.price), 0);
  };
  //-----------------------------------------useEffects--------------------------------------------
  useEffect(() => {
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [balance]);
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenseList));
  }, [expenseList]);

  return (
    <div className={styles.container}>
      <h1>Expense Tracker</h1>
      <div className={styles.cardContainer}>
        <Card
          cardTitle="Wallet Balance"
          amount={balance}
          amountColour="#9DFF5B"
          buttonText="+ Add Income"
          buttonType="incomeButton"
          setIsModalOpen={setIsBalanceModalOpen}
        ></Card>
        <Card
          cardTitle="Expenses"
          amount={calculateExpense()}
          amountColour="#F4BB4A"
          buttonText="+ Add Expense"
          buttonType="expenseButton"
          setIsModalOpen={setIsExpenseModalOpen}
        ></Card>
        <Piechart />
      </div>
      <div className={styles.transactionContainer}>
        <div>
          <h2 style={{ fontStyle: "italic" }}>Recent Transactions</h2>
          <TransactionList
            expenseList={expenseList}
            setExpenseList={setExpenseList}
            setBalance={setBalance}
            onModalOpen={() => setIsExpenseModalOpen(true)}
            setToBeEdited={setToBeEdited}
          />
        </div>
        <div>
          <h2 style={{ fontStyle: "italic" }}>Top Expenses</h2>
        </div>
      </div>
      <CustomModal isModalOpen={isBalanceModalOpen}>
        <IncomeModalContent
          balance={balance}
          setBalance={setBalance}
          onClose={() => setIsBalanceModalOpen(false)}
        />
      </CustomModal>
      <CustomModal isModalOpen={isExpenseModalOpen}>
        <ExpenseModalContent
          balance={balance}
          setBalance={setBalance}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          onClose={() => {
            setIsExpenseModalOpen(false);
            setToBeEdited("");
          }}
          toBeEdited={toBeEdited}
        />
      </CustomModal>
    </div>
  );
}

export default App;
