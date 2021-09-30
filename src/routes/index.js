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
import ListCaptainPage from "../pages/Teams/ListView/TeamCaptain";
import PitchCaptainPage from "../pages/Teams/PitchView/TeamCaptain";
import TeamsNamePage from "../pages/Teams/NameTeam";
import ListSaveTeamPage from "../pages/Teams/ListView/SaveTeam";
import ConfirmTeamPage from "../pages/Teams/PitchView/ConfirmTeam";
import FixturesPage from "../pages/Fixtures";
import ComingSoonPage from "../pages/Error/ComingSoon";
import NotFoundPage from "../pages/Error/NotFound";
import GameweekHistoryPage from "../pages/GameweekHistory";
import { AuthProtectedRoute, ProtectedRoute } from "./protectedRoutes";
import SubAndTransfer from "../pages/subAndTransfer/SubAndTransfer";
import Wallet from "../pages/Wallet/Wallet";
import Leagues from "../pages/Leagues/Leagues";
import JoinLeague from "../pages/Leagues/JoinLeague";
import LeagueInfo from "../pages/Leagues/LeagueInfo";
import Teams from "../pages/Teams/Teams";
import VerifyTransaction from "../pages/Wallet/VerifyTransaction";

const Routes = () => {

  let history = useHistory();
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact key="home" component={Homepage} />
        {/* <Route path="/register" exact key="register" component={RegisterPage} /> */}
        <AuthProtectedRoute
          exact
          key="signin"
          path="/login"
          component={SigninPage}
        />
        <AuthProtectedRoute
          exact
          key="register"
          path="/register"
          component={RegisterPage}
        />
        {/* <Route path="/login" exact key="signin" component={SigninPage} /> */}
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
        <Route path="/prizes" component={ComingSoonPage} />
        <Route path="/status" component={ComingSoonPage} />
        <Route path="/scout" component={ComingSoonPage} />
        <Route path="/statistics" component={ComingSoonPage} />
        <Route path="/help" component={ComingSoonPage} />
        <Route path="/contact" component={ComingSoonPage} />
        {/* <Route path="/teams" exact key="teams" component={TeamsPage} /> */}
        {/* <ProtectedRoute exact key="teams" path="/teams" component={TeamsPage} /> */}
        <ProtectedRoute exact key="teams" path="/teams" component={Teams} />
        <ProtectedRoute exact key="subAndTransfer" path="/subAndTransfer" component={SubAndTransfer} />
        <ProtectedRoute exact key="wallet" path="/wallet" component={Wallet} />
        <ProtectedRoute exact key="leagues" path="/leagues" component={Leagues} />
        <ProtectedRoute exact key="join-league" path="/leagues/join-league" component={JoinLeague} />
        <ProtectedRoute exact key="league-info" path="/leagues/league-info" component={LeagueInfo} />
        <ProtectedRoute exact key="verify-transaction" path="/wallet/verify-transaction" component={VerifyTransaction} />
        <ProtectedRoute
          exact
          key="fixtures"
          path="/fixtures"
          component={FixturesPage}
        />
        <ProtectedRoute
          exact
          key="Dashboard"
          path="/dashboard"
          component={DashboardPage}
        />
        <Route
          path="/teams/list-select-captain"
          exact
          key="teams"
          component={ListCaptainPage}
        />
        <Route
          path="/teams/pitch-select-captain"
          exact
          key="pitch-captain"
          component={PitchCaptainPage}
        />
        <Route
          path="/teams/team-name"
          exact
          key="teams"
          component={TeamsNamePage}
        />
        <Route
          path="/teams/list-save-team"
          exact
          key="teams"
          component={ListSaveTeamPage}
        />
        <Route
          path="/teams/pitch-confirm-team"
          exact
          key="teams"
          component={ConfirmTeamPage}
        />
        <ProtectedRoute
          path="/teams/gameweek-history"
          exact
          key="gameweek-history"
          component={GameweekHistoryPage}
        />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
