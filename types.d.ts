interface CurrentUser {
  username: string | null;
  loggedIn: boolean;
  error: boolean;
  loading: boolean;
}
