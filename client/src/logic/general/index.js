export const getType = (state, type) => {
  return state[type];
};

export const getServerURL = () => {
  return "http://tickie-server.herokuapp.com/api";
};
