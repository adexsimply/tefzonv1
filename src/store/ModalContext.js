import React, { createContext, useState } from "react";

export const ModalContext = createContext()

const ModalContextProvider = ({ children }) => {
  const [withdrawModalIsOpen, setWithdrawModalIsOpen] = useState(false);
  const [fundModalIsOpen, setFundModalIsOpen] = useState(false);
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);

  const openWithdrawModal = () => {
    setWithdrawModalIsOpen(true);
  }

  const openFundModal = () => {
    setFundModalIsOpen(true);
  }

  const openLoadingModal = () => {
    setLoadingModalIsOpen(true);
  }

  const closeWithdrawModal = (data) => {
    setWithdrawModalIsOpen(false);
  }

  const closeFundModal = (data) => {
    setFundModalIsOpen(false);
  }

  const closeLoadingModal = () => {
    setLoadingModalIsOpen(false);
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
    openLoadingModal,
    loadingModalIsOpen,
    closeLoadingModal,
  }}>
    {children}
  </ModalContext.Provider>;
};

export default ModalContextProvider;
