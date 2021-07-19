import React, { createContext, useState, useEffect } from "react";
import { getTeam } from "../helpers/api";

export const TeamContext = createContext();

const TeamProvider = ({ children }) => {
  const [teamData, setTeamData] = useState(null);
  const [loadingTeam, setLoadingTeam] = useState(false);
  const [teamDetails, setTeamDetails] = useState(null);
  const [teamPlayers, setTeamPlayers] = useState(null);

  // useEffect(() => {
  //   getTeamData();
  //   // eslint-disable-next-line
  // }, []);

  const getTeamData = async () => {
    setLoadingTeam(true);
    try {
      const teams = await getTeam();
      console.log(teams);

      if (teams.statusCode === 200) {
        setTeamData(teams.result);
        setTeamDetails(teams.result.teamDetails);
        setTeamPlayers(teams.result.players);
        console.log({teamData, teamDetails, teamPlayers});
    }
    } catch (error) {
      if (error) {
        setLoadingTeam(false);
      }
    } finally {
      setLoadingTeam(false);
    }
  };

  return (
    <TeamContext.Provider
      value={{ teamData, teamPlayers, teamDetails, loadingTeam, getTeamData }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export default TeamProvider;
