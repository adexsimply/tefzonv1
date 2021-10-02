import React from 'react';
import { Row, Col } from "antd";

function LeagueListHeader({LeagueName, currentRank, lastRank, settings, className}) {

  return (
    <div className={'w-full p-3 mt-3 bg-primary-brand-light'}>
      <Row align={'middle'} gutter={15}>
        <Col span={9}>
          <p className={'text-xs font-bold'}>League</p>
        </Col>
        <Col span={5}>
          <p className={'text-xs font-bold'}>Current Rank</p>
        </Col>
        <Col span={5}>
          <p className={'text-xs font-bold'}>Last Rank</p>
        </Col>
        <Col span={5}>
          <p className={'text-xs font-bold'}>Settings</p>
        </Col>
      </Row>
    </div>
  );
}

export default LeagueListHeader;
