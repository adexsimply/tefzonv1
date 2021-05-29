import React from "react";
import { Redirect, Route } from "react-router-dom";
import { loadState } from "../store/localStorage";

const token = loadState();

export const TeamsRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			token ? <Component {...props} /> : <Redirect to="/login" />
		}
	/>
);
