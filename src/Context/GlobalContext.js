import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'


const initialState = {
    transactions: [

        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }

    ]
};

//creating global context.

export const GlobalState = createContext(initialState);

//create global provider. 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

//adding action to delete transaction.

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION', 
            payload:id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'DELETE_TRANSACTION', 
            payload:transaction
        });
    }

    return (
        <GlobalState.Provider value={{
             transactions: state.transactions,
             deleteTransaction,
             addTransaction
             }}>
            {children}
        </GlobalState.Provider>
    )
}