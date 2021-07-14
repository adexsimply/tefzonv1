import React, { useContext } from "react";
import { TeamContext } from "../../store/TeamContext";
import TeamEmptyState from "./EmptyState";
import DisplayTeam from "./DisplayTeam";
import { AiOutlineLoading } from "react-icons/ai";
import "./Teams.scss";

const Teams = () => {
  const { teamDetails, teamPlayers, loadingTeam } = useContext(TeamContext);

  // // should display when there's an error getting teams
  // const errorView = () => {
  // 	return (
  // 		<DashboardLayout>
  // 			<div className="error-container">
  // 				<AiOutlineWarning className="warning-icon" />
  // 				<p>Something went wrong, click the button to refresh</p>
  // 				<Button className="refresh-btn" onClick={getTeamData}>
  // 					<FiRefreshCcw />{" "}
  // 				</Button>
  // 			</div>
  // 		</DashboardLayout>
  // 	);
  // };

  const handleDisplayTeams = () => {
    if (loadingTeam) {
      return (
        <div>
          <AiOutlineLoading />
        </div>
      );
    } else {
      if (teamPlayers === null) {
        // return errorView();
        return <TeamEmptyState />;
      } else {
        return <DisplayTeam teamInfo={teamPlayers} teamDetails={teamDetails} />;
      }
    }
  };

  return handleDisplayTeams();
};

export default Teams;
