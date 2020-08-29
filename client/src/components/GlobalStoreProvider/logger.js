export default function logger(state, action, nextState) {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  if (typeof action === "function") {
    return;
  }
  console.group(`MODULE: ${action.module}\nACTION: ${action.type}`);
  console.log("PREV", state);
  console.log("NEXT", nextState);
  console.groupEnd(`MODULE: ${action.module}\nACTION: ${action.type}`);
}
