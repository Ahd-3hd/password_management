interface password {
  title: string;
  pswd: string;
}

interface CurrentUser {
  username: string | null;
  loggedIn: boolean;
  error: boolean;
  loading: boolean;
  passwords: password[];
}
