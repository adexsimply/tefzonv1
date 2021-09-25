import React, { useContext } from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Button, Row, Col, Input, Form } from "antd";
import { Link, useHistory } from 'react-router-dom';
import SectionContainer from '../../components/SectionContainer';
import LeagueItemList from '../../components/LeagueItemList';
import LeagueListHeader from '../../components/LeagueListHeader';
// import Form from 'antd/lib/form/Form';

function Leagues() {
  const history = useHistory();

  const handleLeagueClick = () => {
    history.push('/leagues/league-info')
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
                      <Link to="/join-league">
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
                    <LeagueItemList
                      claassName={'mt-3'}
                      LeagueName={'League0001'} currentRank={'-'} lastRank={'-'}
                      onClick={() => handleLeagueClick()}
                    />
                    <LeagueItemList
                      claassName={'mt-3'}
                      LeagueName={'League0001'} currentRank={'-'} lastRank={'-'}
                    />
                    <LeagueItemList
                      claassName={'mt-3'}
                      LeagueName={'League0001'} currentRank={'-'} lastRank={'-'}
                    />
                  </div>
                </SectionContainer>
                <SectionContainer className={'mt-4'}>
                  <div className={'px-3'}>
                    <p className={'text-base font-bold'}>Other Leagues</p>
                  </div>
                  <LeagueListHeader />
                  <div>
                    <LeagueItemList
                      claassName={'mt-3'}
                      LeagueName={'League0001'} currentRank={'-'} lastRank={'-'}
                    />
                    <LeagueItemList
                      claassName={'mt-3'}
                      LeagueName={'League0001'} currentRank={'-'} lastRank={'-'}
                    />
                    <LeagueItemList
                      claassName={'mt-3'}
                      LeagueName={'League0001'} currentRank={'-'} lastRank={'-'}
                    />
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
