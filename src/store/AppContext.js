import React, { createContext, useState } from "react";
import { clearState, loadUserData } from "./localStorage";
import { loadState } from "./localStorage";
export const AppContext = createContext();

const userInitialState = {
	loggedIn: false,
  token: null,
  userToken: null,
  userData: {},
};

const AppContextProvider = ({ children }) => {
  const [user] = useState(userInitialState);
  const [userData, setUserData] = useState(userInitialState);
  const [userToken, setUserToken] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
  // const [userData, setUserData] = useState(null);
  
  React.useEffect(() => {
	  const getToken = loadState();
    const savedUserData = loadUserData();
    setUserToken(getToken);
    setUserData({...userData, token: getToken, userToken: getToken, userData: savedUserData});
  }, [])

  const logInSuccess = (data) => {
    console.log('logInSuccess');
    setLoggedIn(true);
    setUserData({...userData, loggedIn: true, token: data.token, userToken: data})
  }

  const resetState = () => {
    setUserData(userInitialState)
    clearState()
  }

  console.log(userData);

	// const getUserData = () => {
	// 	setUser({ loggedIn: true, token: getToken });
	// };
	return <AppContext.Provider value={{ user, loggedIn, userData, userToken, logInSuccess, resetState }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
