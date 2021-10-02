import React from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Button, Row, Col, Input, DatePicker, Select, Form } from "antd";
import { createUserTeam, getRealLeagues } from '../../helpers/api';
import { openNotification } from '../../helpers/notification';
import { AiOutlineLoading } from "react-icons/ai";
// import Form from 'antd/lib/form/Form';

function CreateLeague() {
  const [loading, setLoading] = React.useState(false);
  const [disableAmount, setDisableAmount] = React.useState(true);
  const [realLeagues, setRealLeagues] = React.useState([]);
  const [startDate, setStartDate] = React.useState('0000-00-00');
  const [endDate, setEndDate] = React.useState('0000-00-00');

	const dateFormat = "YYYY-MM-DD";
  const { Option } = Select;

  React.useEffect(() => {
    getRealLeagues()
    .then((response) => {
      setRealLeagues(response.getAllSystemRealLeagues)
    })
    .catch((error) => {
      openNotification({
        title: 'Error getting leagues',
        message: 'We encounter an error while trying to pull league data',
        type: 'error',
      })
    })
  }, [])

	// function onChange(date, dateString) {
	// 	setDob(dateString);
	// }

  const onChangeStartDate = (date, dateString) => {
    setStartDate(dateString)
  }

  const onChangeEndDate = (date, dateString) => {
    setEndDate(dateString)
  }

  const handleCreateLeague = (values) => {
    const leagueData = {...values, league_start_date: startDate, league_end_date: endDate}
    setLoading(true)
    console.log(leagueData)
    createUserTeam(leagueData)
    .then((response) => {
      console.log(response);
      openNotification({
        title: 'League Created Successful',
        message: 'Your league has been created successsfullly',
        type: 'success'
      })
    })
    .catch(error => {
      setLoading(false)
      console.log(error)
      openNotification({
        title: 'Error creating League',
        message: error.errorMessages,
        type: 'error'
      })
    })
    .finally(() => {
      setLoading(false)
    })
  }

  // "league_name":"My Second League 2",
  // "league_type": "public",
  // "league_start_date": "2021-09-27",
  // "league_end_date": "2021-10-02",
  // "league_paid": 0,
  // "amount": "10000",
  // "league_winner_type": "default",
  // "allowed_league_id": 39

  const handleaguePaid = (value) => {
    console.log(value)
    if(value === 1) {
      setDisableAmount(false)
    } else {
      setDisableAmount(true)
    }
  }

  return (
    <DashboardLayout>
      <Row justify="center" className='py-4'>
        <Col lg={22}>
          <div className="mt-4">
            <p className="text-3xl font-bold">Create League</p>
          </div>
          <div className="mt-3">
            <p className="text-base font-medium">Enter league name to create your league</p>
          </div>
          <Row gutter={24} className="display-team-container">
            <Col lg={16}>
              <div className={'w-full mt-2 create-team'}>
                <Form layout='vertical' requiredMark={false} className="mt-3" onFinish={handleCreateLeague}>
                  <Row gutter={24} className={'mt-3'} >
                    <Col span={12}>
                      <Form.Item
                        name="league_name"
                        label={'League Name'}
                      >
                        <Input className={'h-14 border border-gray-400'} placeholder="Enter League name" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="league_type"
                        label={'League Type'}
                        rules={[
                          {
                            required: true,
                            message: "Please Select the league type",
                          },
                        ]}
                      >
                        <Select
                          // bordered={false}
                          className={'w-full h-14 border-transparent bg-transperant'}
                          defaultValue={'Select an option'}
                          size={'large'}
                        >
                          <Option className={'w-full h-14 border-transparent'} value={'public'}>Public</Option>
                          <Option className={'w-full h-14 border-transparent'} value={'private'}>Private</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={24} className={'mt-3'} >
                    <Col span={12}>
                      <Form.Item
                        name="league_start_date"
                        label={'Start Date'}
                        // className="mt-4 w-full "
                        rules={[
                          {
                            required: true,
                            message: "please enter the date this league will start",
                          },
                        ]}
                      >
                        <DatePicker
                          className="w-full h-14 border border-gray-400"
                          onChange={onChangeStartDate}
                          format={dateFormat}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="league_end_date"
                        label={'End Date'}
                        rules={[
                          {
                            required: true,
                            message: "Please enter the date the league will end",
                          },
                        ]}
                      >
                        <DatePicker
                          className="w-full h-14 border border-gray-400"
                          onChange={onChangeEndDate}
                          format={dateFormat}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={24} className={'mt-3'} >
                    <Col span={12}>
                      <Form.Item
                        name="league_paid"
                        label={'League Paymet Type'}
                        // className="mt-4 w-full "
                        rules={[
                          {
                            required: true,
                            message: "Please select if the league will be paid or free",
                          },
                        ]}
                      >
                        <Select
                          defaultValue={'Select an option'}
                          onChange={handleaguePaid}
                          >
                          <Option className={'w-full h-14 border-transparent'} value={1}>Paid</Option>
                          <Option className={'w-full h-14 border-transparent'} value={0}>Free</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="amount"
                        label={'Amount'}
                       >
                        <Input disabled={disableAmount} className={'h-14 border border-gray-400'} placeholder="Enter Amout" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={24} className={'mt-3'} >
                    <Col span={12}>
                      <Form.Item
                        name="league_winner_type"
                        label={'League Winner Type'}
                        // className="mt-4 w-full "
                        rules={[
                          {
                            required: true,
                            message: "Please select the league winner type",
                          },
                        ]}
                      >
                        <Select
                          defaultValue={'Select an option'}
                          >
                          <Option className={'w-full h-14 border-transparent'} value={'default'}>Default (Top 3 takes the price)</Option>
                          <Option className={'w-full h-14 border-transparent'} value={'winner'}>Winner (Winner takes all)</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="allowed_league_id"
                        label={'League'}
                        rules={[{ required: true, message: "Please select league"}]}>
                          <Select
                            defaultValue={'Select an option'}
                            >
                              {realLeagues.map((item, index) => (
                                <Option className={'w-full h-14 border-transparent'} value={item.id}>{item.league_name}</Option>
                              ))}
                          </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Button htmlType="submit" className='w-full h-14 border-l-0 rounded-l-none bg-primary-brand-darker rounded'>
                        {loading ?
                          <div className={'w-full flex items-center justify-center'}>
                            <AiOutlineLoading size={40} color={'#8139e6'} className={'animate-spin'} />
                          </div>
                          :
                            <p className='text-white font-bold'>Create League</p>
                        }
                      </Button>
                    </Col>
                  </Row>
                </Form>
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

export default CreateLeague;
