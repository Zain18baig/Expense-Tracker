import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Transactions } from "./Transactions";

export const TransactionList = () => {
  const {transations} = useContext(GlobalContext);

  
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transations.map(transations => (<Transactions key = {transations.id} transations = {transations}/>))}
    
      </ul>
    </div>
  );
};
