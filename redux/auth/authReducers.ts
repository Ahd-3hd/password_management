export const setCurrentUserFulFilled = (
  state: IAuthState,
  action: { payload: ICurrentUser | null }
) => {
  state.currentUser = action.payload;
  state.isLoading = false;
  state.error = false;
};

export const setCurrentUserFulPending = (state: IAuthState) => {
  state.isLoading = true;
};

export const setCurrentUserFulRejected = (state: IAuthState) => {
  state.isLoading = false;
  state.error = true;
};
