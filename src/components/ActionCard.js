import React from 'react';
import { Button, Row, Col, Input, Form } from "antd";

function ActionCard({image, imageAlt, title, description, onClick}) {

  return (
    <div role={'button'} className={'w-full h-48 bg-gray-300 px-4 py-4'} onClick={onClick}>
      <Row gutter={20} className={'w-full h-full'} >
        <Col span={12} className={'w-full h-full max-h-full overflow-hidden'}>
          {/* <div className={'w-full h-full bg-contain bg-no-repeat bg-center'} style={{backgroundImage: `url(${image})`}} /> */}
          <div className={'w-full h-full max-h-full overflow-hidden'}>
            <img src={image} alt={imageAlt} className={'w-full h-auto'} />
          </div>
        </Col>
        <Col span={12} >
          <h4 className={'text-2xl text-primary-brand-darker font-bold'}>{title}</h4>
          <p className={'text-base text-gray-600 mt-2'}>{description}</p>
        </Col>
      </Row>
    </div>
  );
}

export default ActionCard