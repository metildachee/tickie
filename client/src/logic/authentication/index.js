import { navigate } from "hookrouter";

// Module name
export const NAMESPACE = "authentication";

// Constants
const LOCALSTORAGE_KEY = "token";

// Actions
export const logout = (dispatch) => {
  window.localStorage.removeItem(LOCALSTORAGE_KEY);
  dispatch({
    type: "LOGOUT",
    module: NAMESPACE,
  });
  navigate("login");
};

export const login = (dispatch, token) => {
  dispatch({ type: "CHECKING", module: NAMESPACE });
  window.localStorage.setItem(LOCALSTORAGE_KEY, token);
  dispatch({
    type: "LOGIN",
    module: NAMESPACE,
  });
  navigate("/");
};

export const checkToken = (dispatch) => {
  dispatch({ type: "CHECKING", module: NAMESPACE });

  const token = window.localStorage.getItem(LOCALSTORAGE_KEY);
  if (token && token.length > 0) {
    dispatch({ type: "LOGIN", module: NAMESPACE });
  }
};

// Initial state
export const INITIAL_STATE = {
  isCheckingLoginStatus: false,
  isAuth: false,
};

// Selectors
export const isChecking = (state) => state.isChecking;
export const isAuth = (state) => state.isAuth;

// Reducer
export function reducer(state, action) {
  switch (action.type) {
    case "CHECKING": {
      return { ...state, isChecking: true };
    }
    case "LOGOUT": {
      return { isChecking: false, isAuth: false };
    }
    case "LOGIN": {
      return { isChecking: false, isAuth: true };
    }
    default:
      return state;
  }
}
