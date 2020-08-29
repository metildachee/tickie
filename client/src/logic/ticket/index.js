import axios from "axios";

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

// Initial state
export const INITIAL_STATE = {
  isGettingTickets: false,
  tickets: [],
};

// Selectors
export const gettingTickets = (state) => state.isGettingTickets;
export const tickets = (state) => state.tickets;
export const nilTickets = (state) =>
  !state.isGettingTickets && tickets.length === 0;

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
    default:
      return state;
  }
}
