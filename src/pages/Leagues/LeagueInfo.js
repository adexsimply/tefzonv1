import React from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Row, Col } from "antd";
// import { Link, useHistory } from 'react-router-dom';
import { AiOutlineLoading } from "react-icons/ai";
import { LeagueContext } from '../../store/LeagueContext';
import { openNotification } from '../../helpers/notification';
import { getLeagueInfo } from '../../helpers/api';
import { longDate } from '../../helpers/utils';

function LeagueInfo() {
  const [loadingPage, setLoadingPage] = React.useState(true);

  const {
    leagueInfo,
    setLeagueInfo,
  } = React.useContext(LeagueContext);

  React.useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let leagueId = urlParams.get('leagueId');

    console.log(leagueId)
    getLeagueInfo(leagueId)
    .then((response) => {
      console.log(response);
      setLeagueInfo(response);
    })
    .catch((error) => {
      openNotification({
        title: 'Error getting leagues',
        message: 'There was an error while trying to get league info',
        type: 'error'
      })
    })
    .finally(() => setLoadingPage(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loadingPage) {
    return (
      <div className={'flex items-center justify-center w-screen h-screen'}>
          <AiOutlineLoading size={40} color={'#8139e6'} className={'animate-spin'} />
        </div>
    )
  }

  return (
    <DashboardLayout>
      <Row justify="center" className='py-4'>
        <Col lg={22}>
          <div className="mt-5">
            <p className="text-3xl font-bold">
              {leagueInfo.leagueDetails ? leagueInfo.leagueDetails.league_name : 'League Name'}
            </p>
          </div>
          <Row gutter={24} className="display-team-container">
            <Col lg={16}>
              <div className="gameweek-display-container">
                <div className="game-display">
                  <p>
                    <span className="white">League date: </span>
                    <span className="green">{longDate(leagueInfo.leagueDetails.league_start_date)} -</span>
                    <span className="green"> {longDate(leagueInfo.leagueDetails.league_end_date)}</span>
                  </p>
                </div>
                <div className="green-band"></div>
              </div>
              <div className={'w-full mt-5'}>
                <table className={'table-fixed w-full'}>
                  <thead>
                    <tr className={'bg-gray-300'}>
                      <th className={'w-1/12'}>
                        <div className={'p-2'}>
                          <p className={'text-xs font-bold text-primary-brand-400'}>Rank</p>
                        </div>
                      </th>
                      <th className={'w-1/2'}>
                        <div className={'p-2'}>
                          <p className={'text-xs font-bold text-primary-brand-400'}>Team and Manager</p>
                        </div>
                      </th>
                      <th className={'w-1/6'}>
                        <div className={'p-2'}>
                          <p className={'text-xs font-bold text-primary-brand-400'}>Game Week</p>
                        </div>
                      </th>
                      <th className={'w-1/6'}>
                        <div className={'p-2'}>
                          <p className={'text-xs font-bold text-primary-brand-400'}>Total Point</p>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {leagueInfo.leagueParticipant.length < 1 && (
                      <div className={'w-full'}>
                        <p>No participant yet</p>
                      </div>
                    )} */}
                    {leagueInfo.leagueParticipant.map((item, index, array) => {
                      return (
                        <tr>
                          <td>
                            <div className={'p-2'}>
                              <p className={'text-xs font-medium text-primary-brand-400'}>1</p>
                            </div>
                          </td>
                          <td>
                            <div className={'p-2'}>
                              <p className={'text-xs font-bold text-primary-brand-darker'}>{item.teamName}</p>
                              <p className={'text-xs font-medium'}>{item.manager}</p>
                            </div>
                          </td>
                          <td>
                            <div className={'p-2'}>
                              <p className={'text-xs font-medium'}>{item.gameweek}</p>
                            </div>
                          </td>
                          <td>
                            <div className={'p-2'}>
                              <p className={'text-xs font-medium'}>{item.totalPoint}</p>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
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

export default LeagueInfo;
