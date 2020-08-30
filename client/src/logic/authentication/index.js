import { navigate } from "hookrouter";
import axios from "axios";

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

export const getUser = async (dispatch) => {
  const token = window.localStorage.getItem("token");
  try {
    let results = await axios.get(
      `${process.env.REACT_APP_DEV_SERVER_URL}/auth/user`,
      { headers: { token: token } }
    );
    dispatch({
      type: "SET_USER",
      module: NAMESPACE,
      payload: results.data.user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = (dispatch, token) => {
  dispatch({ type: "CHECKING", module: NAMESPACE });
  window.localStorage.setItem(LOCALSTORAGE_KEY, token);
  dispatch({
    type: "LOGIN",
    module: NAMESPACE,
  });
  getUser(dispatch);
  navigate("/");
};

export const checkToken = (dispatch) => {
  dispatch({ type: "CHECKING", module: NAMESPACE });

  const token = window.localStorage.getItem(LOCALSTORAGE_KEY);
  if (token && token.length > 0) {
    dispatch({ type: "LOGIN", module: NAMESPACE });
    getUser(dispatch);
  }
};

// Initial state
export const INITIAL_STATE = {
  isCheckingLoginStatus: false,
  isAuth: false,
  user: {},
};

// Selectors
export const isChecking = (state) => state.isCheckingLoginStatus;
export const isAuth = (state) => state.isAuth;
export const isAdmin = (state) => state.user.type === "Admin";
export const isClient = (state) => state.user.type === "Client";
export const isAgent = (state) => state.user.type === "Agent";

// Reducer
export function reducer(state, action) {
  switch (action.type) {
    case "CHECKING": {
      return { ...state, isChecking: true };
    }
    case "LOGOUT": {
      return { ...state, isChecking: false, isAuth: false };
    }
    case "LOGIN": {
      return { ...state, isChecking: false, isAuth: true };
    }
    case "SET_USER": {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
}
