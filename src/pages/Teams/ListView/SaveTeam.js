import React, { useContext } from "react";
import { Button, Row, Col } from "antd";
import { TeamContext } from "../../../store/TeamContext";
import Stadium from "../../../assets/img/stadium.svg";
import { loadTeam } from "../../../store/localStorage";
import PitchPlayer from "../PitchView/PitchPlayer";
import TeamJersey from "../../../assets/img/team-jersey.svg";
import DashboardLayout from "../../../components/common/DashboardLayout";
import PitchBg from "../../../assets/img/static/pitch-bg.png";

const SaveTeam = () => {
	const { teamName } = useContext(TeamContext);
	const team = loadTeam();

	const displayGk = () => {
		// return team.map((player) => {
		// 	if (!player.is_substitute && player.position === "gk") {
		// 		return <PitchPlayer tagLabel={player.name} />;
		// 	}
		// });
		const gkContent = [];
		const gkPlayer = team.filter((player) => player.position === "gk");

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
			if (!player.is_substitute && player.position === "mid") {
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
			if (!player.is_substitute && player.position === "def") {
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
			if (!player.is_substitute && player.position === "fwd") {
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
	return (
		<DashboardLayout>
			<div className=" pt-12 w-full">
				<Row align="center">
					<Col lg={22}>
						<div className="teams-heading flex justify-between items-center pb-4 border-b-2 border-primary-brand">
							<h2 className="f-oswald text-4xl font-medium">Save Your Team</h2>
							<Button
								to="/teams/save-team"
								className="bg-tw-green rounded-none h-12 font-medium px-6 inline-flex items-center hover:text-white"
							>
								Save
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
													{teamName || "oscar jnr league"}
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
