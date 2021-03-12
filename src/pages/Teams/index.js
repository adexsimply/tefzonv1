import React, { useState } from "react";
import DashboardLayout from "../../components/common/DashboardLayout";
import { Button, Row, Col, Input, Select, Radio } from "antd";
import { AiOutlineSearch } from "react-icons/ai";

import InfoCircleIcon from "../../assets/img/icons/info-circle-green.svg";

import PitchBg from "../../assets/img/static/pitch-bg.png";
import ListView from "./ListView";
import PitchView from "./PitchView";
import GK1 from "../../assets/img/static/gk-1.jpg";
import GK2 from "../../assets/img/static/gk-2.jpg";
import DEF1 from "../../assets/img/static/def-1.jpg";
import DEF2 from "../../assets/img/static/def-2.jpg";
import DEF3 from "../../assets/img/static/def-3.jpg";
import DEF4 from "../../assets/img/static/def-4.png";
import DEF5 from "../../assets/img/static/def-5.jpg";
import MID1 from "../../assets/img/static/mid-1.jpg";
import MID2 from "../../assets/img/static/mid-2.jpg";
import MID3 from "../../assets/img/static/mid-3.jpg";
import MID4 from "../../assets/img/static/mid-4.jpg";
import MID5 from "../../assets/img/static/mid-5.jpg";
import FWD1 from "../../assets/img/static/fwd-1.jpg";
import FWD2 from "../../assets/img/static/fwd-2.jpg";
import FWD3 from "../../assets/img/static/fwd-3.jpg";
import Fixture from "./Fixture/index";

const { Option } = Select;

