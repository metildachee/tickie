import axios from "axios";

// Module name
export const NAMESPACE = "users";

// Constants
const SERVER_URL = process.env.REACT_APP_DEV_SERVER_URL;
const TOKEN = window.localStorage.getItem("token");

// Actions
export const getAgents = async (dispatch) => {
  try {
    let results = await axios.get(`${SERVER_URL}/auth/user/agents`, {
      headers: { token: TOKEN },
    });
    dispatch({
      type: "ALL_AGENTS",
      module: NAMESPACE,
      payload: results.data.users,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = async (dispatch) => {
  try {
    let results = await axios.get(`${SERVER_URL}/auth/users`, {
      headers: { token: TOKEN },
    });
    dispatch({
      type: "ALL_USERS",
      module: NAMESPACE,
      payload: results.data.users,
    });
  } catch (error) {
    console.error(error);
  }
};

export const addAccount = async (dispatch, user) => {
  try {
    let results = await axios.post(`${SERVER_URL}/auth/register`, user);
    console.log(results);
    dispatch({
      type: "ADD_ACCOUNT",
      module: NAMESPACE,
      payload: results.data.user,
    });
  } catch (error) {
    console.error(error);
  }
};

export const checkEmailExists = (value, state) => {
  return state.users.find((user) => user.email === value);
};
export const passwordsSame = (pwd1, pwd2) => pwd1 === pwd2;

// Initial state
export const INITIAL_STATE = {
  agents: [],
  users: [],
};

// Selectors
export const agents = (state) => state.agents;
export const getFullName = (state) => `${state.user.fname} ${state.user.lname}`;
export const getEmail = (state) => state.user.email;
export const getUserID = (state) => state.user._id;
export const getUserType = (state) => state.user.type;
export const allUsers = (state) => state.users;

// Reducer
export function reducer(state, action) {
  switch (action.type) {
    case "ALL_AGENTS": {
      return { ...state, agents: action.payload };
    }
    case "ALL_USERS": {
      return { ...state, users: action.payload };
    }
    default:
      return state;
  }
}
