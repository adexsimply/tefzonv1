import React from 'react';
import { Row, Col} from "antd";

function LeagueItemList({LeagueName, currentRank, lastRank, onClick, settings, className}) {

  return (
    <div role={'button'} className={className} onClick={onClick}>
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
