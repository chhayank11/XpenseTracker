import React, { useState } from "react";

const IncomeModalContent = ({ balance, setBalance, onClose }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <input
        type="text"
        placeholder="income"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={() => {
          setBalance(balance + Number(amount));
        }}
      >
        add
      </button>
      <button onClick={onClose}>close</button>
    </div>
  );
};

export default IncomeModalContent;
