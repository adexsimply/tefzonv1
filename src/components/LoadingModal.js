import React from 'react';
import Modal from 'react-modal';
import { AiOutlineLoading } from "react-icons/ai";
import { ModalContext } from '../store/ModalContext';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // height: '10rem',
    width: '24rem',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function LoadingModal({children}) {
  // const [transactionData, setTransactionData] = React.useState(false);
  
  const {
    loadingModalIsOpen,
    // closeLoadingModal,
  } = React.useContext(ModalContext);

  return (
      <Modal
        isOpen={loadingModalIsOpen}
        // onRequestClose={closeLoadingModal}
        style={customStyles}
        contentLabel="Loading"
      >
        <div className={'w-full flex items-center justify-center'}>
          <AiOutlineLoading size={40} color={'#8139e6'} className={'animate-spin'} />
        </div>
      </Modal>
  );
}

export default LoadingModal;
