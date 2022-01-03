import React from 'react';
import { Row, Col} from "antd";

function LeagueItemList({LeagueName, leagueType, inviteCode, onClick, settings, className, onClickOption}) {

  return (
    <div role={'button'} className={className} onClick={onClick}>
      <Row align={'middle'} gutter={15} className={'p-3'}>
        <Col span={9}>
          <p className={'text-xs font-bold text-primary-brand-400'}>{LeagueName}</p>
        </Col>
        <Col span={5}>
          <p className={'text-xs font-medium'}>{leagueType}</p>
        </Col>
        <Col span={5}>
          <p className={'text-xs font-medium'}>{inviteCode}</p>
        </Col>
        <Col span={5}>
          <div role={'button'} className={className} onClick={onClickOption}>
            <p className={'text-xs font-medium'}>Option</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LeagueItemList;
