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
