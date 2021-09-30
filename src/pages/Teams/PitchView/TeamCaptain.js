import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { loadTeam, saveTeam } from "../../../store/localStorage";
import { Link, useHistory } from "react-router-dom";
import { formatString } from "../../../helpers/utils";
import DashboardLayout from "../../../components/common/Layout";
import PitchBg from "../../../assets/img/static/pitch-bg.png";
import CaptainIcon from "../../../assets/img/icons/captain.svg";
import Stadium from "../../../assets/img/stadium.svg";
import TeamJersey from "../../../assets/img/team-jersey-red.svg";

import styled from "styled-components";

const TeamCaptain = () => {
	const [captainSelected, setCaptainSelected] = useState(false);
	const [goalKeepers, setGoalKeepers] = useState([]);
	const [defenders, setUpdatedDefenders] = useState([]);
	const [midfielders, setUpdatedMidfielders] = useState([]);
	const [forwards, setUpdatedForwards] = useState([]);

	const history = useHistory();

	const team = loadTeam();

	useEffect(() => {
		let gk = team.filter((player) => player.position === "goalkeeper");

		let def = team.filter((player) => player.position === "defender");
		let mids = team.filter((player) => player.position === "midfielder");
		let fwds = team.filter((player) => player.position === "attacker");

		setGoalKeepers([...gk]);
		setUpdatedDefenders([...def]);
		setUpdatedMidfielders([...mids]);
		setUpdatedForwards([...fwds]);

		// eslint-disable-next-line
	}, []);

	const finalTeam = [...goalKeepers, ...defenders, ...forwards, ...midfielders];
	const resetPlayers = () => {
		let resetDef = [];
		let resetMid = [];
		let resetGk = [];
		let resetFwd = [];

		goalKeepers.forEach((item) => {
			let newItem = { ...item, is_captain: false };
			resetGk.push(newItem);
		});
		defenders.forEach((item) => {
			let newItem = { ...item, is_captain: false };
			resetDef.push(newItem);
		});
		forwards.forEach((item) => {
			let newItem = { ...item, is_captain: false };
			resetFwd.push(newItem);
		});
		midfielders.forEach((item) => {
			let newItem = { ...item, is_captain: false };
			resetMid.push(newItem);
		});
		setGoalKeepers([...resetGk]);
		setUpdatedDefenders([...resetDef]);
		setUpdatedMidfielders([...resetMid]);
		setUpdatedForwards([...resetFwd]);
	};
	const handleSelectCaptain = (ev, player) => {
		resetPlayers();

		switch (player.position) {
			case "goalkeeper":
				let newGk = [];
				goalKeepers.forEach((item) => {
					if (item.id !== player.id) {
						newGk.push(item);
					} else {
						newGk.push({ ...player, is_captain: true });
					}
				});
				setGoalKeepers([...newGk]);
				break;
			case "defender":
				let newDef = [];
				defenders.forEach((item) => {
					if (item.id !== player.id) {
						newDef.push({ ...item, is_captain: false });
					} else {
						newDef.push({ ...player, is_captain: true });
					}
				});
				setUpdatedDefenders([...newDef]);
				break;
			case "midfielder":
				let newMid = [];
				midfielders.forEach((item) => {
					if (item.id !== player.id) {
						newMid.push({ ...item, is_captain: false });
					} else {
						newMid.push({ ...player, is_captain: true });
					}
				});

				setUpdatedMidfielders([...newMid]);
				break;
			case "attacker":
				let newFwd = [];
				forwards.forEach((item) => {
					if (item.id !== player.id) {
						newFwd.push({ ...item, is_captain: false });
					} else {
						newFwd.push({ ...player, is_captain: true });
					}
				});
				setUpdatedForwards([...newFwd]);
				break;
			default:
				break;
		}
		setCaptainSelected(true);
	};

	const displayGkPlayers = (placement) => {
		const player = goalKeepers.find(
			(player) => player.playerPlacement === placement
		);

		if (player) {
			return (
				<StyledTeamPlayer
					className=" pitch-player "
					onClick={(ev) => handleSelectCaptain(ev, player)}
				>
					<div
						className="team-jersey-bg"
						style={{ backgroundImage: `url(${TeamJersey})` }}
					>
						{player.is_captain && (
							<img
								src={CaptainIcon}
								className="captain-tag"
								alt="captain icon"
							/>
						)}
					</div>

					<div className="">
						<div className="player-tag" title={player.name}>
							{formatString(player.name, 8)}
						</div>
						<div className="points-tag">{player.age}</div>
					</div>
				</StyledTeamPlayer>
			);
		}
		return null;
	};

	const displayDefenders = (placement) => {
		const player = defenders.find(
			(player) => player.playerPlacement === placement
		);

		if (player) {
			return (
				<StyledTeamPlayer
					className=" pitch-player "
					onClick={(ev) => handleSelectCaptain(ev, player)}
				>
					<div
						className="team-jersey-bg"
						style={{ backgroundImage: `url(${TeamJersey})` }}
					>
						{player.is_captain && (
							<img
								src={CaptainIcon}
								className="captain-tag"
								alt="captain icon"
							/>
						)}
					</div>

					<div className="">
						<div className="player-tag" title={player.name}>
							{formatString(player.name, 8)}
						</div>
						<div className="points-tag">{player.age}</div>
					</div>
				</StyledTeamPlayer>
			);
		}
	};

	const displayForwards = (placement) => {
		const player = forwards.find(
			(player) => player.playerPlacement === placement
		);

		if (player) {
			return (
				<StyledTeamPlayer
					className=" pitch-player "
					onClick={(ev) => handleSelectCaptain(ev, player)}
				>
					<div
						className="team-jersey-bg"
						style={{ backgroundImage: `url(${TeamJersey})` }}
					>
						{player.is_captain && (
							<img
								src={CaptainIcon}
								className="captain-tag"
								alt="captain icon"
							/>
						)}
					</div>

					<div className="">
						<div className="player-tag" title={player.name}>
							{formatString(player.name, 8)}
						</div>
						<div className="points-tag">{player.age}</div>
					</div>
				</StyledTeamPlayer>
			);
		}
	};

	const displayMidfielders = (placement) => {
		const player = midfielders.find(
			(player) => player.playerPlacement === placement
		);

		if (player) {
			return (
				<StyledTeamPlayer
					className=" pitch-player "
					onClick={(ev) => handleSelectCaptain(ev, player)}
				>
					<div
						className="team-jersey-bg"
						style={{ backgroundImage: `url(${TeamJersey})` }}
					>
						{player.is_captain && (
							<img
								src={CaptainIcon}
								className="captain-tag"
								alt="captain icon"
							/>
						)}
					</div>

					<div className="">
						<div className="player-tag" title={player.name}>
							{formatString(player.name, 8)}
						</div>
						<div className="points-tag">{player.age}</div>
					</div>
				</StyledTeamPlayer>
			);
		}
	};

	const updateTeamInfo = () => {
		saveTeam(finalTeam);
		history.replace("/teams/team-name");
	};
	return (
		<DashboardLayout>
			<StyledPitchPage>
				<div className="pt-12 w-full pb-12">
					<Row align="center">
						<Col lg={22}>
							<div className="teams-heading flex justify-between items-center pb-4 border-b-2 border-primary-brand mb-4">
								<h2 className="f-oswald text-4xl font-medium">
									Select Your Captain
								</h2>
								<Link
									className="bg-tw-green rounded-none h-12 font-medium px-6 inline-flex items-center hover:text-white"
									disabled={captainSelected === false ? true : false}
									onClick={(e) => {
										e.preventDefault();
										updateTeamInfo();
									}}
								>
									Next
								</Link>
							</div>
							<div
								className="stadium-bg"
								style={{ backgroundImage: `url(${PitchBg})` }}
							>
								<div>
									<div className="page-banner">
										Your Captain’s point will be doubled{" "}
									</div>
								</div>
								<div className="pitch-view-wrapper">
									<div
										className="field-bg"
										style={{ backgroundImage: `url(${Stadium})` }}
									>
										<div className="players-lane gk-lane">
											{displayGkPlayers("gk_1")}
										</div>
										<div className="players-lane def-lane">
											{displayDefenders("def_1")}
											{displayDefenders("def_2")}
											{displayDefenders("def_3")}
										</div>
										<div className="players-lane mid-lane">
											{displayMidfielders("mid_1")}
											{displayMidfielders("mid_2")}
											{displayMidfielders("mid_3")}
											{displayMidfielders("mid_4")}
										</div>
										<div className="players-lane fwd-lane">
											{displayForwards("fwd_1")}
											{displayForwards("fwd_2")}
											{displayForwards("fwd_3")}
										</div>
										<div className="players-lane subs-lane">
											{displayGkPlayers("gk_2")}
											{displayDefenders("def_4")}
											{displayMidfielders("mid_5")}
											{displayForwards("fwd_4")}
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</StyledPitchPage>
		</DashboardLayout>
	);
};

