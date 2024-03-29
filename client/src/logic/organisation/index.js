import axios from "axios";
import { getServerURL } from "../general";

// Module name
export const NAMESPACE = "organisation";

// Constants
const SERVER_URL = getServerURL();
const TOKEN = window.localStorage.getItem("token");

// Actions

export const addOrganisation = async (dispatch, value) => {
  console.log(value);
  try {
    let org = await axios.post(
      `${SERVER_URL}/org`,
      { name: formatName(value.name), description: value.description },
      {
        headers: { token: TOKEN },
      }
    );
    dispatch({
      type: "ADD_ORGANISATIONS",
      module: NAMESPACE,
      payload: org.data,
    });
  } catch (error) {
    console.error(error);
  }
};

// @desc Gets organisations
export const getOrganisations = async (dispatch) => {
  try {
    let results = await axios.get(`${SERVER_URL}/org`);
    dispatch({
      type: "GET_ORGANISATIONS",
      module: NAMESPACE,
      payload: results.data,
    });
  } catch (error) {
    console.error(error);
  }
};

// Initial state
export const INITIAL_STATE = {
  organisations: [],
};

// Helper function
const formatName = (value) => {
  return value
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};

// Selectors
export const organisationExists = (value, state) => {
  return state.organisations.find((org) => org.name === formatName(value));
};
export const organisations = (state) => state.organisations;

// Reducer
export function reducer(state, action) {
  switch (action.type) {
    case "ADD_ORGANISATIONS": {
      return {
        ...state,
        organisations: [...state.organisations, action.payload],
      };
    }
    case "GET_ORGANISATIONS": {
      return { ...state, organisations: action.payload };
    }
    default:
      return state;
  }
}
