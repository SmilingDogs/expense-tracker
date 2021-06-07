import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let balance = transactions.reduce((a, i) => a + i.amount, 0)

  return (
    <>
      <h4>Your Balance</h4>
      <h1 className={balance >= 0 ? 'money plus' : 'money minus'}>{balance}$</h1>
    </>
  );
};
export default Balance;
