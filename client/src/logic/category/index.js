import axios from "axios";
import { getServerURL } from "../general";

// Module name
export const NAMESPACE = "category";

// Constants
const SERVER_URL = getServerURL();
const TOKEN = window.localStorage.getItem("token");

// Actions
export const addCategory = async (dispatch, value) => {
  value.name = value.name.charAt(0).toUpperCase() + value.name.substring(1);
  try {
    let results = await axios.post(`${SERVER_URL}/category`, value, {
      headers: { token: TOKEN },
    });
    dispatch({
      type: "ADD_CATEGORY",
      module: NAMESPACE,
      payload: results.data.category,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = async (dispatch) => {
  try {
    let results = await axios.get(`${SERVER_URL}/category`);
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
      return { ...state, categories: [...state.categories, action.payload] };
    }
    case "GET_CATEGORIES": {
      return { ...state, categories: action.payload };
    }
    default:
      return state;
  }
}
