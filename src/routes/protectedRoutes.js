import React from "react";
import { Redirect, Route } from "react-router-dom";
import { loadState } from "../store/localStorage";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  // const { userData } = useContext(AppContext);
  const getToken = loadState();
  return (
    <Route
      {...rest}
      render={(props) =>
        getToken ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
};

export const AuthProtectedRoute = ({ component: Component, ...rest }) => {
	// const { userData } = useContext(AppContext);
  const getToken = loadState();
  return (
    <Route
      {...rest}
      render={(props) =>
        !getToken ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  )
};
