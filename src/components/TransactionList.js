import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const listItems = transactions.map((t) => <Transaction key={t.id} t={t} />);
  return (
    <>
      <h3>History</h3>
      <ul className="list">{listItems}</ul>
    </>
  );
};
export default TransactionList;
