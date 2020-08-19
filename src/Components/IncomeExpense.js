import React, { useContext } from 'react'
import { GlobalState } from '../Context/GlobalContext';

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalState);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    const expense = amounts.filter(item => item<0).reduce((acc, item) => (acc +=item), 0) * -1;


    return (
        <div className="incExpWrapper">
            <div>
                <h4>Income</h4>
    <p className="balance add"> ${income}</p>
            </div>

            <div>
                <h4>Expense</h4>
    <p className="balance sub">${expense}</p>
            </div>




            
        </div>
    );
}

export default IncomeExpense;