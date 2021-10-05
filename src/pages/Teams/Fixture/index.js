import React from "react";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import { Row, Col, Button } from "antd";
import Club1 from "../../../assets/img/static/crystal_palace_logo.png";
import FixtureDetail from "./FixtureDetail";

const Fixture = () => {
	return (
		<section className="mt-20 w-full">
			<div>
				<h2 className="f-oswald font-medium text-center text-4xl">Fixtures</h2>
			</div>
			<Row className="justify-between">
				<Col lg={6}>
					<Button
						className="bg-primary-brand text-white text-xl h-14 flex justify-between items-center"
						block
					>
						<CgArrowLongLeft />
						Previous
					</Button>
				</Col>
				<Col lg={6}>
					<p>Gameweek 20 - Tue 26 Jan 17:30</p>
				</Col>
				<Col lg={6}>
					<Button
						className="bg-primary-brand text-white text-xl h-14 flex justify-between items-center"
						block
					>
						{" "}
						Next
						<CgArrowLongRight />
					</Button>
				</Col>
			</Row>
			<div className="display-fixtures mt-6">
				<div className="">
					<div className="heading bg-gray-2 py-2">
						<p className="text-center text-xl font-normal">
							Tuesday 26 January 2021
						</p>
					</div>
					<FixtureDetail logo={Club1} />
				</div>
				<div className="">
					<div className="heading bg-gray-2 py-2">
						<p className="text-center text-xl font-normal">
							Tuesday 26 January 2021
						</p>
					</div>
					<FixtureDetail logo={Club1} />
				</div>
			</div>
		</section>
	);
};

export default Fixture;
