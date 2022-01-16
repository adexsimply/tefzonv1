import React from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Row, Col } from "antd";
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
      console.log('response');
      console.log(response);
      setUserTeams(response.result);
    })
    .catch(error => {
      console.log(error);
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
            <Col>
              <div>
                <p className="text-3xl font-bold">
                  Your Teams
                </p>
              </div>
              <div className={'my-5'}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {userTeams.length < 1 && (
                    <Col className={'mt-5'}>
                      <div>
                        <p className={'text-lg font-semibold'}>You don't have a team right now, create a league or join an existing league to create one.</p>
                      </div>
                    </Col>
                  )}
                  {userTeams.map((item, index) => {
                    console.log(item)
                    return (
                    <Col className={'mt-5'}>
                      <Link to={`/teams/view-team?teamId=${item.id}&leagueId=${item.league.id}`}>
                        <TeamCards key={item.team_name} teamName={item.team_name} />
                      </Link>
                    </Col>
                  )})}
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </DashboardLayout>
  );
}

export default Teams;
