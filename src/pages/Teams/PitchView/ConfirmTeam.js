import React, { useContext, useState } from "react";
import { Button, Row, Col } from "antd";
import { TeamContext } from "../../../store/TeamContext";
import { loadTeam } from "../../../store/localStorage";
import { useHistory } from "react-router-dom";
import Stadium from "../../../assets/img/stadium.svg";
import TeamJersey from "../../../assets/img/team-jersey.svg";
import DashboardLayout from "../../../components/common/DashboardLayout";
import PitchBg from "../../../assets/img/static/pitch-bg.png";
import styled from "styled-components";
import Alert from "../../../components/common/Alert";
import CaptainIcon from "../../../assets/img/icons/captain.svg";

const ConfirmTeam = () => {
	const { teamName } = useContext(TeamContext);
	const [reqStatus, setReqStatus] = useState({ type: "", msg: "" });
	const team = loadTeam();
	const history = useHistory();

	const displayGkPlayers = () => {
		return team.map((players) => {
			if (players.position === "gk" && players.is_subtitute === false) {
				return (
					<StyledTeamPlayer>
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
			}
		});
	};

	const displayPlayer = (placement) => {
		const player = team.find((player) => player.playerPlacement === placement);

		if (player && player.is_subtitute === false) {
			return (
				<StyledTeamPlayer
					className=" pitch-player "
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

	const handleSaveTeam = () => {
		setReqStatus({
			type: "success",
			msg: `Your team ${teamName} created successfully!`,
		});
		setTimeout(() => {
			history.replace("/status");
		}, 2000);
	};

	return (
		<DashboardLayout>
			<StyledTeamPage>
				<Row align="center">
					<Col lg={22}>
						<div className="teams-heading flex justify-between items-center pb-4 border-b-2 border-primary-brand">
							<h2 className="f-oswald text-4xl font-medium">Save Your Team</h2>
							<Button
								onClick={handleSaveTeam}
								className="bg-tw-green rounded-none h-12 font-medium px-6 inline-flex items-center hover:text-white"
							>
								Save
							</Button>
						</div>

						<div className="team-content pb-8 mt-8">
							<div className="alert-display">
								{reqStatus.type === "success" && (
									<Alert
										className="success-alert"
										msg={reqStatus.msg || "Successful!"}
									/>
								)}
								{reqStatus.type === "error" && (
									<Alert className="error-alert">
										{reqStatus.msg || "Something went wrong!"}
									</Alert>
								)}
							</div>
							<Row>
								<Col lg={24}>
									<div
										className=" stadium-bg "
										style={{ backgroundImage: `url(${PitchBg})` }}
									>
										<div className="mt-16">
											<div className="name-banner ">
												<h3 className="">{teamName || "oscar jnr league"}</h3>
											</div>

											<div className="pitch-view-wrapper">
												<div
													className="field-bg "
													style={{ backgroundImage: `url(${Stadium})` }}
												>
													<div className="players-lane gk-lane">
														{displayGkPlayers()}
													</div>

													<div className="players-lane def-lane">
														{displayPlayer("def_1")}
														{displayPlayer("def_2")}
														{displayPlayer("def_3")}
													</div>

													<div className="players-lane mid-lane">
														{displayPlayer("mid_1")}
														{displayPlayer("mid_2")}
														{displayPlayer("mid_3")}
														{displayPlayer("mid_4")}
													</div>
													<div className="players-lane fwd-lane">
														{displayPlayer("fwd_1")}
														{displayPlayer("fwd_2")}
														{displayPlayer("fwd_3")}
													</div>

													<div className="relative flex justify-center mt-14 position-container mx-auto">
														{/* {displaySubs()} */}
													</div>
												</div>
											</div>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</StyledTeamPage>
		</DashboardLayout>
	);
};

export const StyledTeamPlayer = styled.div`
	display: inline-flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	position: relative;
	.team-jersey-bg {
		width: 50px;
		height: 45px;
		position: relative;
	}
	.captain-tag {
		position: absolute;
		bottom: -3px;
		width: 20px;
		right: 0;
	}
	.player-tag {
		background: #33175a;
		color: #fff;
		font-weight: bold;
		padding: 0 1rem;
		font-size: 12px;
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

export const StyledTeamPage = styled.div`
	padding-top: 3rem;
	width: 100%;
	.stadium-bg {
		width: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		height: auto;
		padding: 10px 0;
	}
	.name-banner {
		background: rgba(129, 57, 230, 0.5);
		padding: 1rem 0;
		width: 70%;
		margin: auto;
	}
	.name-banner h3 {
		color: #fff;
		font-size: 24px;
		font-weight: bold;
		text-align: center;
	}
	.field-bg {
		width: 100%;
		background-repeat: no-repeat;
		height: 750px;
		background-size: 100%;
		padding: 1rem;
		transform: rotateX(-22deg);
	}
	.players-lane {
		position: relative;
		display: flex;
		justify-content: center;
		margin: 2rem auto 0;
		width: 80%;
	}
	.gk-lane {
		margin-top: 3rem;
	}
	.def-lane {
		margin-top: 3rem;
	}
	.mid-lane {
		margin-top: 4rem;
	}
	.fwd-lane {
		margin-top: 4rem;
	}
	.success-alert {
		background: rgba(74, 174, 117, 0.5);
		font-weight: bold;
		font-size: 14px;
		line-height: 22px;
		text-align: center;
		color: #000000;
		margin-bottom: 1rem;
	}
`;

export default ConfirmTeam;
