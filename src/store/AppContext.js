import React, { createContext, useEffect, useState } from "react";
import { loadState } from "./localStorage";
export const AppContext = createContext();

const userInitialState = {
	loggedIn: false,
	token: null,
};

const AppContextProvider = ({ children }) => {
	const [user, setUser] = useState(userInitialState);

	useEffect(() => {
		getUserData();
	}, []);
	const getToken = loadState();

	const getUserData = () => {
		setUser({ loggedIn: true, token: getToken });
	};
	return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
