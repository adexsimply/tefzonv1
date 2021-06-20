import React, { useState, useEffect } from "react";
import { message } from "antd";
import { getView } from "../../store/localStorage";

import TeamEmptyState from "./EmptyState";
import DisplayTeamList from "./DisplayTeam/ListView";
import DisplayTeamPitch from "./DisplayTeam/PitchView";
import { getTeam } from "../../helpers/api";
import DashboardLayout from "../../components/common/DashboardLayout";

const Teams = () => {
	const [teamData, setTeamData] = useState(null);
	const [loadingTeam, setLoadingTeam] = useState(false);
	const [viewState, setViewState] = useState("view");

	const view = getView();

	useEffect(() => {
		getTeamData();
		// eslint-disable-next-line
	}, []);

	const getTeamData = async () => {
		setLoadingTeam(true);
		try {
			const teams = await getTeam();
			console.log(teams);
			if (teams.statusCode === 200) {
				setTeamData(teams.result);
				setViewState(view);
			}
		} catch (error) {
			message.error(error);
			if (error) {
				setLoadingTeam(false);
				setViewState("error");
			}
		} finally {
			setLoadingTeam(false);
		}
	};

	const errorView = () => {
		<DashboardLayout>
			<div>Something went wrong please refresh</div>
		</DashboardLayout>;
	};

	const handleDisplayTeams = () => {
		console.log(loadingTeam, "===");
		if (loadingTeam) {
			return <div>Loading...</div>;
		} else {
			if (viewState === "error" && teamData === null) {
				console.log(viewState, "==", teamData);

				return errorView();
			} else {
				if (teamData === null) {
					return <div>Loading...</div>;
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
		}
	};

	return <>{handleDisplayTeams()}</>;
};

export default Teams;
