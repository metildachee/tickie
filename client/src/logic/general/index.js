export const getType = (state, type) => {
  return state[type];
};

export const getServerURL = () => {
  return "https://tickie-server.herokuapp.com/api";
};
