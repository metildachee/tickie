import axios from "axios";
import { Redirect } from "react-router-dom";

// Module name
export const NAMESPACE = "tickets";

// Constants
const SERVER_URL = process.env.REACT_APP_DEV_SERVER_URL;
const TOKEN = window.localStorage.getItem("token");

// Actions
export const getTickets = async (dispatch) => {
  dispatch({
    type: "GETTING_TICKETS",
    module: NAMESPACE,
  });

  try {
    let tickets = await axios.get(`${SERVER_URL}/ticket`, {
      headers: { token: TOKEN },
    });
    dispatch({
      type: "ALL_TICKETS",
      module: NAMESPACE,
      payload: tickets.data,
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: "TICKETS_FAILED",
      module: NAMESPACE,
    });
  }
};

// Updates the state with newly sorted payload
export const updateSort = async (dispatch, payload) => {
  dispatch({
    type: "UPDATE_SORT",
    module: NAMESPACE,
  });

  try {
    dispatch({
      type: "ALL_TICKETS",
      module: NAMESPACE,
      payload: payload,
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

// @desc Creates a new ticket
export const createTicket = async (dispatch, ticket) => {
  const token = window.localStorage.getItem("token");
  try {
    await axios.post(`${SERVER_URL}/ticket/create`, ticket, {
      headers: { token: token },
    });
    window.location.href = "/";
  } catch (error) {
    console.error(error);
  }
};

// Initial state
export const INITIAL_STATE = {
  isGettingTickets: false,
  tickets: [],
  categories: [],
};

// Selectors
export const gettingTickets = (state) => state.isGettingTickets;
export const tickets = (state) => state.tickets;
export const nilTickets = (state) =>
  !state.isGettingTickets && state.tickets.length === 0;
export const categories = (state) => state.categories;

// Reducer
export function reducer(state, action) {
  switch (action.type) {
    case "GETTING_TICKETS": {
      return { ...state, isGettingTickets: true };
    }
    case "ALL_TICKETS": {
      return { ...state, isGettingTickets: false, tickets: action.payload };
    }
    case "TICKETS_FAILED": {
      return { ...state, isGettingTickets: false };
    }
    case "GET_CATEGORIES": {
      return { ...state, categories: action.payload };
    }
    default:
      return state;
  }
}
