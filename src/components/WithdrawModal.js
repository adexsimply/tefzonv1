import React from 'react';
import Modal from 'react-modal';
import { Button, Input, Form, Select, message } from "antd";
import { ModalContext } from '../store/ModalContext';
import { WalletContext } from '../store/WalletContext';
import { getBanks, resolveAccount } from '../helpers/api';

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

function WithdrawModal({children}) {
  // const [loading, setLoading] = React.useState(false);
  const [bankCode, setBankCode] = React.useState(null);
  const [accountName, setAccountName] = React.useState(null);
  const [disableAcctNumInput, setDisableAcctNumInput] = React.useState(false);

  const {
    withdrawModalIsOpen,
    closeWithdrawModal,
  } = React.useContext(ModalContext);

  const {
    banks,
    setBanks,
  } = React.useContext(WalletContext);

  React.useEffect(() => {
    getBanks()
    .then(response => {
      setBanks(response.data);
    })
    .catch(error => {
      console.log(error)
      message.error(error.message);
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSetBankCode = (value) => {
    setBankCode(value)
  }

  const handleAccountNumber = (e) => {
    if(e.target.value.length === 10) {
      setDisableAcctNumInput(true);
      const data = {
        account_number: e.target.value,
        bank_code: bankCode,
      }
      resolveAccount(data)
      .then((response) => {
        message.success(response.message)
        setAccountName(response.data.acccount_name)
      })
      .catch(error => {
        message.error(error.message);
      })
      .finally(() => {
        console.log('accountName ' + accountName)
        setDisableAcctNumInput(false);
      })
    }
  }

  // const handleFundWallet = (values) => {
  //   setLoading(true)
  //   console.log(values);
  //   fundWallet(values)
  //     .then((response) => {
  //       console.log(response.data);
  //       // setTransactionData(response.data);
  //       window.location.assign(response.data.authorization_url)
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       setLoading(false);
  //     })
  // }

  return (
      <Modal
        isOpen={withdrawModalIsOpen}
        onRequestClose={closeWithdrawModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={() => closeFundModal()}>close</button> */}
        {/* {children} */}
        <p className={'text-sm text-primary-brand-darker font-bold text-center'}>Enter account details to withdraw from your wallet</p>
        <Form layout='vertical' className={'mt-2'} requiredMark={false}>
          <Form.Item
            name="bank"
            label="Select Your Bank"
            rules={[
              { required: true, message: "Select your bank" },
            ]}
            >
            <Select onChange={handleSetBankCode}>
              {banks.map((item, index) => (
                <Select.Option value={item.code}>{item.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="account_number"
            label="Enter Your Account Number"
            rules={[
              { required: true, min: 10, max: 10, message: "Please enter a valid account number" },
            ]}
            >
              <Input disabled={disableAcctNumInput} className={'w-full h-14'} onChange={handleAccountNumber} type={'number'} />
              <div className={'mt-2 text-sm font-semibold'}>
                <p>{accountName}</p>
              </div>
          </Form.Item>
          <Form.Item
            name="amount"
            label="Amount"
            rules={[
              { required: true, message: "" },
              {min: 3, message: 'The minimum amount is 100 '},
            ]}
            >
              <Input className={'w-full h-14'} type={'number'} />
          </Form.Item>
          <div>
            <Button className='w-full h-14 bg-primary-brand-darker rounded'>
              <p className='text-white font-bold'>Withdraw</p>
            </Button>
          </div>
        </Form>
      </Modal>
  );
}

export default WithdrawModal