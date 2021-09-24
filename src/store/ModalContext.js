import React, { createContext, useState } from "react";
import { clearState, loadUserData } from "./localStorage";
import { loadState } from "./localStorage";

export const ModalContext = createContext()

const ModalContextProvider = ({ children }) => {
  const [withdrawModalIsOpen, setWithdrawModalIsOpen] = useState(false);
  const [fundModalIsOpen, setFundModalIsOpen] = useState(false);

  const openWithdrawModal = () => {
    setWithdrawModalIsOpen(true);
  }

  const openFundModal = () => {
    setFundModalIsOpen(true);
  }

  const closeWithdrawModal = (data) => {
    setWithdrawModalIsOpen(false);
  }

  const closeFundModal = (data) => {
    setFundModalIsOpen(false);
  }

	// const getUserData = () => {
	// 	setUser({ loggedIn: true, token: getToken });
	// };
  return <ModalContext.Provider value={{
    openWithdrawModal,
    closeWithdrawModal,
    withdrawModalIsOpen,
    openFundModal,
    fundModalIsOpen,
    closeFundModal,
  }}>
    {children}
  </ModalContext.Provider>;
};

export default ModalContextProvider;
