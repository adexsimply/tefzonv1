import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Homepage from "../pages/Homepage";
import RegisterPage from "../pages/Auth/Register";
import SigninPage from "../pages/Auth/Signin";
import ConfirmPage from "../pages/Auth/Confirm";
import DashboardPage from "../pages/Dashboard";
import TeamsPage from "../pages/Teams";

const Routes = () => {
	const history = useHistory();
	return (
		<BrowserRouter history={history}>
			<Switch>
				<Route path="/" exact key="home" component={Homepage} />
				<Route path="/register" exact key="register" component={RegisterPage} />
				<Route path="/login" exact key="signin" component={SigninPage} />
				<Route
					path="/register/confirm-user"
					exact
					key="confirm"
					component={ConfirmPage}
				/>
				<Route
					path="/dashboard"
					exact
					key="dashboard"
					component={DashboardPage}
				/>
				<Route path="/teams" exact key="teams" component={TeamsPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
