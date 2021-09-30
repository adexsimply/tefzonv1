import React from 'react';
import Modal from 'react-modal';
import { Button, Row, Col, Input, Form } from "antd";
import { AiOutlineLoading } from "react-icons/ai";
import { ModalContext } from '../store/ModalContext';
import { fundWallet } from '../helpers/api';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
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

function FundWalletModal({children}) {
  const [loading, setLoading] = React.useState(false);
  const [transactionData, setTransactionData] = React.useState(false);
  
  const {
    fundModalIsOpen,
    closeFundModal,
  } = React.useContext(ModalContext);

  const handleFundWallet = (values) => {
    setLoading(true)
    console.log(values);
    fundWallet(values)
      .then((response) => {
        console.log(response.data);
        setTransactionData(response.data);
        window.location.assign(response.data.authorization_url)
        setLoading(false);
      })
      .catch(error => {
        console.log(error)
        setLoading(false);
      })
  }

  return (
      <Modal
        isOpen={fundModalIsOpen}
        onRequestClose={closeFundModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={() => closeFundModal()}>close</button> */}
        {/* {children} */}
        <p className={'text-sm text-primary-brand-darker font-bold text-center'}>Enter the amount you want to add to your tefzon wallet</p>
        <p className={'text-xs text-center'}>You will be redirected to paystack to make your payment.</p>
        <Form layout='vertical' className={'mt-2'} onFinish={handleFundWallet} requiredMark={false}>
          <Form.Item
            name="amount"
            label="Amount"
            rules={[
              { required: true, message: "" },
              {min: 3, message: 'The minimum amount is 100 '},
            ]}
            >
              <Input className={'w-full'} type={'number'} />
          </Form.Item>
          <div>
            <Button
              htmlType="submit"
              className='w-full h-14 bg-primary-brand-darker rounded'>
              {loading ?
                <div className={'w-full flex items-center justify-center'}>
                  <AiOutlineLoading size={40} color={'#8139e6'} className={'animate-spin'} />
                </div>
                :
                  <p className='text-white font-bold'>Fund wallet</p>
              }
            </Button>
          </div>
        </Form>
      </Modal>
  );
}

export default FundWalletModal