import { useState } from "react";
import { Header } from "./componenets/Header";
import { Balance } from "./componenets/Balance";
import './App.css'
import { IncomeExpenses } from "./componenets/IncomeExpenses";
import { TransactionList } from "./componenets/TransactionList";
import { AddTransaction } from "./componenets/AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
