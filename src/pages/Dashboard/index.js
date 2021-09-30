import React from "react";
import { Button, Row, Col, Input, Form } from "antd";
import DashboardLayout from "../../components/common/DashboardLayout";
import ActionCard from "../../components/ActionCard";
import PlayerIcon from "../../assets/img/pitch-jersey.svg";
import Players from "../../assets/img/soccer.svg";

const DashboardPage = () => {
	return (
		<DashboardLayout>
			<Row justify="center" className='py-4'>
        <Col lg={22}>
          <div className="mt-4">
            <p className="text-3xl font-bold">Explore</p>
          </div>
          <Row gutter={24} className="display-team-container">
            <Col lg={12}>
              <ActionCard
                image={Players}
                title={'Join League Now'}
                description={'This is a short descrption'} />
            </Col>
            <Col lg={12}>
              <ActionCard
                image={PlayerIcon}
                title={'Edit Your Teams in teams section'}
                description={'Edit your team or create one if you havent'} />
            </Col>
          </Row>
        </Col>
      </Row>
		</DashboardLayout>
	);
};

export default DashboardPage;
