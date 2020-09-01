import axios from "axios";

// Module name
export const NAMESPACE = "category";

// Constants
const SERVER_URL = process.env.REACT_APP_DEV_SERVER_URL;
const TOKEN = window.localStorage.getItem("token");

// Actions

export const addCategory = async (dispatch, value) => {
  value.name = value.name.toUpperCase();
  try {
    await axios.post(`${SERVER_URL}/category`, value, {
      headers: { token: TOKEN },
    });
  } catch (error) {
    console.error(error);
  }
};

// @desc Gets categories for ticket form
export const getCategories = async (dispatch) => {
  try {
    let results = await axios.get(`${SERVER_URL}/category`);
    console.log(results.data.categories);
    dispatch({
      type: "GET_CATEGORIES",
      module: NAMESPACE,
      payload: results.data.categories,
    });
  } catch (error) {
    console.error(error);
  }
};

// Initial state
export const INITIAL_STATE = {
  category: "",
  categories: [],
};

// Selectors
export const categoryExists = (value, state) => {
  return state.categories.find((cat) => cat.name === value.toUpperCase());
};
export const categories = (state) => state.categories;

// Reducer
export function reducer(state, action) {
  switch (action.type) {
    case "ADD_CATEGORY": {
      return { ...state, category: action.payload };
    }
    case "GET_CATEGORIES": {
      return { ...state, categories: action.payload };
    }
    default:
      return state;
  }
}