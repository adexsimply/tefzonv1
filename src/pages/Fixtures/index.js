import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/common/Layout";
import { Row, Col, Button, Spin } from "antd";
import { getFixtures } from "../../helpers/api";
import CalendarIcon from "../../assets/img/icons/calendar.svg";
import ArrowLeftIcon from "../../assets/img/icons/arrow-left-white.svg";
import ArrowRightIcon from "../../assets/img/icons/arrow-right-white.svg";
import FixtureDisplay from "./FixtureDisplay";

import "./Fixtures.scss";

const Fixtures = () => {
	const [fixtureData, setFixtureData] = useState(null);
	const [loadingFixture, setLoadingFixture] = useState(false);
	useEffect(() => {
		handlegetFixtures();
	}, []);
	const handlegetFixtures = async () => {
		setLoadingFixture(true);
		try {
			const data = await getFixtures();
			console.log(data.results);
			setFixtureData(data.results);
			setLoadingFixture(false);
		} catch (error) {
			console.log(error);
			setLoadingFixture(false);
		}
	};
	const displayFixtures = () => {
		if (loadingFixture) {
			return (
				<div>
					<Spin />
				</div>
			);
		} else {
			if (fixtureData === null) {
				return (
					<div>
						<Spin />
					</div>
				);
			} else {
				return fixtureData.map((fixtureInfo) => {
					const { teams, fixture, goals, score, league } = fixtureInfo;
					return (
						<FixtureDisplay
							fixture={fixture}
							teams={teams}
							goals={goals}
							league={league}
							score={score}
						/>
					);
				});
			}
		}
	};
	return (
		<DashboardLayout>
			{loadingFixture ? (
				<div className="text-center">
					<Spin />
				</div>
			) : (
				<div className="fixtures-container">
					<Row justify="center">
						<Col lg={6} className="fixture-flex-col">
							<Button className="fixture-tab-btn">Fixtures</Button>
							<Button className="fixture-tab-btn active-fix-btn">FDR</Button>
						</Col>
					</Row>
					<Row justify="center">
						<Col lg={18}>
							<h2 className="heading">Fixtures & Results</h2>
							<div className="flex justify-center">
								<Button className="calendar-btn">
									<img src={CalendarIcon} alt="calendar icon" /> Sync to
									Calendar
								</Button>
							</div>
							<div className="fixture-pagination">
								<Row align="center">
									<Col lg={5}>
										<Button className="w-full flex items-center justify-between">
											<img src={ArrowLeftIcon} alt="arrow icon" />
											Previous
										</Button>
									</Col>
									<Col lg={12} className="flex items-center justify-center">
										<p>Gameweek 20 - Tue 26 Jan 17:30</p>
									</Col>
									<Col lg={5}>
										<Button className="flex w-full items-center justify-between">
											Next
											<img src={ArrowRightIcon} alt="" />
										</Button>
									</Col>
								</Row>
							</div>
							<div>{displayFixtures()}</div>
						</Col>
					</Row>
				</div>
			)}
		</DashboardLayout>
	);
};

export default Fixtures;
