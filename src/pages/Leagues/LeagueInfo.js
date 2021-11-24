import React from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Row, Col, Button, Comment, Tooltip, Avatar } from "antd";
// import { Link, useHistory } from 'react-router-dom';
import { AiOutlineLoading } from "react-icons/ai";
import { LeagueContext } from '../../store/LeagueContext';
import { openNotification } from '../../helpers/notification';
import { checkPlayerTeamInLeague, getAllUserTeam, getLeagueInfo } from '../../helpers/api';
import { longDate } from '../../helpers/utils';
import FixtureDisplay from '../Fixtures/FixtureDisplay';
import { TeamContext } from '../../store/TeamContext';
import { AppContext } from '../../store/AppContext';
import { Link } from 'react-router-dom';
import ViewTeamSidebar from '../../components/ViewTeamSidebar';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

function LeagueInfo() {
  const [loadingPage, setLoadingPage] = React.useState(true);
  const [loadingUserTeam, setLoadingUserTeam] = React.useState(true)
  // const [loadingJoinBtn, setLoadingJoinBtn] = React.useState(false);
  const [leagueId, setLeagueId] = React.useState(null);

  // const { Option } = Select;

  const {
    // userTeams,
    setUserTeams,
  } = React.useContext(TeamContext);

  const {user} = React.useContext(AppContext);

  const {
    leagueInfo,
    setLeagueInfo,
    userTeamInLeague,
    setUserTeamInLeague
  } = React.useContext(LeagueContext);

  React.useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let league_Id = urlParams.get('leagueId');
    setLeagueId(league_Id);

    getUserTeamInLeague(league_Id);

    getLeagueInfo(league_Id)
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

  const getUserTeamInLeague = (league_id) => {
    checkPlayerTeamInLeague(league_id)
    .then((response) => {
      console.log(response.result);
      setUserTeamInLeague(response.result);
    })
    .catch((error) => {
      console.log(error);
      setUserTeamInLeague(null);
    })
      .finally(() => {
        setLoadingUserTeam(false)
      })

  }

  // const handleJoinLeague = (values) => {
  //   // let data = {...values, league_id: leagueInfo?.leagueDetails.id}
  //   // console.log({...values, league_id: leagueInfo?.leagueDetails.id});
  //   setLoadingJoinBtn(true);
  //   joinLeague({...values, league_id: leagueInfo?.leagueDetails.id})
  //   .then((response) => {
  //     openNotification({
  //       title: 'Successfull',
  //       message: 'You have successfully join the league',
  //       type: 'success',
  //     })
  //   })
  // .catch(error => {
  //   openNotification({
  //     title: 'Error',
  //     message: error.message,
  //     type: 'error',
  //   })
  // })
  // .finally(() => {
  //   setLoadingJoinBtn(false)
  // })
  // }

  

  const isUserFound = (data, key) => {
    let value = data.find(element => element === key);
    return value === key;
  }

  const isUser = (idCompare, userId) => {
    return idCompare === userId;
  }

  const isUserInLeague = React.useCallback(() => (data = leagueInfo.leagueParticipant, key = user.id) => {
    let value = data.find(element => element.user.id === key);
    return value === key;
  }, [leagueInfo, user])

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
          <Row gutter={24} className="display-team-container mt-5">
            <Col lg={16}>
              <div>
                <p className="text-3xl font-bold">
                  {leagueInfo.leagueDetails ? leagueInfo.leagueDetails.league_name : 'League Name'}
                </p>
                <p className="text-sm font-bold mt-2 text-gray-500">
                  <span className="white">League Date: </span>
                  <span className="green">{longDate(leagueInfo.leagueDetails.league_start_date)} -</span>
                  <span className="green"> {longDate(leagueInfo.leagueDetails.league_end_date)}</span>
                </p>
              </div>
              <div className={'mt-3'}>
                <Row gutter={8}>
                  <Col>
                    <div className={'rounded-md bg-gray-300'}>
                      <p className={'px-2 py-1 gray-red-900 text-xs'}>{leagueInfo.leagueDetails.league_type}</p>
                    </div>
                  </Col>
                  <Col>
                    <div className={'rounded-md bg-gray-300'}>
                      <p className={'px-2 py-1 text-gray-900 text-xs'}>{leagueInfo.leagueDetails.league_status}</p>
                    </div>
                  </Col>
                  <Col>
                    <div className={'rounded-md bg-gray-300'}>
                      <p className={'px-2 py-1 text-gray-900 text-xs'}>{leagueInfo.leagueDetails.league_winner_type}</p>
                    </div>
                  </Col>
                  <Col>
                    <div className={'rounded-md bg-gray-300'}>
                      <p className={'px-2 py-1 text-gray-900 text-xs'}>{leagueInfo.leagueDetails.league_paid === 1 ? 'paid' : 'free'}</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="gameweek-display-container mt-10">
                <div className="game-display">
                  <p>
                    <span className="white">Today's Date: </span>
                    <span className="green">{longDate(new Date())}</span>
                  </p>
                </div>
                <div className="green-band"></div>
              </div>
              <div className={'w-full mt-10'}>
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
                      {/* <th className={'w-1/6'}>
                        <div className={'p-2'}>
                          <p className={'text-xs font-bold text-primary-brand-400'}>Game Week</p>
                        </div>
                      </th> */}
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
                      const isUser = item.user.id === user.id;
                      return (
                        <tr key={item.squadname?.team_name} className={isUser && 'bg-purple-200'}>
                          <td>
                            <div className={'p-2'}>
                              <p className={'text-xs font-medium text-primary-brand-400'}>1</p>
                            </div>
                          </td>
                          <td>
                            <div className={'p-2'}>
                              <p className={'text-xs font-bold text-primary-brand-darker'}>{item.squadname?.team_name}</p>
                              <p className={'text-xs font-medium'}>{item.user?.first_name + ' ' + item.user?.last_name}</p>
                            </div>
                          </td>
                          {/* <td>
                            <div className={'p-2'}>
                              <p className={'text-xs font-medium'}>{item.gameweek}</p>
                            </div>
                          </td> */}
                          <td>
                            <div className={'p-2'}>
                              <p className={'text-xs font-medium'}>{item.user_points}</p>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                {leagueInfo.leagueParticipant.length < 1 && (
                  <div className={'w-full text-center mt-5'}>
                    <p className='text-gray-400 text-sm font-medium'>No participant yet</p>
                  </div>
                )}
              </div>
              <div className="gameweek-display-container mt-14">
                <div className="game-display">
                  <p>
                    {/* <span className="white">Today's Date: </span> */}
                    <span className="white">League Fixtures</span>
                  </p>
                </div>
                <div className="green-band"></div>
              </div>
              <div>
                {leagueInfo.leagueFxixture.map((fixtureInfo) => {
                  const { teams, fixture, goals, score, league } = fixtureInfo;
                  return (
                    <FixtureDisplay
                      key={`${teams.home.name}${teams.away.name}`}
                      fixture={fixture}
                      teams={teams}
                      goals={goals}
                      league={league}
                      score={score}
                    />
                  );
                })}
              </div>
              <div className={'mt-8'}>
                <div>
                  <p className="text-3xl font-bold">
                    Comments
                  </p>
                  <p className="text-sm font-bold mt-1 text-gray-500">
                    <span className="white">League comments from participant</span>
                  </p>
                </div>
                <Comment
                  // actions={actions}
                  author={<a>Han Solo</a>}
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                  content={
                    <p>
                      We supply a series of design principles, practical patterns and high quality design
                      resources (Sketch and Axure), to help people create their product prototypes beautifully
                      and efficiently.
                    </p>
                  }
                  // datetime={
                  //   // <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  //   //   <span>{moment().fromNow()}</span>
                  //   // </Tooltip>
                  // }
                />
              </div>
            </Col>
            <Col lg={8} className={'pl-12'}>
              {/* <Form layout='vertical' requiredMark={false} onFinish={handleJoinLeague} >
                <Form.Item
                  name="team_id"
                  label={'Select Team'}
                  rules={[{ required: true, message: "Please select team"}]}>
                    <Select>
                        {userTeams.map((item, value) => (
                          <Option key={item.team_name} className={'w-full h-14 border-transparent'} value={item.id}>{item.team_name}</Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" className='w-full h-14 bg-primary-brand-darker rounded'>
                    {loadingJoinBtn ?
                      <div className={'w-full flex items-center justify-center'}>
                        <AiOutlineLoading size={40} color={'#8139e6'} className={'animate-spin'} />
                      </div>
                      :
                        <p className='text-white font-bold'>Join League</p>
                    }
                  </Button>
                </Form.Item>
              </Form> */}
              {loadingUserTeam && (
                <div className={'w-full flex items-center justify-center'}>
                  <AiOutlineLoading size={40} color={'#8139e6'} className={'animate-spin'} />
                </div>
              )}
              {!userTeamInLeague && 
                <Link to={`/teams/create-team?leagueId=${leagueId}`}>
                  <Button className='w-full mx-4 h-14 bg-primary-brand-darker rounded'>
                    <p className='text-white font-bold'>Create New Team</p>
                  </Button>
                </Link>}
              {userTeamInLeague && isUserInLeague() &&
                <ViewTeamSidebar
                  teamName={userTeamInLeague.squadname?.team_name}
                  totalPlayers={leagueInfo.leagueParticipant?.length}
                  points={userTeamInLeague.user_points ? userTeamInLeague.user_points : '0'}
                  rank={userTeamInLeague.user_ranking ? userTeamInLeague.user_ranking : '0'}/>
              }
              <p>{isUserInLeague()}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </DashboardLayout>
  );
}

export default LeagueInfo;