const Teams = () => {
	const [pitchView, setPitchView] = useState("list");
	const [selectedPlayer, setSelectedPlayer] = useState(null);
	const [currentSelection, setCurrentSelection] = useState(null);
	const [selectedGoalKeepers, setSelectedGoalKeepers] = useState([]);

	const playerData = [
		{
			name: "Gianluigi Buffon",
			position: "gk",
			imgSRC: GK1,
			points: 95,
		},
		{
			name: "Alisson Becker",
			position: "gk",
			imgSRC: GK2,
			points: 93,
		},
		{
			name: "Sergio Ramos",
			position: "def",
			imgSRC: DEF1,
			points: 96,
		},
		{
			name: "Gerard Pique",
			position: "def",
			imgSRC: DEF2,
			points: 96,
		},
		{
			name: "David Luiz",
			position: "def",
			imgSRC: DEF3,
			points: 95,
		},
		{
			name: "John Terry",
			position: "def",
			imgSRC: DEF4,
			points: 94,
		},
		{
			name: "Yaya Toure",
			position: "def",
			imgSRC: DEF5,
			points: 93,
		},
		{
			name: "Cristiano Ronaldo",
			position: "mid",
			imgSRC: MID1,
			points: 99,
		},
		{
			name: "Andres Iniesta",
			position: "mid",
			imgSRC: MID2,
			points: 92,
		},
		{
			name: "Zinedine Zidane",
			position: "mid",
			imgSRC: MID3,
			points: 89,
		},
		{
			name: "Luiz Suarez",
			position: "mid",
			imgSRC: MID4,
			points: 86,
		},
		{
			name: "Angel Di Maria",
			position: "mid",
			imgSRC: MID5,
			points: 89,
		},
		{
			name: "Kylian Mbappe",
			position: "fwd",
			imgSRC: FWD1,
			points: 93,
		},
		{
			name: "Neymar",
			position: "fwd",
			imgSRC: FWD2,
			points: 92,
		},
		{
			name: "Zlatan Ibramovic",
			position: "fwd",
			imgSRC: FWD3,
			points: 95,
		},
	];
	const handlePlayerSelection = (player) => {
		console.log(player, "selected player");
		switch (currentSelection) {
			case "gk":
				setSelectedGoalKeepers([...selectedGoalKeepers, player]);
				break;

			default:
				break;
		}
	};
	const displayPlayers = () => {
		if (currentSelection === null) {
			return playerData.map((players) => {
				return (
					<Row
						className="items-center border-b border-secondary-gray-2 pb-2 pt-2"
						justify="space-bewteen"
						key={players.name}
					>
						<Col lg={2} className="">
							<img src={InfoCircleIcon} alt="info Icon" />
						</Col>
						<Col
							lg={4}
							className="flex justify-center text-center border-l border-secondary-gray-2-border"
						>
							<img
								src={players.imgSRC}
								className="w-10 h-10 rounded-full object-contain"
								alt="player avatar"
							/>
						</Col>
						<Col
							lg={13}
							className="border-l border-secondary-gray-2-border border-r"
						>
							<div className="pl-2">
								<a
									className="text-white font-bold text-regular hover:text-tw-green-light"
									disabled={currentSelection === null}
									onClick={(e) => {
										e.preventDefault();
										handlePlayerSelection(players);
									}}
								>
									{players.name}
								</a>
								<p className="text-white">
									<span className="font-bold uppercase inline-block mr-4 text-xsmall">
										JUV
									</span>
									<span className="font-light uppercase text-xsmall">
										{players.position}
									</span>
								</p>
							</div>
						</Col>
						<Col lg={3} className="pl-2">
							<p className="text-white text-base text-center font-bold">
								{players.points}
							</p>
						</Col>
					</Row>
				);
			});
		} else {
			const filteredPlayers = playerData.filter(
				(player) => player.position === currentSelection
			);
			if (filteredPlayers) {
				return filteredPlayers.map((players) => {
					return (
						<Row
							className="items-center border-b border-secondary-gray-2 pb-2 pt-2"
							justify="space-bewteen"
						>
							<Col lg={2} className="">
								<img src={InfoCircleIcon} alt="info Icon" />
							</Col>
							<Col
								lg={4}
								className="flex justify-center text-center border-l border-secondary-gray-2-border"
							>
								<img
									src={players.imgSRC}
									className="w-10 h-10 rounded-full object-contain"
									alt="player avatar"
								/>
							</Col>
							<Col
								lg={13}
								className="border-l border-secondary-gray-2-border border-r"
							>
								<div className="pl-2">
									<a
										className="text-white font-bold text-regular hover:text-tw-green-light"
										disabled={currentSelection === null}
										onClick={(e) => {
											e.preventDefault();
											handlePlayerSelection(players);
										}}
									>
										{players.name}
									</a>
									<p className="text-white">
										<span className="font-bold uppercase inline-block mr-4 text-xsmall">
											JUV
										</span>
										<span className="font-light uppercase text-xsmall">
											{players.position}
										</span>
									</p>
								</div>
							</Col>
							<Col lg={3} className="pl-2">
								<p className="text-white text-base text-center font-bold">
									{players.points}
								</p>
							</Col>
						</Row>
					);
				});
			}
		}
	};
	const getSelectionParams = (params) => {
		setCurrentSelection(params);
	};
	return (
		<DashboardLayout>
			<div className=" pt-12 w-full">
				<Row align="center">
					<Col lg={22}>
						<div className="teams-heading flex justify-between items-center pb-4">
							<h2 className="f-oswald text-4xl font-medium">Squad Selection</h2>
							<Button className="bg-tw-green rounded-none h-12 font-medium px-6">
								Next
							</Button>
						</div>
						<div className="teams-banner bg-primary-brand-darker py-6 flex justify-between items-center mt-4 mb-14 px-6">
							<h2 className="text-white font-semibold text-base">
								Players: <span className="text-2xl">(0/15)</span>
							</h2>
							<div className="inline-flex items-center">
								<Button className="  font-medium text-base green-outline-btn bg-transparent mr-8 h-12 rounded-sm">
									Auto Complete
								</Button>
								<p className="text-white">Clear team</p>
							</div>
						</div>
						<div className="team-content pb-8">
							<Row gutter={20}>
								<Col lg={17}>
									<div
										className="w-full bg-no-repeat bg-cover h-auto py-2"
										style={{ backgroundImage: `url(${PitchBg})` }}
									>
										<div className="controls py-9">
											<div className="w-1/3 mx-auto">
												<Button
													className={
														"text-regular font-bold w-1/2 h-12 rounded-none border-0 " +
														(pitchView === "pitch"
															? "bg-primary-brand text-white"
															: "text-black")
													}
													onClick={() => setPitchView("pitch")}
												>
													Pitch View
												</Button>
												<Button
													className={
														"text-regular font-bold w-1/2 h-12 rounded-none border-0 " +
														(pitchView === "list"
															? "bg-primary-brand text-white"
															: "text-black")
													}
													onClick={() => setPitchView("list")}
												>
													List View
												</Button>
											</div>
										</div>
										<div className="mt-16">
											{pitchView === "list" ? (
												<ListView
													setSelection={getSelectionParams}
													goalKeepers={selectedGoalKeepers}
												/>
											) : (
												<PitchView />
											)}
										</div>
									</div>
								</Col>
								<Col lg={7} className=" ">
									<div className="bg-secondary-gray-2 p-4">
										<div className="search-container flex items-center">
											<Input
												className="white-search-input h-12"
												placeholder="Search"
												prefix={<AiOutlineSearch />}
											/>
											<Button className="ml-4 brand-outline-btn bg-transparent h-11 rounded-none">
												Reset
											</Button>
										</div>
										<div className="player-positions-filters">
											<div className="flex items-center justify-between mt-6">
												<div className="bg-white px-4 py-2">ALL</div>
												<div className="bg-white px-4 py-2">GK</div>
												<div className="bg-white px-4 py-2">DEF</div>
												<div className="bg-white px-4 py-2">MID</div>
												<div className="bg-white px-4 py-2">FWD</div>
											</div>
										</div>
										<div className="mt-6">
											{" "}
											<p>Sort by:</p>
											<div className="w-full ">
												<Select className="w-full sort-select">
													<Option value="ascending">
														Total Points: Highest - Lowest
													</Option>
													<Option value="descending">
														Total Points: Lowest - Highest
													</Option>
												</Select>
											</div>
										</div>
									</div>
									<div className="bg-primary-brand p-4 max-h-860px overflow-y-auto">
										{displayPlayers()}
									</div>
								</Col>
								<Fixture />
							</Row>
						</div>
					</Col>
				</Row>
			</div>
		</DashboardLayout>
	);
};

export default Teams;
