import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../store/AppContext";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { userData } = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        userData.token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
};

export const AuthProtectedRoute = ({ component: Component, ...rest }) => {
	const { userData } = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        !userData.token ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  )
};
