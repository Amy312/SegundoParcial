const types = {
    login: "login User",
    logout: "log out User",
    dark: "dark theme",
    light: "light theme"
  };
  
  
  const initialValues = {
    auth: false,
    id: 0

  };

  
  
  const taskReducer = (state, action) => {
    switch (action.type) {
      case types.login:
        return {
          ...state,
          auth: true,
          id: action.id
        };
      case types.logout:
        return {
          ...state,
          auth: false,
        };
      default:
        return state;
    }
  };
  
  export { initialValues, types };
  
  export default taskReducer;