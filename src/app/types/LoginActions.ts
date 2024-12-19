type LoginAction = {
    type: "login";
    payload: {
      username: string;
      password: string;
    };
  };
  
  type LogoutAction = {
    type: "logout";
  };
  
  type ErrorAction = {
    type: "error";
    payload: {
      error: string;
    };
  };
  
  export type LoginActions = LoginAction | LogoutAction | ErrorAction;
  