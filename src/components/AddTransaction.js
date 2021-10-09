import React, { useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const AddTransaction = () => {
 const { addTransaction }  = useContext(GlobalContext)
 const [text, setText] = useState('');
 const [amount, setAmount] = useState(1);

 const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ id: Math.floor(Math.random() * 100000000), text, amount: +amount});
    setText('');
    setAmount(1);
 }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" id="text" placeholder="...details" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className={amount > 0 ? "btn income" : "btn expense"} type="submit">{ amount > 0 ? "Add income" : "Add expense"}</button>
      </form>
    </>
  );
};
export default AddTransaction;
