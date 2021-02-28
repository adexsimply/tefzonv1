import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Homepage from "../pages/Homepage";
import RegisterPage from "../pages/Auth/Register";
import SigninPage from "../pages/Auth/Signin";
import ConfirmPage from "../pages/Auth/Confirm";

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
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
