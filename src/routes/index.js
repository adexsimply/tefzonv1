import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import Homepage from "../pages/Homepage";
import RegisterPage from "../pages/Auth/Register";
import SigninPage from "../pages/Auth/Signin";
import ForgotPasswordPage from "../pages/Auth/ForgotPassword";
import ResetPasswordPage from "../pages/Auth/ResetPassword";
import ConfirmPage from "../pages/Auth/Confirm";
import DashboardPage from "../pages/Dashboard";
import TeamsPage from "../pages/Teams";
import TeamsCaptainPage from "../pages/Teams/TeamCaptain";
import TeamsNamePage from "../pages/Teams/NameTeam";
import SaveTeamPage from "../pages/Teams/SaveTeam";
import ComingSoonPage from "../pages/Error/ComingSoon";
import NotFoundPage from "../pages/Error/NotFound";

const Routes = () => {
	let history = useHistory();
	return (
		<BrowserRouter history={history}>
			<Switch>
				<Route path="/" exact key="home" component={Homepage} />
				<Route path="/register" exact key="register" component={RegisterPage} />
				<Route path="/login" exact key="signin" component={SigninPage} />
				<Route
					path="/forgot-password"
					exact
					key="forgot-password"
					component={ForgotPasswordPage}
				/>
				<Route
					path="/reset-password"
					exact
					key="reset-password"
					component={ResetPasswordPage}
				/>
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
				<Route path="/prizes" component={ComingSoonPage} />
				<Route path="/scout" component={ComingSoonPage} />
				<Route path="/statistics" component={ComingSoonPage} />
				<Route path="/help" component={ComingSoonPage} />
				<Route path="/contact" component={ComingSoonPage} />
				<Route path="/teams" exact key="teams" component={TeamsPage} />
				<Route
					path="/teams/list-select-captain"
					exact
					key="teams"
					component={TeamsCaptainPage}
				/>
				<Route
					path="/teams/team-name"
					exact
					key="teams"
					component={TeamsNamePage}
				/>
				<Route
					path="/teams/save-team"
					exact
					key="teams"
					component={SaveTeamPage}
				/>

				<Route path="*" component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
