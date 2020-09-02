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

export const updateTicket = async (
  dispatch,
  ticket,
  agent,
  priority,
  status
) => {
  const TOKEN = window.localStorage.getItem("token");
  try {
    let newTicket = await axios.put(
      `${SERVER_URL}/ticket/update/open`,
      {
        _id: ticket._id,
        priority,
        assigned_to: agent,
        status,
      },
      {
        headers: { token: TOKEN },
      }
    );
    dispatch({
      type: "UPDATE_TICKETS",
      module: NAMESPACE,
      payload: newTicket.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const assignAgent = (dispatch, id) => {
  dispatch({
    type: "ASSIGN_AGENT",
    module: NAMESPACE,
    payload: id,
  });
};

export const assignPriority = (dispatch, priority) => {
  dispatch({
    type: "ASSIGN_PRIORITY",
    module: NAMESPACE,
    payload: priority,
  });
};

export const assignStatus = (dispatch, status) => {
  dispatch({
    type: "ASSIGN_STATUS",
    module: NAMESPACE,
    payload: status,
  });
};

// Initial state
export const INITIAL_STATE = {
  isGettingTickets: false,
  tickets: [],
  agent: "",
  priority: "",
  status: "",
};

// Selectors
export const gettingTickets = (state) => state.isGettingTickets;
export const tickets = (state) => state.tickets;
export const nilTickets = (state) =>
  !state.isGettingTickets && state.tickets.length === 0;
export const assignedAgent = (state) => state.agent;
export const assignedPriority = (state) => state.priority;
export const assignedStatus = (state) => state.status;
export const getClosedTickets = (state) =>
  state.tickets.filter(
    (tic) => tic.status === "Resolved" || tic.status === "Archived"
  );
export const getOpenTickets = (state) =>
  state.tickets.filter((tic) => tic.status === "Open");
export const getAssignedTickets = (state) =>
  state.tickets.filter((tic) => tic.status === "Assigned");
export const getWIPTickets = (state) =>
  state.tickets.filter((tic) => tic.status === "In-progress");

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
    case "ASSIGN_AGENT": {
      return { ...state, agent: action.payload };
    }
    case "ASSIGN_PRIORITY": {
      return { ...state, priority: action.payload };
    }
    case "ASSIGN_STATUS": {
      return { ...state, status: action.payload };
    }
    case "UPDATE_TICKETS": {
      let tickets = state.tickets.map((tic) =>
        tic._id === action.payload._id ? action.payload : tic
      );
      console.log(tickets);
      return { ...state, tickets: tickets };
    }
    default:
      return state;
  }
}
