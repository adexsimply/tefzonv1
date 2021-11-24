import React, { createContext, useState } from "react";
import { getAllUserCreatedLeagues } from "../helpers/api";
import { openNotification } from "../helpers/notification";

export const LeagueContext = createContext()

let intialLeagueInfo = {
  leagueDetails: {},
  leagueCreator: {},
  leagueParticipant: [],
  leagueComments: [],
  leagueFxixture: [],
  leaguePlayers: [],
}

const LeagueContextProvider = ({ children }) => {
  const [tefzonLeagues, setTefzonLeagues] = useState([]);
  const [singleLeagueData, setSingleLeagueData] = useState([]);
  const [leagueInfo, setLeagueInfo] = useState(intialLeagueInfo);
  const [userTeamInLeague, setUserTeamInLeague] = useState(null);
  const [userCreatedLeagues, setUserCreatedLeagues] = useState([]);
  const [userCreatedLeaguesLoading, setUserCreatedLeaguesLoading] = useState(true);

	// const getUserData = () => {
	// 	setUser({ loggedIn: true, token: getToken });
	// };

  const getUserCreatedLeagues = () => {
    getAllUserCreatedLeagues()
    .then((response) => {
      console.log(response);
      setUserCreatedLeaguesLoading(false);
      setUserCreatedLeagues(response.getAllSystemRealLeagues)
    })
    .catch((error) => {
      setUserCreatedLeaguesLoading(false);
      openNotification({
        title: 'Error getting leagues',
        message: 'there was an error while leagues',
        type: 'error'
      })
    })
  }
  return <LeagueContext.Provider value={{
    tefzonLeagues,
    setTefzonLeagues,
    singleLeagueData,
    setSingleLeagueData,
    leagueInfo,
    setLeagueInfo,
    userTeamInLeague,
    setUserTeamInLeague,
    userCreatedLeagues,
    userCreatedLeaguesLoading,
    setUserCreatedLeagues,
    getUserCreatedLeagues,
  }}>
    {children}
  </LeagueContext.Provider>;
};

export default LeagueContextProvider;
