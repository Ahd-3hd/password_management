export const setCurrentUserFulFilled = (
  state: IInitialState,
  action: { payload: ICurrentUser }
) => {
  state.currentUser = action.payload;
  state.isLoading = false;
  state.error = false;
};

export const setCurrentUserFulPending = (state: IInitialState) => {
  state.isLoading = true;
};

export const setCurrentUserFulRejected = (state: IInitialState) => {
  state.isLoading = false;
  state.error = false;
};
