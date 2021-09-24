import React from 'react';
import Modal from 'react-modal';
import { Button, Row, Col, Input, Form } from "antd";
import { ModalContext } from '../store/ModalContext';

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
  const {
    fundModalIsOpen,
    closeFundModal,
  } = React.useContext(ModalContext);

  return (
      <Modal
        isOpen={fundModalIsOpen}
        onRequestClose={closeFundModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={() => closeFundModal()}>close</button> */}
        {/* {children} */}
        <p className={'text-sm text-primary-brand-darker font-bold text-center'}>Enter your debit card details to add money to your wallet</p>
        <Form layout='vertical' className={'mt-2'} requiredMark={false}>
          <Form.Item
            name="cardNumber"
            label="Enter Your Card Number"
            rules={[
              { required: true, message: "Card number is important" },
              {type: 'integer', min: 16},
            ]}
            >
              <Input className={'w-full'} />
          </Form.Item>
          <Row gutter={20} >
            <Col span={12}>
              <Form.Item
                name="cardNumber"
                label="Expiry Date"
                rules={[{ required: true, message: "Card number is important" }]}
              >
                <Input className={'w-ful'} />
              </Form.Item>
            </Col>
            <Col  span={12}>
              <Form.Item
                name="cardNumber"
                label="CVV"
                rules={[{ required: true, message: "Card number is important" }]}
              >
                <Input className={'w-ful'} />
              </Form.Item>
            </Col>
          </Row>
          <div>
            <Button className='w-full h-14 bg-primary-brand-darker rounded'>
              <p className='text-white font-bold'>Fund wallet</p>
            </Button>
          </div>
        </Form>
      </Modal>
  );
}

export default FundWalletModal