export const getCurrentUser = (
  state: CurrentUser,
  action: { payload: string }
) => {
  state.username = action.payload;
  state.loading = false;
};
