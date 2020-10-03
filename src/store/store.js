import React from "react";
import { storeReducer, initialStore } from "./../reducers";

export const StoreContext = React.createContext();

export function StoreContextProvider({ children }) {
  const [storeState, storeDispatch] = React.useReducer(
    storeReducer,
    initialStore,
  );

  return (
    <StoreContext.Provider
      value={{
        state: storeState,
        dispatch: storeDispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
