import React, { useState, useEffect } from "react";
import { message } from "antd";

import DefaultTeam from "./EmptyState";
import DisplayTeam from "./DisplayTeam";
import { getTeam } from "../../helpers/api";

const Teams = () => {
	const [teamData, setTeamData] = useState(null);
	const [loadingTeam, setLoadingTeam] = useState(false);

	useEffect(() => {
		getTeamData();
	}, []);

	const getTeamData = async () => {
		setLoadingTeam(true);
		try {
			const results = await getTeam();

			if (results.statusCode === 200) {
				setTeamData(results.result);
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
					return <DefaultTeam />;
				} else {
					return <DisplayTeam teamInfo={teamData} />;
				}
			}
		}
	};

	return <>{handleDisplayTeams()}</>;
};

export default Teams;
