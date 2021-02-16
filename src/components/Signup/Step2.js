import React, { useState, useEffect } from "react";
import { Row, Col, Button, message, Spin, Divider } from "antd";
import { getTeams } from "../../helpers/api";
import { AiFillWarning } from "react-icons/ai";
import { FiRefreshCw } from "react-icons/fi";
import LeftArrowIcon from "../../assets/img/icons/left-arrow.svg";
import TeamCard from "../TeamCard";

const StepTwo = (props) => {
	const [selectedTeam, setSelectedTeam] = useState("");
	const [teamsList, setTeamsList] = useState(null);
	const [visible, setVisible] = useState(10);
	const [loading, setLoading] = useState(false);
	const [showMore, setShowMore] = useState(true);

	useEffect(() => {
		getTeamsData();
	}, []);

	const handleSelectTeam = (ev, data) => {
		setSelectedTeam(data);
	};

	const getTeamsData = async () => {
		setLoading(true);
		try {
			const data = await getTeams();
			if (data) {
				setTeamsList(data.results);
				setLoading(false);
			}
		} catch (error) {
			message.error(error);
			setLoading(false);
		}
	};
	const emptyState = () => {
		return (
			<div className="empty-state flex h-full items-center justify-center">
				<h3>No teams Found, please refresh</h3>
				<button onClick={getTeamsData}>Refresh Teams</button>
			</div>
		);
	};

	const handleLoadMore = () => {
		if (visible < teamsList.length) {
			setVisible((prevState) => prevState + 10);
			setShowMore(true);
		} else {
			setShowMore(false);
		}
	};
	const displayTeams = () => {
		if (loading) {
			return (
				<div className="loader flex justify-center items-center w-full">
					<Spin />
				</div>
			);
		} else {
			if (teamsList !== null) {
				if (teamsList.length === 0) {
					return emptyState();
				} else {
					return teamsList.slice(0, visible).map((teams) => {
						return (
							<Col md={6} key={teams.team_id}>
								<TeamCard
									name={teams.name}
									id={teams.team_id}
									imgSRC={teams.logo}
									onClick={(e) => handleSelectTeam(e, teams.team_id)}
									checked={selectedTeam === teams.team_id}
								/>
							</Col>
						);
					});
				}
			} else {
				return (
					<div className="h-24 flex flex-col items-center">
						<div>
							<AiFillWarning style={{ color: "#E5DCF1", fontSize: "3rem" }} />
							<p className="text-center font-medium">
								Something went wrong fetching teams
							</p>
							<p>Click the button to refresh</p>
						</div>

						<Button onClick={getTeamsData}>
							<FiRefreshCw className="text-primary-brand" />
						</Button>
					</div>
				);
			}
		}
	};
	const submitTeams = () => {
		if (selectedTeam === "") {
			message.error("please select a team");
		} else {
			props.getTeams(selectedTeam);
		}
	};
	return (
		<div>
			<div className="heading text-center w-2/3 mx-auto">
				<h3 className=" font-bold text-lg">Your Favorites</h3>
				<p className="text-base text-primary-dark-light font-normal mt-3">
					Please type carefully and fill out the form with your personal
					details. You can’t edit these details once you submitted the form.
				</p>
			</div>
			<div className="teams-selection mt-8">
				<Row>
					{displayTeams()}
					{showMore && (
						<Col md={24} className="mt-8">
							<Row justify="center ">
								<Col md={12}>
									<Button
										onClick={handleLoadMore}
										className="bg-primary-gray border border-primary-gray hover:text-primary-dark h-12 font-semibold  w-full "
									>
										Load More Clubs
									</Button>
								</Col>
								<Col md={18} className="mt-4">
									<Divider />
								</Col>
							</Row>
						</Col>
					)}

					<Col md={24} className="mt-8">
						<Row justify="center">
							<Col md={8}>
								<Button
									onClick={submitTeams}
									className="bg-primary-brand h-12 font-semibold text-white w-full"
								>
									Next
								</Button>
							</Col>
						</Row>
					</Col>
					<Col md={24}>
						<Row justify="center">
							<Col md={8} className="mt-4">
								<Button
									onClick={props.prev}
									onClick={props.onPrevious}
									className="border-none flex items-center justify-center w-full shadow-none"
								>
									{" "}
									<img
										src={LeftArrowIcon}
										className="mr-3"
										alt="left arrow icon"
									/>
									Back to personal detail
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default StepTwo;
