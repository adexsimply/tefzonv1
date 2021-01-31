import React from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Homepage from "../pages/Homepage";

const Routes = () => {
	const history = useHistory();
	return (
		<BrowserRouter history={history}>
			<Switch>
				<Route path="/" key="home" component={Homepage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
