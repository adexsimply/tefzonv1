import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../store/AppContext";

export const WalletRoute = ({ component: Component, ...rest }) => {
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

export const LeaguesRoute = ({ component: Component, ...rest }) => {
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

export const JoinLeagueRoute = ({ component: Component, ...rest }) => {
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

export const DashboardRoute = ({ component: Component, ...rest }) => {
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

export const TeamsRoute = ({ component: Component, ...rest }) => {
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

export const SubAndTransferRoute = ({ component: Component, ...rest }) => {
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

export const FixturesRoute = ({ component: Component, ...rest }) => {
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

export const GameweekRoute = ({ component: Component, ...rest }) => {
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

export const LoginRoute = ({ component: Component, ...rest }) => {
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

export const RegisterRoute = ({ component: Component, ...rest }) => {
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
