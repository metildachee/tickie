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
    console.log(results.data);
    dispatch({
      type: "ALL_AGENTS",
      module: NAMESPACE,
      payload: results.data.users,
    });
  } catch (error) {
    console.error(error);
  }
};

// Initial state
export const INITIAL_STATE = {
  agents: [],
};

// Selectors
export const agents = (state) => state.agents;

// Reducer
export function reducer(state, action) {
  switch (action.type) {
    case "ALL_AGENTS": {
      return { ...state, agents: action.payload };
    }
    default:
      return state;
  }
}
