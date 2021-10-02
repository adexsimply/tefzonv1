import React, { createContext, useState } from "react";

export const LeagueContext = createContext()

const LeagueContextProvider = ({ children }) => {
  const [tefzonLeagues, setTefzonLeagues] = useState([]);
  const [singleLeagueData, setSingleLeagueData] = useState([]);

	// const getUserData = () => {
	// 	setUser({ loggedIn: true, token: getToken });
	// };
  return <LeagueContext.Provider value={{
    tefzonLeagues,
    setTefzonLeagues,
    singleLeagueData,
    setSingleLeagueData,
  }}>
    {children}
  </LeagueContext.Provider>;
};

export default LeagueContextProvider;
