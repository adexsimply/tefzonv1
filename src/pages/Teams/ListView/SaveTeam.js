import React, { useState } from "react";
import { Button, Row, Col, Spin } from "antd";
import { loadTeam } from "../../../store/localStorage";
import { createTeam } from "../../../helpers/api";
import { useHistory } from "react-router-dom";
import Alert from "../../../components/common/Alert";
import Stadium from "../../../assets/img/stadium.svg";
import PitchPlayer from "../PitchView/PitchPlayer";
import TeamJersey from "../../../assets/img/team-jersey.svg";
import DashboardLayout from "../../../components/common/Layout";
import PitchBg from "../../../assets/img/static/pitch-bg.png";
import { openNotification } from "../../../helpers/notification";

const SaveTeam = () => {
	const [status, setStatus] = useState({ type: "", msg: "" });
	const [loading, setLoading] = useState(false);
	let team = loadTeam();
	const teamName = localStorage.getItem("TEF_NAME");
	const history = useHistory();

	const handleCreateTeam = async () => {
		const payload = [];
		team.forEach((item) => {
			payload.push({
				id: item.id,
				wing: item.position.toLowerCase(),
				is_susbtitute: item.is_substitute === true ? 1 : 0,
				is_captain: item.is_captain === true ? 1 : 0,
				placement: null,
			});
		});
		console.log(payload);
		try {
			const results = await createTeam({
				team_name: teamName,
				squad_selection: payload,
			});
			console.log(results);
			if (results) {
				setStatus({
					type: "success",
					msg: results.result.msg,
				});
				openNotification({
					title: 'Team Created',
					message: 'Your team has been created successfuly',
					type: 'success'
				})
				setLoading(false);
				resetTeam();
				history.replace("/teams");
			}
		} catch (error) {
			console.log(error);
			setStatus({
				type: "error",
				msg: error.message,
			});
			setLoading(false);
		}
	};

	const displayGk = () => {
		const gkContent = [];
		const gkPlayer = team.filter(
			(player) => player.position.toLowerCase() === "goalkeeper"
		);

		gkPlayer.forEach((player, i) => {
			if (i === 0) {
				gkContent.push(
					<PitchPlayer tagLabel={player.name} jersey={TeamJersey} />
				);
			}
		});
		return gkContent;
	};
	const displayMidfielders = () => {
		return team.map((player) => {
			if (
				!player.is_substitute &&
				player.position.toLowerCase() === "midfielder"
			) {
				return (
					<PitchPlayer
						wrapperClassName="mr-10"
						tagLabel={player.name}
						jersey={TeamJersey}
					/>
				);
			}
		});
	};
	const displayDefenders = () => {
		return team.map((player) => {
			if (
				!player.is_substitute &&
				player.position.toLowerCase() === "defender"
			) {
				return (
					<PitchPlayer
						wrapperClassName="mr-10"
						tagLabel={player.name}
						jersey={TeamJersey}
					/>
				);
			}
		});
	};
	const displayForwards = () => {
		return team.map((player) => {
			if (
				!player.is_substitute &&
				player.position.toLowerCase() === "attacker"
			) {
				return (
					<PitchPlayer
						wrapperClassName="mr-10"
						tagLabel={player.name}
						jersey={TeamJersey}
					/>
				);
			}
		});
	};
	const displaySubs = () => {
		return team.map((player) => {
			if (player.is_substitute) {
				return <PitchPlayer wrapperClassName="mr-10" tagLabel={player.name} />;
			}
		});
	};
	const resetStatus = () => {
		setStatus({ type: "", msg: "" });
	};
	const resetTeam = () => {
		localStorage.removeItem("TEFZON_TEAM");
		localStorage.removeItem("TEF_NAME");
	};
	return (
		<DashboardLayout>
			<div className=" pt-12 w-full">
				{status.type === "success" && (
					<div className="alert-display-wrapper">
						<Alert
							className="w-full success-alert"
							textClassName="text-white f-oswald"
							msg={status.msg || "Successful!"}
							closeAlert={resetStatus}
						/>
					</div>
				)}
				{status.type === "error" && (
					<div className="alert-display-wrapper">
						<Alert
							className="w-full error-alert"
							textClassName="text-white f-oswald"
							msg={status.msg || "Something went wrong!"}
							closeAlert={resetStatus}
						/>
					</div>
				)}
				<Row align="center">
					<Col lg={22}>
						<div className="teams-heading flex justify-between items-center pb-4 border-b-2 border-primary-brand">
							<h2 className="f-oswald text-4xl font-medium">Save Your Team</h2>
							<Button
								to="/teams/save-team"
								onClick={handleCreateTeam}
								disabled={loading}
								className="bg-tw-green rounded-none h-12 font-medium px-6 inline-flex items-center hover:text-white"
							>
								{loading ? <Spin spinning /> : "Save"}
							</Button>
						</div>

						<div className="team-content pb-8 mt-8">
							<Row>
								<Col lg={24}>
									<div
										className="w-full bg-no-repeat bg-cover h-auto py-2"
										style={{ backgroundImage: `url(${PitchBg})` }}
									>
										<div className="mt-16">
											<div className="name-banner py-4 bg-primary-brand w-3/5 mx-auto">
												<h3 className="text-white text-xl font-bold text-center">
													{teamName || "sample team name"}
												</h3>
											</div>

											<div className="pitch-view-container">
												<div
													className="pitch-stadium-bg w-full  bg-no-repeat pt-12"
													style={{ backgroundImage: `url(${Stadium})` }}
												>
													<div className="relative flex justify-center position-container mx-auto">
														{displayGk()}
													</div>
													<div className="relative flex justify-center mt-12 position-container mx-auto">
														{displayDefenders()}
													</div>
													<div className="relative flex justify-center mt-12 position-container mx-auto">
														{displayMidfielders()}
													</div>
													<div className="relative flex justify-center mt-12 position-container mx-auto">
														{displayForwards()}
													</div>

													<div className="relative flex justify-center mt-14 position-container mx-auto">
														{displaySubs()}
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
			</div>
		</DashboardLayout>
	);
};

export default SaveTeam;
