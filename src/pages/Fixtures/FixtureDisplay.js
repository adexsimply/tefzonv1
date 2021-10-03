import React from "react";
import { Row, Col } from "antd";
import { longDate } from "../../helpers/utils";

const FixtureDisplay = ({ fixture, teams, goals }) => {
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
			<Row justify={'space-between'} className="fixture">
				<Col lg={10} className="flex justify-end items-center left-section">
					<p>{teams.home.name}</p>
					<img
						src={teams.home.logo}
						className="fixture-logo"
						alt={teams.home.name}
					/>
				</Col>
				<Col lg={4} className="w-full flex items-center justify-center">
					{fixture.status.elapsed > 0 ? (
						<Row gutter={3}>
							<Col>
								<div className={'flex justify-center items-center w-8 h-8 bg-primary-brand-darker'}>
									<p className={'text-white text-base font-semibold'}>{goals.home}</p>
								</div>
							</Col>
							<Col>
								<div className={'flex justify-center items-center w-8 h-8 bg-primary-brand-darker'}>
									<p className={'text-white text-base font-semibold'}>{goals.away}</p>
								</div>
							</Col>
						</Row>
					) : (
						<div className="time-stamp">{formatTimeStamp(fixture.timestamp)}</div>
					)}
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
