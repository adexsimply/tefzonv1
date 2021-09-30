import React from 'react';
import Routes from "./routes";
import { AppContext } from './store/AppContext';
import { loadState, loadUserData } from './store/localStorage';

function App() {
  const {
    userData,
    setUserToken,
    setUserData,
  } = React.useContext(AppContext);

  React.useEffect(() => {
	  const getToken = loadState();
    const savedUserData = loadUserData();
    setUserToken(getToken);
    setUserData({...userData, token: getToken, userToken: getToken, userData: savedUserData});
    // eslint-disable-next-line
  }, [])
	return <Routes />;
}

export default App;
