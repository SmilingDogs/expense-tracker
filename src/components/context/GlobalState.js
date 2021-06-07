import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./Appreducer";

//* create initialState
//! 1 способ передать стейт всем - это Редакс,  2 -ой: это Context Provider. Здесь будет 2 способ!

const initialState = {
  transactions: localStorage.getItem("transactions")
    ? JSON.parse(localStorage.getItem("transactions"))
    : [],
};
//* create Context
export const GlobalContext = createContext(initialState);

//* создаем аналог Стора(редакса) - компонент GlobalContextProvider, в который необходимо обернуть все приложение чтобы все компоненты получили доступ к (стейт)

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state]); //* useEffect записывает новые данные в локалСторедж после каждого изенения стейта
  //* now we need some Actions

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions, //! передаем Стейт в Провайдер, чтобы использовать в разных компонентах
        deleteTransaction, //! ТОчно также - передаем функции в Провайдер
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
//todo <GlobalContext.Provider> берется из названия context (GlobalContext в данном случае) + .Provider - технический компонент
