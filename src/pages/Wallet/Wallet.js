import React, { useContext } from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Button, Row, Col, Input, Form } from "antd";
import WalletCard from '../../components/WalletCard';
import TransactionSideBar from '../../components/TransactionSideBar';
import { ModalContext } from '../../store/ModalContext';
import FundWalletModal from '../../components/FundWalletModal';
import WithdrawModal from '../../components/WithdrawModal';
// import Form from 'antd/lib/form/Form';

function Wallet() {
  const {
    openFundModal,
    openWithdrawModal,
  } = useContext(ModalContext);

  return (
    <DashboardLayout>
      <Row justify="center" className='py-4'>
        <Col lg={22}>
          <Row gutter={24} className="display-team-container">
            <Col lg={16}>
              <div className="team-header">
                <p className="title">Wallet</p>
              </div>
              <div className="page-info">
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected</p>
              </div>
              <div>
                <WalletCard />
                <div className={'flex flex-row mt-8'}>
                  <Button className='w-56 h-14 bg-primary-brand-darker rounded' onClick={() => openFundModal()}>
                    <p className='text-white font-bold'>Fund wallet</p>
                  </Button>
                  <Button className='w-56 h-14 bg-primary-brand-darker rounded ml-4' onClick={() => openWithdrawModal()}>
                    <p className='text-white font-bold'>Withdraw</p>
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <TransactionSideBar />
            </Col>
          </Row>
        </Col>
      </Row>
      <FundWalletModal />
      <WithdrawModal />
    </DashboardLayout>
  );
}

export default Wallet;
