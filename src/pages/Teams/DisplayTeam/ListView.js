import React from "react";
import { Row, Col, Button, Popover } from "antd";
import DashboardLayout from "../../../components/common/DashboardLayout";
import TeamFlag from "../../../assets/img/static/team-flag.svg";
import ArrowRightIcon from "../../../assets/img/icons/arrow-right-icon.svg";
import Jersey from "../../../assets/img/jersey.svg";
import InfoCircleIcon from "../../../assets/img/icons/info-circle-green.svg";
import "./DisplayTeam.scss";

const TeamView = ({ teamInfo }) => {
	const showPopUp = (playerDetail) => {
		return (
			<div>
				<p>{playerDetail.name}</p>
			</div>
		);
	};
	const displayGkPlayers = () => {
		return teamInfo.players.map((players) => {
			if (players.wing === "goalkeeper" && players.is_substitute === 0) {
				return (
					<Row
						className="py-2 px-6 justify-between player-row"
						key={players.player_name}
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
									<p className="font-light">{players.player_name}</p>
									<p>
										<span className="font-semibold inline-block">JUV</span>
										<span className="font-light uppercase inline-block ml-4">
											{players.wing}
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
					</Row>
				);
			}
		});
	};
	const displayDefenders = () => {
		return teamInfo.players.map((players) => {
			if (players.wing === "defender" && players.is_substitute === 0) {
				return (
					<Row
						className="py-2 px-6 justify-between player-row"
						key={players.player_name}
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
									<p className="font-light">{players.player_name}</p>
									<p>
										<span className="font-semibold inline-block">JUV</span>
										<span className="font-light uppercase inline-block ml-4">
											{players.wing}
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
					</Row>
				);
			}
		});
	};
	const displayMidfield = () => {
		return teamInfo.players.map((players) => {
			if (players.wing === "midfielder" && players.is_substitute === 0) {
				return (
					<Row
						className="py-2 px-6 justify-between player-row"
						key={players.player_name}
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
									<p className="font-light">{players.player_name}</p>
									<p>
										<span className="font-semibold inline-block">JUV</span>
										<span className="font-light uppercase inline-block ml-4">
											{players.wing}
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
					</Row>
				);
			}
		});
	};
	const displayForwards = () => {
		return teamInfo.players.map((players) => {
			if (players.wing === "attacker" && players.is_substitute === 0) {
				return (
					<Row
						className="py-2 px-6 justify-between player-row"
						key={players.player_name}
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
									<p className="font-light">{players.player_name}</p>
									<p>
										<span className="font-semibold inline-block">JUV</span>
										<span className="font-light uppercase inline-block ml-4">
											{players.wing}
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
					</Row>
				);
			}
		});
	};
	const displaySubs = () => {
		return teamInfo.players.map((players) => {
			if (players.is_substitute === 1) {
				return (
					<Row
						className="py-2 px-6 justify-between player-row"
						key={players.player_name}
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
									<p className="font-light">{players.player_name}</p>
									<p>
										<span className="font-semibold inline-block">JUV</span>
										<span className="font-light uppercase inline-block ml-4">
											{players.wing}
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
					</Row>
				);
			}
		});
	};

	return (
		<DashboardLayout>
			<div className="list-display-container">
				<Row gutter={24}>
					<Col lg={18}>
						<div>
							<p className="title">Pick Team - {teamInfo.teamName.team_name}</p>
						</div>
						<div className="game-display-container">
							<div className="game-display">
								<p>
									<span className="white">Gameweek 27:</span>
									<span className="green">Sat 6 Mar 12:00</span>
								</p>
							</div>
							<div className="green-bg"></div>
						</div>
						<div className="info">
							<p>
								To change your captain use the menu which appears when clicking
								on a player's shirt.
							</p>
						</div>
						<div className="players-display-container">
							<div className="stadium-backdrop">
								<Row align="center">
									<Col lg={6}>
										<Button className="view-btn">Pitch View</Button>
										<Button className="view-btn active-btn">List View</Button>
									</Col>
								</Row>
								<div className="list-view">
									<div className="gk">
										<div className="heading bg-tw-yellow py-2 px-6 font-bold">
											<Row className="justify-between">
												<Col lg={10}>
													<h3>Goal Keeper</h3>
												</Col>
												<Col lg={12}>
													<Row></Row>
												</Col>
											</Row>
										</div>
										<div className="players text-regular">
											{displayGkPlayers()}
										</div>
									</div>
									<div className="defenders">
										<div className="heading bg-tw-green-light py-2 px-6 font-bold">
											<Row className="justify-between">
												<Col lg={10}>
													<h3>Defenders</h3>
												</Col>
												<Col lg={12}>
													<Row></Row>
												</Col>
											</Row>
										</div>
										<div className="players text-regular">
											{displayDefenders()}
										</div>
									</div>
									<div className="midfield">
										<div className="heading bg-tw-blue py-2 px-6 font-bold">
											<Row className="justify-between">
												<Col lg={10}>
													<h3>Midfielders</h3>
												</Col>
												<Col lg={12}>
													<Row></Row>
												</Col>
											</Row>
										</div>
										<div className="players text-regular">
											{displayMidfield()}
										</div>
									</div>
									<div className="forwards">
										<div className="heading bg-tw-red py-2 px-6 font-bold">
											<Row className="justify-between">
												<Col lg={10}>
													<h3 className="text-white">Forwards</h3>
												</Col>
												<Col lg={12}>
													<Row></Row>
												</Col>
											</Row>
										</div>
										<div className="players text-regular">
											{displayForwards()}
										</div>
									</div>
									<div className="substitutes">
										<div className="heading bg-tw-sky-blue py-2 px-6 font-bold">
											<Row className="justify-between">
												<Col lg={10}>
													<h3 className="">Substitutes</h3>
												</Col>
												<Col lg={12}>
													<Row></Row>
												</Col>
											</Row>
										</div>
										<div className="players text-regular">{displaySubs()}</div>
									</div>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={6}>
						<div className="list-side-container">
							<p className="player-name">Adebayo Nwachukwu</p>
							<div className="player-info">
								<Row className="team-name" justify="between">
									<Col>
										<p>{teamInfo.teamName.team_name}</p>
									</Col>
									<Col lg={3}>
										<img src={TeamFlag} alt="" />
									</Col>
								</Row>
								<Row className="points-ranking-wrapper">
									<p>Points/Rankings</p>
								</Row>
								<Row className="points">
									<Col>
										<p>Overall Points:</p>
									</Col>
									<Col>
										<p className="value">179</p>
									</Col>
								</Row>
								<Row className="points">
									<Col>
										<p>Overall Rank:</p>
									</Col>
									<Col>
										<p className="value">7,593,179</p>
									</Col>
								</Row>
								<Row className="points">
									<Col>
										<p>Total Players:</p>
									</Col>
									<Col>
										<p className="value">8,793,179</p>
									</Col>
								</Row>
								<Row className="points">
									<Col>
										<p>Gameweek Points:</p>
									</Col>
									<Col>
										<p className="value">51</p>
									</Col>
								</Row>
								<Row className="points points-btn">
									<Col lg={24}>
										<Button>
											View Gameweek history <img src={ArrowRightIcon} alt="" />
										</Button>
									</Col>
								</Row>
								<div className="band"></div>
							</div>

							<div className="player-info mt-2rem">
								<Row className="team-name">
									<Col>
										<p>Admin</p>
									</Col>
								</Row>

								<Row className="points points-btn">
									<Col lg={24}>
										<Button>
											Team details <img src={ArrowRightIcon} alt="" />
										</Button>
									</Col>
								</Row>
								<Row className="points points-btn">
									<Col lg={24}>
										<Button>
											User profile <img src={ArrowRightIcon} alt="" />
										</Button>
									</Col>
								</Row>
								<div className="band"></div>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</DashboardLayout>
	);
};

export default TeamView;
