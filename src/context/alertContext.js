import React, { useReducer } from "react";
import AlertReducer from "../reducers/alertReducer";

export const AlertContext = React.createContext();

const AlertContextProvider = (props) => {
  const [state, dispatch] = useReducer(AlertReducer, null);

  const showAlert = (message, type) => {
    dispatch({ type: "SET_ALERT", alert: { message, type } });

    setTimeout(() => {
      dispatch({ type: "REMOVE_ALERT" });
    }, 2000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        showAlert,
      }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
