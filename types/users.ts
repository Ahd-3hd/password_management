interface ICurrentUser {
  username: string;
  password: string;
}
interface IAuthState {
  currentUser: ICurrentUser | null;
  isLoading: boolean;
  error: boolean;
}
