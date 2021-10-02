import React, { useContext } from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Button, Row, Col, Input, Form } from "antd";
import { useHistory } from 'react-router-dom';
import {getTefzonLeagues} from '../../helpers/api'
import { LeagueContext } from '../../store/LeagueContext';
import { openNotification } from '../../helpers/notification';

function JoinLeague() {
  const {
    tefzonLeagues,
    setTefzonLeagues,
    setSingleLeagueData,
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
  })

  const handleLeagueView = (leagueData) => {
    setSingleLeagueData(leagueData);
    history.push('/leagues/league-info');
  }

  return (
    <DashboardLayout>
      <Row justify="center" className='py-4'>
        <Col lg={22}>
          <div className="mt-4">
            <p className="text-3xl font-bold">Join League</p>
          </div>
          <Row gutter={24} className={'mt-5'}>
            <Col lg={12}>
              <div>
                <div className="mt-2">
                  <p className="text-base font-bold">Search League To Join</p>
                </div>
                <Form layout='vertical' requiredMark={false} className="mt-3">
                  <Row gutter={0} >
                    <Col span={18}>
                      <Form.Item
                        name="searchLeague"
                      >
                        <Input className={'w-ful h-14 border-r-0 rounded-r-none'} placeholder="Search League" />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Button className='w-full h-14 border-l-0 rounded-l-none bg-primary-brand-darker rounded'>
                        <p className='text-white font-bold'>Search</p>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col lg={12}>
              <div>
                <div className="mt-2">
                  <p className="text-base font-bold">Enter League Code To Join</p>
                </div>
                <Form layout='vertical' requiredMark={false} className="mt-3">
                  <Row gutter={0} >
                    <Col span={18}>
                      <Form.Item
                        name="searchLeague"
                      >
                        <Input className={'w-ful h-14 border-r-0 rounded-r-none'} placeholder="Search League" />
                      </Form.Item>
                    </Col>
                    <Col span={6}>
                      <Button className='w-full h-14 border-l-0 rounded-l-none bg-primary-brand-darker rounded'>
                        <p className='text-white font-bold'>Join</p>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
          <div>
            <p className="text-xl font-bold">List of live public leagues</p>
          </div>
          <Row gutter={24} className="display-team-container">
            <Col lg={16}>
              <div className={'w-full mt-2'}>
                <table className={'table-fixed w-full'}>
                  <thead>
                    <tr className={'bg-gray-300'}>
                      <th className={'w-1/4'}>
                        <div className={'p-2'}>
                          <p className={'text-xs font-bold text-primary-brand-400'}>S/N</p>
                        </div>
                      </th>
                      <th className={'w-2/4'}>
                        <div className={'p-2'}>
                          <p className={'text-xs font-bold text-primary-brand-400'}>League Name</p>
                        </div>
                      </th>
                      <th className={'w-2/4'}>
                        <div className={'p-2'}>
                          <p className={'text-xs font-bold text-primary-brand-400'}>League Type(free/paid)</p>
                        </div>
                      </th>
                      <th className={'w-1/4'}>
                        <div className={'p-2'}>
                          {/* <p className={'text-xs font-bold text-primary-brand-400'}>Total Point</p> */}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tefzonLeagues.map((item, index) => {
                      return (
                        <tr>
                          <td>
                            <div className={'p-2 py-4'}>
                              <p className={'text-xs font-medium capitalize'}>{index + 1}</p>
                            </div>
                          </td>
                          <td>
                            <div className={'p-2 py-4'}>
                              <p className={'text-xs font-bold capitalize text-primary-brand-darker'}>{item.league_name}</p>
                            </div>
                          </td>
                          <td>
                            <div className={'p-2 py-4'}>
                              <p className={'text-xs font-medium capitalize'}>{item.league_paid === 1 ? 'Paid' : 'Free'}</p>
                            </div>
                          </td>
                          <td>
                            <div role={'button'} className={'p-2 py-4'} onClick={() => handleLeagueView(item)}>
                              <p className={'text-xs font-bold capitalize text-primary-brand-darker'}>Join</p>
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

export default JoinLeague;
