import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
  transations: [
  ],
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state , dispatch] = useReducer (AppReducer , initialState);
    function deleteTransaction (id) {
      dispatch({
        type : "DELETE_TRANSACTION"
        , payload : id
      });
    }

    function addTransaction (transations) {
      dispatch({
        type : "ADD_TRANSACTION"
        , payload : transations
      });
    }
return (<GlobalContext.Provider value={{
    transations:state.transations,
    deleteTransaction,
    addTransaction
}}>
    {children}
</GlobalContext.Provider>)
}