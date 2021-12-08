/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Button, Row, Col } from "antd";
import { Link, useHistory } from 'react-router-dom';
import SectionContainer from '../../components/SectionContainer';
import LeagueItemList from '../../components/LeagueItemList';
import LeagueListHeader from '../../components/LeagueListHeader';
import {getTefzonLeagues} from '../../helpers/api'
import { LeagueContext } from '../../store/LeagueContext';
import { openNotification } from '../../helpers/notification';
import { AiOutlineLoading } from 'react-icons/ai';
// import Form from 'antd/lib/form/Form';

function Leagues() {
  const {
    // tefzonLeagues,
    setTefzonLeagues,
    userCreatedLeagues,
    userCreatedLeaguesLoading,
    getUserCreatedLeagues,
    userJoinedLeagues,
    userJoinedLeaguesLoading,
    getUserJoinedLeagues,
  } = useContext(LeagueContext);

  const history = useHistory();

  React.useEffect(() => {
    getTefzonLeagues()
    .then((response) => {
      setTefzonLeagues(response.getAllSystemVirtualLeagues)
    })
    .catch((error) => {
      openNotification({
        title: 'Error getting leagues',
        message: 'there was an error while leagues',
        type: 'error'
      })
    })
  }, [])

  React.useEffect(() => {
    getUserCreatedLeagues()
  }, [])

  React.useEffect(() => {
    getUserJoinedLeagues()
  }, [])

  const handleLeagueClick = (leagueId) => {
    history.push(`/leagues/league-info?leagueId=${leagueId}`)
  }

  return (
    <DashboardLayout>
      <Row justify="center" className='py-4 pb-10'>
        <Col lg={22}>
          <div className="mt-4">
            <p className="text-3xl font-bold">Leagues</p>
          </div>
          <Row gutter={24} className="display-team-container">
            <Col lg={16}>
              <div className={'w-full p-3 pb-5 mt-5 h-auto bg-primary-brand-darker'}>
                <SectionContainer>
                  <Row align={'middle'} gutter={15} className={'px-3'}>
                    <Col span={12}>
                      <Link to="/leagues/create-league">
                        <Button className='w-full h-14 bg-primary-brand-darker rounded'>
                          <p className='text-white font-bold'>Create New League</p>
                        </Button>
                      </Link>
                    </Col>
                    <Col span={12}>
                      <Link to="/leagues/join-league">
                        <Button className='w-full h-14 bg-primary-brand-darker rounded'>
                          <p className='text-white font-bold'>Join Existing League</p>
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </SectionContainer>
                <SectionContainer className={'mt-4'}>
                  <div className={'px-3'}>
                    <p className={'text-base font-bold'}>Personal Leagues</p>
                  </div>
                  <LeagueListHeader />
                  <div>
                    {userCreatedLeaguesLoading && (
                      <div className={'w-full flex items-center justify-center py-6'}>
                      <AiOutlineLoading size={30} color={'#8139e6'} className={'animate-spin'} />
                    </div>
                    )}
                    {userCreatedLeagues && !userCreatedLeaguesLoading && (
                      userCreatedLeagues.map((item) => (
                        <LeagueItemList
                          key={item.league_name}
                          claassName={'mt-3'}
                          LeagueName={item.league_name}
                          leagueType={item.league_type}
                          inviteCode={item.league_invite_code}
                          onClick={() => handleLeagueClick(item.id)}
                        />
                      ))
                    )}
                  </div>
                </SectionContainer>
                <SectionContainer className={'mt-4'}>
                  <div className={'px-3'}>
                    <p className={'text-base font-bold'}>Other Leagues</p>
                  </div>
                  <LeagueListHeader />
                  <div>
                    
                  {userJoinedLeaguesLoading && (
                      <div className={'w-full flex items-center justify-center py-6'}>
                      <AiOutlineLoading size={30} color={'#8139e6'} className={'animate-spin'} />
                    </div>
                    )}
                    {userJoinedLeagues && !userJoinedLeaguesLoading && (
                      userJoinedLeagues.map((item) => (
                        <LeagueItemList
                          key={item.league_name}
                          claassName={'mt-3'}
                          LeagueName={item.league_name}
                          leagueType={item.league_type}
                          inviteCode={item.league_invite_code}
                          onClick={() => handleLeagueClick(item.id)}
                        />
                      ))
                    )}
                  </div>
                </SectionContainer>
              </div>
            </Col>
            <Col lg={8}>
            </Col>
          </Row>
        </Col>
      </Row>
    </DashboardLayout>
  );
}

export default Leagues;
