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
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
    </>
  );
};
export default AddTransaction;
