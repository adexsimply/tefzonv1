import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { loadTeam, saveTeam } from "../../../store/localStorage";
import { Link, useHistory } from "react-router-dom";
import DashboardLayout from "../../../components/common/DashboardLayout";
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
		console.log("how often here");
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
		console.log("you clicked to set captain", player);
		resetPlayers();

		switch (player.position) {
			case "goalkeeper":
				const newGk = [];
				goalKeepers.forEach((item) => {
					if (item.name !== player.name) {
						newGk.push(item);
					}
				});
				const gkCaptain = { ...player, is_captain: true };
				newGk.push(gkCaptain);
				setGoalKeepers([...newGk]);
				break;
			case "defender":
				const newDef = [];
				defenders.forEach((item) => {
					if (item.name !== player.name) {
						newDef.push({ ...item, is_captain: false });
					}
				});
				const defCaptain = { ...player, is_captain: true };
				newDef.push(defCaptain);
				setUpdatedDefenders([...newDef]);
				break;
			case "midfielder":
				const newMid = [];
				midfielders.forEach((item) => {
					if (item.name !== player.name) {
						newMid.push({ ...item, is_captain: false });
					}
				});
				const midCaptain = { ...player, is_captain: true };
				newMid.push(midCaptain);
				setUpdatedMidfielders([...newMid]);
				break;
			case "atacker":
				const newFwd = [];
				forwards.forEach((item) => {
					if (item.name !== player.name) {
						newFwd.push({ ...item, is_captain: false });
					}
				});
				const fwdCaptain = { ...player, is_captain: true };
				newFwd.push(fwdCaptain);
				setUpdatedForwards([...newFwd]);
				break;
			default:
				break;
		}
		setCaptainSelected(true);
	};

	const displayGkPlayers = () => {
		return goalKeepers.map((players) => {
			return (
				<StyledTeamPlayer
					className=" pitch-player "
					onClick={(ev) => handleSelectCaptain(ev, players)}
				>
					<div
						className="team-jersey-bg"
						style={{ backgroundImage: `url(${TeamJersey})` }}
					>
						{players.is_captain && (
							<img
								src={CaptainIcon}
								className="captain-tag"
								alt="captain icon"
							/>
						)}
					</div>

					<div className="">
						<div className="player-tag">{players.name}</div>
						<div className="points-tag">{players.points}</div>
					</div>
				</StyledTeamPlayer>
			);
		});
	};

	const displayDefenders = (placement) => {
		const player = defenders.find(
			(player) => player.playerPlacement === placement
		);

		if (player) {
			console.log(player.is_captain, "def", player.name);
			return (
				<StyledTeamPlayer
					className=" pitch-player "
					onClick={(ev) => handleSelectCaptain(ev, player)}
					style={{ marginRight: "2rem" }}
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
						<div className="player-tag">{player.name}</div>
						<div className="points-tag">{player.points}</div>
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
					style={{ marginRight: "2rem" }}
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
						<div className="player-tag">{player.name}</div>
						<div className="points-tag">{player.points}</div>
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
					style={{ marginRight: "2rem" }}
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
						<div className="player-tag">{player.name}</div>
						<div className="points-tag">{player.points}</div>
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
											{displayGkPlayers()}
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
		justify-content: center;
		margin: 2rem auto 0;
		width: 80%;
	}
	.gk-lane {
		margin-top: 5rem;
	}
	.def-lane {
		margin-top: 3rem;
	}
	.mid-lane {
		margin-top: 3rem;
	}
	.fwd-lane {
		margin-top: 4rem;
	}
	.team-jersey-bg {
		width: 50px;
		height: 40px;
		background-size: cover;
		background-repeat: no-repeat;
		position: relative;
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
	justify-content: center;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	position: relative;

	.player-tag {
		background: #33175a;
		color: #fff;
		font-weight: bold;
		padding: 0 1rem;
		font-size: 10px;
	}
	.points-tag {
		font-size: 10px;
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
