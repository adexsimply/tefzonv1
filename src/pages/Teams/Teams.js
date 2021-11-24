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
            <Col>
              <div>
                <p className="text-3xl font-bold">
                  Your Teams
                </p>
              </div>
              <div className={'my-5'}>
                <Row gutter={10}>
                  {userTeams.map((item, index) => {
                    console.log(item)
                    return (
                    <Col lg={8} className={'mt-5'}>
                      <Link to={`/teams/view-team?teamId=${item.id}`}>
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
