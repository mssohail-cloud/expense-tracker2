import React, { useContext } from 'react';
import { GlobalState } from '../Context/GlobalContext';
import { TrasactionLayout } from './TrasactionLayout';

export const TransactionComponent = () => {


    const { transactions } = useContext(GlobalState);

    //console.log({ transactions });

    return (
        <>

            <h3>History</h3>
            <ul className="trasaction-list">
                {transactions.map(transaction => (<TrasactionLayout key={transaction.id} transaction={transaction}/>))}
            </ul>

        </>
    )
}

