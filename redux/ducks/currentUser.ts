export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const getCurrentUser = () => ({
  type: GET_CURRENT_USER,
});

export const setCurrentUser = (currentUser: ICurrentUser) => ({
  type: SET_CURRENT_USER,
  currentUser,
});

const initialState = {
  username: null,
  loggedIn: false,
};

// reducer

export default (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const { currentUser } = action;
      return { ...state, currentUser };
    default:
      return state;
  }
};
