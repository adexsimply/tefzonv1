import React, { useContext } from 'react';
import { Button, Row, Col, Input, Form } from "antd";

function LeagueItemList({LeagueName, currentRank, lastRank, settings, className}) {

  return (
    <div role={'button'} className={className}>
      <Row align={'middle'} gutter={15} className={'p-3'}>
        <Col span={9}>
          <p className={'text-xs font-bold text-primary-brand-400'}>{LeagueName}</p>
        </Col>
        <Col span={5}>
          <p className={'text-xs font-medium'}>{currentRank}</p>
        </Col>
        <Col span={5}>
          <p className={'text-xs font-medium'}>{lastRank}</p>
        </Col>
        <Col span={5}>
          <p className={'text-xs font-medium'}>Option</p>
        </Col>
      </Row>
    </div>
  );
}

export default LeagueItemList;
