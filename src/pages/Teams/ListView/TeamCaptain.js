import React, { useState, useEffect } from "react";
import { Row, Col, Radio, Popover } from "antd";
import { Link, useHistory } from "react-router-dom";

import { loadTeam, saveTeam } from "../../../store/localStorage";
import DashboardLayout from "../../../components/common/Layout";
import PitchBg from "../../../assets/img/static/pitch-bg.png";
import Jersey from "../../../assets/img/jersey.svg";
import InfoCircleIcon from "../../../assets/img/icons/info-circle-green.svg";

const TeamCaptain = () => {
	const [captainSelected, setCaptainSelected] = useState(false);
	const [updatedGoalKeepers, setGoalKeepers] = useState([]);
	const [updatedDefenders, setUpdatedDefenders] = useState([]);
	const [updatedMidfielders, setUpdatedMidfielders] = useState([]);
	const [updatedForwards, setupdatedForwards] = useState([]);
  const [leagueId, setLeagueId] = React.useState(null);

	const team = loadTeam();
	const history = useHistory();

	useEffect(() => {
		getInitValues();
		// eslint-disable-next-line
	}, []);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let league_Id = urlParams.get('leagueId');
    setLeagueId(league_Id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

	const getInitValues = () => {
		let goalKeepers = team.filter(
			(player) => player.position.toLowerCase() === "goalkeeper"
		);
		let defenders = team.filter(
			(player) => player.position.toLowerCase() === "defender"
		);
		let midfielders = team.filter(
			(player) => player.position.toLowerCase() === "midfielder"
		);
		let forwards = team.filter(
			(player) => player.position.toLowerCase() === "attacker"
		);
		if (goalKeepers) setGoalKeepers([...goalKeepers]);
		if (defenders) setUpdatedDefenders([...defenders]);
		if (midfielders) setUpdatedMidfielders([...midfielders]);
		if (forwards) setupdatedForwards([...forwards]);
	};

	const handleCaptainSelect = (ev) => {
		const { value } = ev.target;

		const capt = team.filter((player) => player.id === value);

		if (capt) {
			switch (capt[0].position.toLowerCase()) {
				case "goalkeeper":
					const results = filterSelectedPlayer(value, updatedGoalKeepers);
					setGoalKeepers([...results]);
					break;
				case "midfielder":
					const mid = filterSelectedPlayer(value, updatedMidfielders);
					setUpdatedMidfielders(mid);
					break;
				case "defender":
					const def = filterSelectedPlayer(value, updatedDefenders);
					setUpdatedDefenders(def);
					break;
				case "attacker":
					const fwd = filterSelectedPlayer(value, updatedForwards);
					setupdatedForwards(fwd);
					break;
				default:
					break;
			}
			setCaptainSelected(true);
		}
	};
	const filterSelectedPlayer = (playerId, data) => {
		for (let item of data) {
			if (item.id === playerId) {
				item.is_captain = 1;
				console.log(item);
			}
			return data;
		}
	};

	const showPopUp = (playerDetail) => {
		return (
			<div>
				<p>{playerDetail.name}</p>
			</div>
		);
	};
	const displayGkPlayers = () => {
		if (team !== null) {
			return team.map((players) => {
				if (players.position.toLowerCase() === "goalkeeper") {
					return (
						<Row
							className="py-2 px-6 justify-between player-row"
							key={players.name}
						>
							<Col lg={10}>
								<div className="flex mr-6">
									<Popover
										content={() => showPopUp(players)}
										title={players.name}
									>
										<img src={InfoCircleIcon} alt="info icon" />
									</Popover>

									<img src={Jersey} className="ml-6" alt="jersey icon" />
									<div className="border-0 text-black rounded-none p-0 font-medium ml-4">
										<p className="font-light">{players.name}</p>
										<p>
											<span className="font-semibold inline-block">JUV</span>
											<span className="font-light uppercase inline-block ml-4">
												{players.position}
											</span>
										</p>
									</div>
								</div>
							</Col>

							<Col lg={12}>
								<Row>
									<Col
										lg={8}
										className="border-l border-secondary-gray-2-border"
									></Col>
									<Col lg={8}></Col>
									<Col lg={8}></Col>
								</Row>
							</Col>
							<Col lg={1}>
								<Radio value={players.id} />
							</Col>
						</Row>
					);
				} else {
					return null;
				}
			});
		}
	};

	const displayMidfielders = () => {
		if (team !== null) {
			return team.map((players) => {
				if (players.position.toLowerCase() === "midfielder") {
					return (
						<Row className="py-2 px-6 player-row justify-between">
							<Col lg={10}>
								<div className="flex mr-6">
									<Popover
										content={() => showPopUp(players)}
										title={players.name}
									>
										<img src={InfoCircleIcon} alt="info icon" />
									</Popover>

									<img src={Jersey} className="ml-6" alt="jersey icon" />
									<div className="border-0 text-black rounded-none p-0 font-medium ml-4">
										<p className="font-light">{players.name}</p>
										<p>
											<span className="font-semibold inline-block">JUV</span>
											<span className="font-light uppercase inline-block ml-4">
												{players.position}
											</span>
										</p>
									</div>
								</div>
							</Col>
							<Col lg={12}>
								<Row>
									<Col
										lg={8}
										className="border-l border-secondary-gray-2-border"
									></Col>
									<Col lg={8}></Col>
									<Col lg={8}></Col>
								</Row>
							</Col>
							<Col lg={1}>
								<Radio value={players.id} />
							</Col>
						</Row>
					);
				} else {
					return null;
				}
			});
		}
	};
	const displayDefenders = () => {
		if (team !== null) {
			return team.map((players) => {
				if (players.position.toLowerCase() === "defender") {
					return (
						<Row className="py-2 px-6 player-row justify-between">
							<Col lg={10}>
								<div className="flex mr-6">
									<Popover
										content={() => showPopUp(players)}
										title={players.name}
									>
										<img src={InfoCircleIcon} alt="info icon" />
									</Popover>

									<img src={Jersey} className="ml-6" alt="jersey icon" />
									<div className="border-0 text-black rounded-none p-0 font-medium ml-4">
										<p className="font-light">{players.name}</p>
										<p>
											<span className="font-semibold inline-block">JUV</span>
											<span className="font-light uppercase inline-block ml-4">
												{players.position}
											</span>
										</p>
									</div>
								</div>
							</Col>
							<Col lg={12}>
								<Row>
									<Col
										lg={8}
										className="border-l border-secondary-gray-2-border"
									></Col>
									<Col lg={8}></Col>
									<Col lg={8}></Col>
								</Row>
							</Col>
							<Col lg={1}>
								<Radio value={players.id} />
							</Col>
						</Row>
					);
				} else {
					return null;
				}
			});
		}
	};
	const displayForwards = () => {
		if (team !== null) {
			return team.map((players) => {
				if (players.position.toLowerCase() === "attacker") {
					return (
						<Row className="py-2 px-6 player-row justify-between">
							<Col lg={10}>
								<div className="flex mr-6">
									<Popover
										content={() => showPopUp(players)}
										title={players.name}
									>
										<img src={InfoCircleIcon} alt="info icon" />
									</Popover>

									<img src={Jersey} className="ml-6" alt="jersey icon" />
									<div className="border-0 text-black rounded-none p-0 font-medium ml-4">
										<p className="font-light">{players.name}</p>
										<p>
											<span className="font-semibold inline-block">JUV</span>
											<span className="font-light uppercase inline-block ml-4">
												{players.position}
											</span>
										</p>
									</div>
								</div>
							</Col>
							<Col lg={12}>
								<Row>
									<Col
										lg={8}
										className="border-l border-secondary-gray-2-border"
									></Col>
									<Col lg={8}></Col>
									<Col lg={8}></Col>
								</Row>
							</Col>
							<Col lg={1}>
								<Radio value={players.id} />
							</Col>
						</Row>
					);
				} else {
					return null;
				}
			});
		}
	};

	const finalTeam = [
		...updatedGoalKeepers,
		...updatedDefenders,
		...updatedForwards,
		...updatedMidfielders,
	];
	console.log(finalTeam);
	const updateTeamInfo = () => {
		saveTeam(finalTeam);
		history.replace(`/teams/team-name?leagueId=${leagueId}`);
	};

	return (
		<DashboardLayout>
			<div className=" pt-12 w-full">
				<Row align="center">
					<Col lg={22}>
						<div className="teams-heading flex justify-between items-center pb-4 border-b-2 border-primary-brand">
							<h2 className="f-oswald text-4xl font-medium">
								Select Your Captain
							</h2>
							<Link
								className="bg-tw-green rounded-none h-12 font-medium px-6 inline-flex items-center hover:text-white"
								disabled={captainSelected && false}
								onClick={(e) => {
									e.preventDefault();
									updateTeamInfo();
								}}
							>
								Next
							</Link>
						</div>

						<div className="team-content pb-8 mt-8">
							<Row>
								<Col lg={24}>
									<div
										className="w-full bg-no-repeat bg-cover h-auto py-2"
										style={{ backgroundImage: `url(${PitchBg})` }}
									>
										<div className="mt-16">
											{/* {pitchView === "list" ? <ListView /> : <PitchView />} */}

											<div className="teams-list-container px-3">
												<Radio.Group
													className="w-full"
													onChange={handleCaptainSelect}
												>
													<div className="bg-white h-full">
														{/* GK */}
														<div className="gk">
															<div className="heading bg-tw-yellow py-2 px-6 font-bold">
																<Row className="justify-between text-base">
																	<Col lg={10}>
																		<h3>Goal Keeper</h3>
																	</Col>
																	<Col lg={12}>
																		<Row>
																			<Col lg={8}>
																				<h3>SB</h3>
																			</Col>
																			<Col lg={8}>
																				<h3>TP</h3>
																			</Col>
																			<Col lg={8}>
																				<h3>Fix</h3>
																			</Col>
																		</Row>
																	</Col>
																</Row>
															</div>
															<div className="players text-regular">
																{displayGkPlayers()}
															</div>
														</div>
														{/* DEFENDERS */}
														<div className="defenders">
															<div className="heading bg-tw-green-light py-2 px-6 font-bold">
																<Row className="justify-between  text-base">
																	<Col lg={10}>
																		<h3>Defenders</h3>
																	</Col>
																	<Col lg={12}>
																		<Row>
																			<Col lg={8}>
																				<h3>SB</h3>
																			</Col>
																			<Col lg={8}>
																				<h3>TP</h3>
																			</Col>
																			<Col lg={8}>
																				<h3>Fix</h3>
																			</Col>
																		</Row>
																	</Col>
																</Row>
															</div>
															<div className="players text-regular">
																{displayDefenders()}
															</div>
														</div>
														{/* MID FIELDERS */}
														<div className="mid">
															<div className="heading bg-tw-sky-blue py-2 px-6 font-bold">
																<Row className="justify-between  text-base">
																	<Col lg={10}>
																		<h3>Midfielders</h3>
																	</Col>
																	<Col lg={12}>
																		<Row>
																			<Col lg={8}>
																				<h3>SB</h3>
																			</Col>
																			<Col lg={8}>
																				<h3>TP</h3>
																			</Col>
																			<Col lg={8}>
																				<h3>Fix</h3>
																			</Col>
																		</Row>
																	</Col>
																</Row>
															</div>
															<div className="players text-regular">
																{displayMidfielders()}
															</div>
														</div>
														{/* FORWARDS */}

														<div className="forward">
															<div className="heading bg-tw-red py-2 px-6 font-bold">
																<Row className="justify-between  text-base">
																	<Col lg={10}>
																		<h3 className="text-white">Forwards</h3>
																	</Col>
																	<Col lg={12}>
																		<Row>
																			<Col lg={8}>
																				<h3 className="text-white">SB</h3>
																			</Col>
																			<Col lg={8}>
																				<h3 className="text-white">TP</h3>
																			</Col>
																			<Col lg={8}>
																				<h3 className="text-white">Fix</h3>
																			</Col>
																		</Row>
																	</Col>
																</Row>
															</div>
															<div className="players text-regular">
																{displayForwards()}
															</div>
														</div>
														{/* substitutes */}
													</div>
												</Radio.Group>
											</div>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</div>
		</DashboardLayout>
	);
};

export default TeamCaptain;
