import React from "react";
import { Row, Col } from "antd";

const FixtureDetail = (props) => {
	return (
		<div className="">
			<Row className="justify-center border-b border-gray-4 py-4">
				<Col lg={6} className="flex items-center justify-end">
					<p className="text-xl font-normal">Crystal Palace</p>
					<img src={props.logo} className="w-10 h-12 ml-3" alt="club logo" />
				</Col>
				<Col lg={3} className="justify-center flex items-center">
					<div className="border border-gray-3 text-center p-2 w-1/2  ">
						<p className="mb-0">19:00</p>
					</div>
				</Col>
				<Col lg={6} className="flex items-center">
					<img src={props.logo} className="w-10 h-12 mr-3" alt="club logo" />
					<p className="text-xl font-normal">Crystal Palace</p>
				</Col>
			</Row>
			<Row className="justify-center border-b border-gray-4 py-4">
				<Col lg={6} className="flex items-center justify-end">
					<p className="text-xl font-normal">Crystal Palace</p>
					<img src={props.logo} className="w-10 h-12 ml-3" alt="club logo" />
				</Col>
				<Col lg={3} className="justify-center flex items-center">
					<div className="border border-gray-3 text-center p-2 w-1/2  ">
						<p className="mb-0">19:00</p>
					</div>
				</Col>
				<Col lg={6} className="flex items-center">
					<img src={props.logo} className="w-10 h-12 mr-3" alt="club logo" />
					<p className="text-xl font-normal">Crystal Palace</p>
				</Col>
			</Row>
			<Row className="justify-center border-b border-gray-4 py-4">
				<Col lg={6} className="flex items-center justify-end">
					<p className="text-xl font-normal">Crystal Palace</p>
					<img src={props.logo} className="w-10 h-12 ml-3" alt="club logo" />
				</Col>
				<Col lg={3} className="justify-center flex items-center">
					<div className="border border-gray-3 text-center p-2 w-1/2  ">
						<p className="mb-0">19:00</p>
					</div>
				</Col>
				<Col lg={6} className="flex items-center">
					<img src={props.logo} className="w-10 h-12 mr-3" alt="club logo" />
					<p className="text-xl font-normal">Crystal Palace</p>
				</Col>
			</Row>
		</div>
	);
};

export default FixtureDetail;
