import React, { useContext } from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Button, Row, Col, Input, Form } from "antd";
import { Link } from 'react-router-dom';
// import Form from 'antd/lib/form/Form';

function JoinLeague() {

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
    </DashboardLayout>
  );
}

export default JoinLeague;
