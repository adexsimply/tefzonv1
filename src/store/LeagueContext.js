import React, { createContext, useState } from "react";

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

	// const getUserData = () => {
	// 	setUser({ loggedIn: true, token: getToken });
	// };
  return <LeagueContext.Provider value={{
    tefzonLeagues,
    setTefzonLeagues,
    singleLeagueData,
    setSingleLeagueData,
    leagueInfo,
    setLeagueInfo,
  }}>
    {children}
  </LeagueContext.Provider>;
};

export default LeagueContextProvider;
