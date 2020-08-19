import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'


const initialState = {
    transactions: [ ]
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
            type: 'ADD_TRANSACTION', 
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