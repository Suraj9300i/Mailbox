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

export const openReadmail = (email) => {
  return {
    type: "OPENreadmail",
    payload: email,
  };
};

export const closeReadmail = () => {
  return {
    type: "CLOSEreadmail",
    payload: null,
  };
};
