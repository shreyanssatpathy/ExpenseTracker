import React from 'react';
import './App.css';



// import components
import Header from "./components/header"
import Balance from "./components/balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import AddTransactionList from "./components/AddTransactionList"

function App() {


  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransactionList />

    </div>
  );
}

export default App;
