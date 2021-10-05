import React from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Row, Col, Button } from "antd";
import { AiOutlineLoading } from "react-icons/ai";
import FundWalletModal from '../../components/FundWalletModal';
import WithdrawModal from '../../components/WithdrawModal';
import TeamCards from '../../components/TeamCards';
import { Link } from 'react-router-dom';

function Teams() {
  const [loadingCreateBtn, setLoadingCreateBtn] = React.useState(false);

  React.useEffect(() => {
    setLoadingCreateBtn(false);
  }, [])
  return (
    <DashboardLayout>
      <Row justify="center" className='py-4'>
        <Col lg={22}>
          <Row gutter={24} className="display-team-container mt-5">
            <Col lg={16}>
              <div>
                <p className="text-3xl font-bold">
                  Your Teams
                </p>
              </div>
              <div className={'my-5'}>
                <TeamCards />
              </div>
            </Col>
            <Col lg={8}>
              <Link to="/teams/create-team">
                <Button className='w-full mx-4 h-14 bg-primary-brand-darker rounded'>
                  {loadingCreateBtn ?
                    <div className={'w-full flex items-center justify-center'}>
                      <AiOutlineLoading size={40} color={'#8139e6'} className={'animate-spin'} />
                    </div>
                    :
                      <p className='text-white font-bold'>Create New Team</p>
                  }
                </Button>
              </Link>
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
