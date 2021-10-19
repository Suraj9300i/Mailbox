export const signInUser = (user) => {
  return {
    type: "SIGNinUSER",
    payload: user,
  };
};

export const signOutUser = () => {
  return {
    type: "SIGNoutUSER",
  };
};

export const openCompose = () => {
  return {
    type: "OPENCOMPOSE",
  };
};

export const closeCompose = () => {
  return {
    type: "CLOSECOMPOSE",
  };
};
