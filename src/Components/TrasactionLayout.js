import React, { useContext } from 'react'
import { GlobalState } from '../Context/GlobalContext';

export const TrasactionLayout = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalState);

    const transationSign = transaction.amount<0? '-' :'+';

    return (
        <li className={transaction.amount<0?'minus':'plus'}>
            {transaction.text} <span>{transationSign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
        </li>
    )
}
