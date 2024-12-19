//Reducer para casos de um novo formulario de login sem usar o useForm :

import { LoginActions } from "../types/LoginActions";

interface LoginState {
  username: string;
  password: string;
  isLoggedIn: boolean;
  error?: string;
}

export const loginReducer = (
  state: LoginState,
  action: LoginActions
): LoginState => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        isLoggedIn: true,
        error:"",
      };
    case "logout":
      return {
        username: "",
        password: "",
        isLoggedIn: false,
        error: "",
      };
    case "error":
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
