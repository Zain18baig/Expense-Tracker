import React, {useContext} from 'react'
import { GlobalContext } from "../Context/GlobalState";

export const Transactions = ({transations}) => {
  const {deleteTransaction} = useContext(GlobalContext);
    const sign = transations.amount < 0 ? '-' : '+';
  return (
    <li className={transations.amount < 0 ? 'minus' : 'plus'}>
    {transations.text} <span>{sign}${Math.abs(transations.amount)}</span>
    <button onClick={() => deleteTransaction(transations.id)} className="delete-btn">x</button>
  </li>
  )
}
