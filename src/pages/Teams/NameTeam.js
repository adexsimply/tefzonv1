import React, { useState, useContext } from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { TeamContext } from "../../store/TeamContext";
import DashboardLayout from "../../components/common/DashboardLayout";
import PitchBg from "../../assets/img/static/pitch-bg.png";

const NameTeam = () => {
	const [teamName, setTeamName] = useState("");
	const { getTeamName, view } = useContext(TeamContext);

	return (
		<DashboardLayout>
			<div className=" pt-12 w-full">
				<Row align="center">
					<Col lg={22}>
						<div className="teams-heading flex justify-between items-center pb-4 border-b-2 border-primary-brand">
							<h2 className="f-oswald text-4xl font-medium">Name Your Team</h2>
							<Link
								to={
									view === "list"
										? "/teams/list-save-team"
										: "/teams/pitch-confirm-team"
								}
								className="bg-tw-green rounded-none h-12 font-medium px-6 inline-flex items-center hover:text-white"
								disabled={teamName === ""}
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
										<div className="py-16">
											{/* {pitchView === "list" ? <ListView /> : <PitchView />} */}
											<div className=" w-3/5 mx-auto ">
												<div className="name-card h-full px-12 py-24 text-center text-white">
													<h3 className="font-bold text-3xl text-white mb-6">
														Choose A Team Name
													</h3>
													<p className="mb-0">
														You can not change your team name after the first
														matchday you play in
													</p>
													<Form className="w-3/5 mx-auto mt-10">
														<Form.Item
															name="team_name"
															rules={[
																{
																	required: true,
																	message: "Maximum of 25 characters",
																},
															]}
														>
															<Input
																className="team-name-input"
																placeholder="Enter Team Name"
																onChange={({ target: { value } }) => {
																	getTeamName(value);
																	setTeamName(value);
																}}
																value={teamName}
															/>
														</Form.Item>
													</Form>
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

export default NameTeam;
