import React, { createContext, useReducer } from "react";
import * as authentication from "../../logic/authentication";
import logger from "./logger";

const initialState = {
  ...authentication.INITIAL_STATE,
};

export const store = createContext(initialState);
const { Provider } = store;

const GlobalStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    // handle thunks
    if (typeof action === "function" && typeof dispatch === "function") {
      action(dispatch);
      return state;
    }
    // otherwise, it's a regular reducer.
    const nextState = {
      [authentication.NAMESPACE]: authentication.reducer(state, action),
    }[action.module];
    if (nextState === undefined) {
      return state;
    }

    logger(state, action, nextState);

    return nextState;
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default GlobalStoreProvider;
