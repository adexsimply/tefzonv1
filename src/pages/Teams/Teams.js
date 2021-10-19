import React from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Row, Col, Button } from "antd";
import TeamCards from '../../components/TeamCards';
import { Link } from 'react-router-dom';
import { getAllUserTeam } from '../../helpers/api';
import { openNotification } from '../../helpers/notification';
import { TeamContext } from '../../store/TeamContext';

function Teams() {
  const {
    userTeams,
    setUserTeams,
  } = React.useContext(TeamContext);

  React.useEffect(() => {
    getAllUserTeam()
    .then((response) => {
      setUserTeams(response.result);
    })
    .catch(error => {
      openNotification({
        title: 'Network Issue',
        message: 'We are experiencing network issue',
        type: 'error'
      });
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <Row gutter={10}>
                  {userTeams.map((item, index) => (
                    <Col lg={8} className={'mt-5'}>
                      <Link to={`/teams/view-team?teamId=${item.id}`}>
                        <TeamCards key={item.team_name} teamName={item.team_name} />
                      </Link>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
            <Col lg={8}>
              <Link to="/teams/create-team">
                <Button className='w-full mx-4 h-14 bg-primary-brand-darker rounded'>
                  <p className='text-white font-bold'>Create New Team</p>
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </DashboardLayout>
  );
}

export default Teams;