export var StyledPitchPage = styled.div`
	.stadium-bg {
		width: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		height: auto;
		padding-top: 8px;
	}
	.field-bg {
		width: 100%;
		background-repeat: no-repeat;
		height: 800px;
		background-size: 100%;
		padding: 1rem;
		transform: rotateX(-22deg);
	}
	.page-banner-container {
		padding: 2rem;
	}
	.page-banner {
		width: 600px;
		padding: 2rem 0;
		font-weight: bold;
		font-size: 20px;
		line-height: 28px;
		margin: auto;
		text-align: center;
		color: #fff;
		background: rgba(129, 57, 230, 0.5);
	}
	.players-lane {
		position: relative;
		display: flex;

		margin: 2rem auto 0;
	}
	.gk-lane {
		width: 300px;
		justify-content: center;
		margin-top: 5rem;
	}
	.def-lane {
		margin-top: 3rem;
		width: 450px;
		justify-content: space-evenly;
	}
	.mid-lane {
		margin-top: 3rem;
		width: 550px;
		justify-content: space-evenly;
	}
	.fwd-lane {
		margin-top: 4rem;
		width: 450px;
		justify-content: space-evenly;
	}
	.subs-lane {
		margin-top: 4rem;
		width: 550px;
		justify-content: space-evenly;
	}

	.captain-tag {
		position: absolute;
		bottom: -3px;
		right: 0;
		width: 20px;
	}
`;
export const StyledTeamPlayer = styled.div`
	display: inline-flex;
	justify-content: flex-end;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	position: relative;
	width: 100px;
	height: 80px;
	// margin-right: 2rem;

	.player-tag {
		background: #33175a;
		color: #fff;
		font-weight: bold;
		padding: 0 1rem;
		font-size: 10px;
	}
	.team-jersey-bg {
		width: 60px;
		height: 50px;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
	}
	.points-tag {
		font-size: 10px;
		height: 14px;
		background: radial-gradient(
				50% 50% at 50% 50%,
				rgba(255, 255, 255, 0.51) 0%,
				rgba(255, 255, 255, 0.37) 100%
			),
			#33175a;
		text-align: center;
		color: #fff;
	}
`;

export default TeamCaptain;
