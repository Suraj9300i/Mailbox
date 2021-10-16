export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "SIGNinUSER":
      return action.payload;
    case "SIGNoutUSER":
      return null;
    default:
      return state;
  }
};
