import React, { useState, useEffect } from "react";
import { message } from "antd";
import { getView } from "../../store/localStorage";

import TeamEmptyState from "./EmptyState";
import DisplayTeamList from "./DisplayTeam/ListView";
import DisplayTeamPitch from "./DisplayTeam/PitchView";
import { getTeam } from "../../helpers/api";

const Teams = () => {
	const [teamData, setTeamData] = useState(null);
	const [loadingTeam, setLoadingTeam] = useState(false);
	const view = getView();

	useEffect(() => {
		getTeamData();
	}, []);

	const getTeamData = async () => {
		setLoadingTeam(true);
		try {
			const teams = await getTeam();

			if (teams.statusCode === 200) {
				setTeamData(teams.result);
			}
		} catch (error) {
			message.error(error);
		} finally {
			setLoadingTeam(false);
		}
	};

	const handleDisplayTeams = () => {
		if (loadingTeam) {
			return <div>Loading...</div>;
		} else {
			if (teamData === null) {
				return <div>Loading...</div>;
			} else {
				if (teamData.length === 0) {
					return <TeamEmptyState />;
				} else {
					if (view === "list") {
						return <DisplayTeamList teamInfo={teamData[11]} />;
					} else {
						return <DisplayTeamPitch teamInfo={teamData} />;
					}
				}
			}
		}
	};

	return <>{handleDisplayTeams()}</>;
};

export default Teams;
