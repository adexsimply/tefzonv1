import React from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Row, Col } from "antd";
import { teams } from '../../helpers/mockData';
// import Form from 'antd/lib/form/Form';

function LeagueInfo() {

  return (
    <DashboardLayout>
      <Row justify="center" className='py-4'>
        <Col lg={22}>
          <div className="mt-5">
            <p className="text-3xl font-bold">League Name - Creator Name</p>
          </div>
          <Row gutter={24} className="display-team-container">
            <Col lg={16}>
              <div className="gameweek-display-container">
                <div className="game-display">
                  <p>
                    <span className="white">Gameweek 1:</span>
                    <span className="green">Sat 25 Sep</span>
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
                    {teams.map((item, index) => {
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
