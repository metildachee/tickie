import axios from "axios";

// Module name
export const NAMESPACE = "category";

// Constants
const SERVER_URL = process.env.REACT_APP_DEV_SERVER_URL;
const TOKEN = window.localStorage.getItem("token");

// Actions
export const addCategory = async (dispatch) => {
  //   try {
  //     let results = await axios.get(`${SERVER_URL}/auth/user/agents`, {
  //       headers: { token: TOKEN },
  //     });
  //     dispatch({
  //       type: "ALL_AGENTS",
  //       module: NAMESPACE,
  //       payload: results.data.users,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
};

const addCategory = (dispatch, value) => {
  // do a post to add the new category
  // call to fetch all the categories
  // do a dispatch to fetch all the categories with the get payload
};

// Initial state
export const INITIAL_STATE = {
  category: "",
};

// Selectors
export const checkCategoryExists = (value, state) => {
  return state.categories.includes(value.toUpperCase());
};

// Reducer
export function reducer(state, action) {
  switch (action.type) {
    case "ADD_CATEGORY": {
      return { ...state, category: action.payload };
    }
    default:
      return state;
  }
}
