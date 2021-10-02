import React, { createContext, useState } from "react";
// import { loadState } from "./localStorage";

export const WalletContext = createContext();

const initialWalletData = {
  wallet_balance: 0,
  currency: 'NGN',
  transaction_history: [],
  cards: []
}

const WalletContextProvider = ({ children }) => {
	const [walletData, setWalletData] = useState(initialWalletData);
  // const [userData, setUserData] = useState(null);

  return (
    <WalletContext.Provider value={{
      walletData,
      setWalletData
    }}>
      {children}
    </WalletContext.Provider>
)};

export default WalletContextProvider;
