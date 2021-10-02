import React, { useContext, useEffect } from "react";
import { TeamContext } from "../../store/TeamContext";
// import TeamEmptyState from "./EmptyState";
import DisplayTeam from "./DisplayTeam";
import { AiOutlineLoading } from "react-icons/ai";
// import { FaTruckLoading } from "react-icons/fa";
import "./Teams.scss";

const Teams = () => {
  const { teamDetails, teamPlayers, loadingTeam } = useContext(TeamContext);

  useEffect(() => {
    // getTeamData();
    // eslint-disable-next-line
  }, []);

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
        <div className={'flex items-center justify-center w-screen h-screen'}>
          <AiOutlineLoading size={40} color={'#8139e6'} className={'animate-spin'} />
        </div>
      );
    } else {
      if (!teamPlayers) {
        // return errorView();
        return <DisplayTeam teamInfo={teamPlayers} teamDetails={teamDetails} />;
        // return <TeamEmptyState />;
      } else {
        return <DisplayTeam teamInfo={teamPlayers} teamDetails={teamDetails} />;
      }
    }
  };

  return handleDisplayTeams();
};

export default Teams;
