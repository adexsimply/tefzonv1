import React, { useState, useEffect } from "react";
// import { Button } from "antd";
import { getView } from "../../store/localStorage";
import { getTeam } from "../../helpers/api";

import TeamEmptyState from "./EmptyState";
import DisplayTeamList from "./DisplayTeam/ListView";
import DisplayTeamPitch from "./DisplayTeam/PitchView";
// import DashboardLayout from "../../components/common/Layout";
// import { AiOutlineWarning } from "react-icons/ai";
// import { FiRefreshCcw } from "react-icons/fi";

const Teams = () => {
	const [teamData, setTeamData] = useState(null);
	const [loadingTeam, setLoadingTeam] = useState(false);

	const view = getView();

	useEffect(() => {
		getTeamData();
		// eslint-disable-next-line
	}, []);

	const getTeamData = async () => {
		setLoadingTeam(true);
		try {
			const teams = await getTeam();

			if (teams.statusCode === 200) {
				setTeamData(teams.result);
			}
		} catch (error) {
			if (error) {
				setLoadingTeam(false);
			}
		} finally {
			setLoadingTeam(false);
		}
	};

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
			return <div>Loading...</div>;
		} else {
			if (teamData === null) {
				// return errorView();
				return <TeamEmptyState />;
			} else {
				if (teamData.length === 0) {
					return <TeamEmptyState />;
				} else {
					if (view === "list") {
						return <DisplayTeamList teamInfo={teamData[0]} />;
					} else {
						return <DisplayTeamPitch teamInfo={teamData[0]} />;
					}
				}
			}
		}
	};

	return <>{handleDisplayTeams()}</>;
};

export default Teams;
