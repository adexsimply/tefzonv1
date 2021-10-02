import React from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Row, Col } from "antd";
import FundWalletModal from '../../components/FundWalletModal';
import WithdrawModal from '../../components/WithdrawModal';

function Teams() {
  return (
    <DashboardLayout>
      <Row justify="center" className='py-4'>
        <Col lg={22}>
          <Row gutter={24} className="display-team-container">
            <Col lg={16}>
            </Col>
            <Col lg={8}>
            </Col>
          </Row>
        </Col>
      </Row>
      <FundWalletModal />
      <WithdrawModal />
    </DashboardLayout>
  );
}

export default Teams;
