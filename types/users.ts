interface ICurrentUser {
  username: string;
  password: string;
}
interface IInitialState {
  currentUser: ICurrentUser | null;
  isLoading: boolean;
  error: boolean;
}
