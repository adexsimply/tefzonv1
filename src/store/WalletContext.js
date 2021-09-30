import React, { createContext, useState } from "react";
import { loadState } from "./localStorage";

export const WalletContext = createContext();

const WalletContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
  // const [userData, setUserData] = useState(null);
  
  React.useEffect(() => {
	  const getToken = loadState();
    setUserToken(getToken);
    // eslint-disable-next-line
  }, [])

  const logInSuccess = (data) => {
    console.log('logInSuccess');
    setLoggedIn(true);
  }

	// const getUserData = () => {
	// 	setUser({ loggedIn: true, token: getToken });
	// };

  return (
    <WalletContext.Provider value={{
      loggedIn,
      userToken,
      logInSuccess,
      setUserToken,
    }}>
      {children}
    </WalletContext.Provider>
)};

export default WalletContextProvider;
