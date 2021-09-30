import React from "react";
import { Row, Col } from "antd";
import { longDate } from "../../helpers/utils";

const FixtureDisplay = ({ fixture, teams }) => {
	const formatTimeStamp = (timestamp) => {
		var d = new Date(timestamp);
		var n = d.toLocaleTimeString();
		var splTime = n.split(" ")[0].split(":");
		return `${splTime[0]}:${splTime[1]}`;
	};
	return (
		<div className="fixture-display-container">
			<div className="heading--panel">
				<p className="text-center">{longDate(fixture.date)}</p>
			</div>
			<Row className="fixture">
				<Col lg={10} className="flex justify-end items-center left-section">
					<p>{teams.home.name}</p>
					<img
						src={teams.home.logo}
						className="fixture-logo"
						alt={teams.home.name}
					/>
				</Col>
				<Col lg={4} className="flex items-center">
					<div className="time-stamp">{formatTimeStamp(fixture.timestamp)}</div>
				</Col>
				<Col lg={10} className="flex justify-start items-center right-section">
					<img
						className="fixture-logo"
						src={teams.away.logo}
						alt={teams.away.name}
					/>
					<p>{teams.away.name}</p>
				</Col>
			</Row>
		</div>
	);
};

export default FixtureDisplay;
