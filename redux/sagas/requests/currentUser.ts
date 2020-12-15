import AsyncStorage from "@react-native-async-storage/async-storage";

export function requestGetUser() {
  return AsyncStorage.getItem("currentUser");
}

export function requestSetUser(data: any) {
  return AsyncStorage.setItem("currentUser", JSON.stringify(data));
}
