import React, { useContext } from 'react'
import { GlobalContext } from "./context/GlobalState";

const Transaction = ({ t }) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = t.amount < 0 ? '-' : '+';
    return (
        <li className={t.amount > 0 ? 'plus': 'minus'} key={t.id}>
          <div>{t.text}</div>
          <div>{sign}{Math.abs(t.amount)}$</div>
          <button className="delete-btn" onClick={() => deleteTransaction(t.id)}>x</button>
        </li>
    )
}
export default Transaction
