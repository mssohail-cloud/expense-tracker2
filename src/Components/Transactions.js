import React, {useState, useContext} from 'react';
import { GlobalState } from '../Context/GlobalContext';


export const Transactions = () => {

    const { addTransaction } = useContext(GlobalState);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random()* 100000000), 
            text, 
            amount: +amount,     
        }

        addTransaction(newTransaction);

    }

    return (
        <>
        <h3>Add New Transaction</h3>
        <form onSubmit={onSubmit}>
        <div className="form-controls">
            <label htmlFor="text" >Purpose of Transaction</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value) } placeholder="Enter Text...." />
        </div>

        <div className="form-control">
         <label htmlFor="amount">Amount <br />
         (Put + for Income and - for Expense) 
         </label>
         <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount....." /> 

           <button className="btn">Add Transaction</button> 
            </div> 
         </form>
                       
        </>
    )
}
