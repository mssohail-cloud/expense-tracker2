import React from 'react';
import './App.css';
import AppHeader from './Components/AppHeader';
import Balance from './Components/Balance';
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionComponent } from './Components/TransactionComponent';
import { Transactions } from './Components/Transactions';
import { GlobalProvider } from './Context/GlobalContext';

function App() {
  return (

    <GlobalProvider>
        <AppHeader />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionComponent />
          <Transactions />

        </div>
    </GlobalProvider>
  );
}

export default App;
