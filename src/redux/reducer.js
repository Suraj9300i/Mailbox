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

export const composeReducer = (state = false, action) => {
  switch (action.type) {
    case "OPENCOMPOSE":
      return true;
    case "CLOSECOMPOSE":
      return false;
    default:
      return state;
  }
};

export const readmailReducer = (state = null, action) => {
  switch (action.type) {
    case "OPENreadmail":
      return action.payload;
    case "CLOSEreadmail":
      return action.payload;
    default:
      return state;
  }
};
