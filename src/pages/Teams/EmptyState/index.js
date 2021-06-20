import React, { useContext, useEffect, useState } from "react";
import {
	Button,
	Row,
	Col,
	Input,
	Select,
	Checkbox,
	message,
	Popover,
} from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { saveTeam } from "../../../store/localStorage";
import { TeamContext } from "../../../store/TeamContext";
import { useHistory } from "react-router-dom";
import { getPlayers } from "../../../helpers/api";
import { formatString } from "../../../helpers/utils";
import DashboardLayout from "../../../components/common/DashboardLayout";
import InfoCircleIcon from "../../../assets/img/icons/info-circle-green.svg";
import TeamJersey from "../../../assets/img/team-jersey.svg";
import StadiumBg from "../../../assets/img/backdrop.svg";
import styled from "styled-components";
import ListView from "../ListView";
import PitchView from "../PitchView";
import "../_teams.scss";

const { Option } = Select;

const DefaultTeam = () => {
	const [floatCard, setFloatCard] = useState("top");
	const [loadingPlayers, setLoadingPlayers] = useState(false);
	const [playerData, setPlayerData] = useState(null);

	const {
		currentSelection,
		currentSubSelection,
		resetSelectionParams,
		selectedDef,
		selectedFwd,
		selectedGoalKeepers,
		selectedMid,
		handlePlayerSelection,
		handleSubtitutePlayerSelection,
		removerPlayerFromList,
		handleRemoveSubtitutePlayerFromList,
		statusMessage,
		view,
		changeView,
		dragStatus,
		updateDragStatus,
		updateDraggedPlayer,
	} = useContext(TeamContext);

	const history = useHistory();

	useEffect(() => {
		if (statusMessage.msg !== "") {
			message.warning(statusMessage.msg);
		}
	}, [statusMessage]);

	useEffect(() => {
		getPlayerList();
	}, []);

	const getPlayerList = async () => {
		setLoadingPlayers(true);
		try {
			const results = await getPlayers();
			setPlayerData(results.results);
		} catch (error) {
			message.error(error);
		} finally {
			setLoadingPlayers(false);
		}
	};

	const saveSelection = (player) => handlePlayerSelection(player);

	const handleSelectPlayer = (player, ev) => {
		if (ev.target.checked) {
			saveSelection(player);
		} else {
			undoPlayerSelection(player);
		}
	};

	const saveSubtituteSelection = (player) => {
		handleSubtitutePlayerSelection(player);
	};
	const handleSelectSubtitutePlayers = (player, ev) => {
		if (ev.target.checked) {
			saveSubtituteSelection(player);
		} else {
			undoSubtituteSelection(player);
		}
	};
	const undoPlayerSelection = (player) => removerPlayerFromList(player);
	const undoSubtituteSelection = (player) => {
		handleRemoveSubtitutePlayerFromList(player);
	};
	const displayPlayerListView = (playerList) => {
		return playerList.map((playerInfo) => {
			const { id, name, photo, age, position, league } = playerInfo.player;
			return (
				<Row
					className="items-center border-b border-secondary-gray-2 pb-2 pt-2 "
					justify="space-bewteen"
					key={id}
				>
					<Col
						lg={2}
						className="h-12 border-r border-secondary-gray-2 flex items-center"
					>
						<Popover content={() => popMe(playerInfo.player)} title={name}>
							<img src={InfoCircleIcon} alt="info Icon" />
						</Popover>
					</Col>
					<Col
						lg={4}
						className="flex justify-center text-center border-r border-secondary-gray-2-border h-12 items-center"
					>
						<img
							src={photo}
							className="w-10 h-10 rounded-full object-contain"
							alt="player avatar"
						/>
					</Col>
					<Col lg={14} className="border-r border-secondary-gray-2-border h-12">
						<div className="pl-2">
							<span className="text-white font-bold text-regular ">
								{formatString(name, 20)}
							</span>
							<p className="text-white">
								<span className="font-bold uppercase inline-block mr-4 text-xsmall">
									{league}
								</span>
								<span className="font-light uppercase text-xsmall">
									{position}
								</span>
							</p>
						</div>
					</Col>
					<Col lg={3} className="pl-2 h-12 flex items-center">
						<p className="text-white text-base text-center font-bold">{age}</p>
					</Col>
				</Row>
			);
		});
	};
	const displaySelectListView = (filteredPlayers) => {
		return filteredPlayers.map((playerInfo) => {
			const { id, name, photo, age, position, team } = playerInfo.player;
			return (
				<Row
					className="items-center border-b border-secondary-gray-2 pb-2 pt-2 "
					justify="space-bewteen"
					key={id}
				>
					<Col
						lg={2}
						className="h-12 border-r border-secondary-gray-2 flex items-center"
					>
						<Popover content={() => popMe(playerInfo.player)} title={name}>
							<img src={InfoCircleIcon} alt="info Icon" />
						</Popover>
					</Col>
					<Col
						lg={4}
						className="flex justify-center text-center border-r border-secondary-gray-2-border h-12 items-center"
					>
						<img
							src={photo}
							className="w-10 h-10 rounded-full object-contain"
							alt="player avatar"
						/>
					</Col>
					<Col lg={12} className="border-r border-secondary-gray-2-border h-12">
						<div className="pl-2">
							<span className="text-white font-bold text-regular ">{name}</span>
							<p className="text-white">
								<span className="font-bold uppercase inline-block mr-4 text-xsmall">
									{formatString(team, 5)}
								</span>
								<span className="font-light uppercase text-xsmall">
									{position}
								</span>
							</p>
						</div>
					</Col>
					<Col lg={3} className="pl-2 h-12 flex items-center">
						<p className="text-white text-base text-center font-bold">{age}</p>
					</Col>
					<Col
						lg={3}
						className="border-l border-secondary-gray-2-border pl-3 h-12 flex items-center justify-end"
					>
						<Checkbox
							className="player-selector-checkbox"
							onChange={(ev) => handleSelectPlayer(playerInfo.player, ev)}
						/>
					</Col>
				</Row>
			);
		});
	};

	const handleDragPlayer = (ev, player) => {
		// ev.preventDefault();
		updateDraggedPlayer(player);
		updateDragStatus("dragging");
	};
	const showPopUp = (playerDetails) => {
		const { player } = playerDetails;
		return (
			<div>
				<Row justify="center" className="player-photo">
					<Col lg={12}>
						<img src={player.photo} alt={player.name} />
					</Col>
				</Row>
				<Row className="player-detail-info-row">
					<Col lg={8}>
						<p>
							<strong>First Name</strong>
						</p>
					</Col>
					<Col lg={16}>
						<p>{player.firstname}</p>
					</Col>
				</Row>
				<Row className="player-detail-info-row">
					<Col lg={8}>
						<p>
							<strong>Last Name</strong>
						</p>
					</Col>
					<Col lg={16}>
						<p>{player.lastname}</p>
					</Col>
				</Row>
				<Row className="player-detail-info-row">
					<Col lg={8}>
						<p>
							<strong>Known Name</strong>
						</p>
					</Col>
					<Col lg={16}>
						<p>{player.name}</p>
					</Col>
				</Row>
				<Row className="player-detail-info-row">
					<Col lg={8}>
						<p>
							<strong>Height</strong>
						</p>
					</Col>
					<Col lg={16}>
						<p>{player.height}</p>
					</Col>
				</Row>
				<Row className="player-detail-info-row">
					<Col lg={8}>
						<p>
							<strong>Nationality</strong>
						</p>
					</Col>
					<Col lg={16}>
						<p>{player.nationality}</p>
					</Col>
				</Row>
				<Row className="player-detail-info-row">
					<Col lg={8}>
						<p>
							<strong>Position</strong>
						</p>
					</Col>
					<Col lg={16}>
						<p>{player.position}</p>
					</Col>
				</Row>
			</div>
		);
	};

	// DISPLAY PLAYERS FOR PITCH VIEW DRAG & DROP
	const displayPlayerPitchView = (playerList) => {
		return (
			<StyledPitchPlayer>
				{playerList.map((players) => {
					const { player } = players;

					return (
						<div
							className={
								"player-container " +
								(dragStatus === "dragging" ? "player-drag" : "")
							}
							key={player.id}
							onDragStart={(ev) => handleDragPlayer(ev, player)}
							draggable
						>
							<div className="pitch__player-wrapper">
								<div className="info-icon">
									<Popover
										content={() => showPopUp(players)}
										overlayClassName="player-details-popup"
										title={player.name}
									>
										<img src={InfoCircleIcon} alt="info icon" />
									</Popover>
								</div>
								<div
									className="jersey-icon"
									style={{ backgroundImage: `url(${TeamJersey})` }}
								></div>
							</div>
							<div className="player-tag" title={player.name}>
								{formatString(player.name, 12)}
							</div>
							<div className="points-tag">{player.age}</div>
							<div className="points-tag position">{player.position}</div>
						</div>
					);
				})}
			</StyledPitchPlayer>
		);
	};

	const displayPlayers = () => {
		if (loadingPlayers === true) {
			return <div>Loading...</div>;
		} else {
			if (playerData === null) {
				return <div>Loading...</div>;
			} else {
				if (playerData?.length === 0) {
					return <div>No Player Available</div>;
				} else {
					if (currentSelection === null) {
						if (view === "list") {
							return displayPlayerListView(playerData);
						} else {
							return displayPlayerPitchView(playerData);
						}
					} else {
						const filteredPlayers = playerData.filter(
							(playerInfo) =>
								playerInfo.player.position.toLowerCase() === currentSelection
						);
						if (filteredPlayers) {
							if (view === "list") {
								return displaySelectListView(filteredPlayers);
							} else {
								return displayPlayerPitchView(filteredPlayers);
							}
						}
					}
				}
			}
		}
	};
	const displaySubPlayers = () => {
		const selectedPlayersArr = [
			...selectedGoalKeepers,
			...selectedDef,
			...selectedFwd,
			...selectedMid,
		];
		if (currentSubSelection === null) {
			return null;
		} else {
			const filteredPlayers = playerData.filter(
				(playerInfo) =>
					playerInfo.player.position.toLowerCase() === currentSubSelection
			);
			if (filteredPlayers) {
				return filteredPlayers.map((players) => {
					const { name, id, position, photo, age } = players.player;

					const foundPlayerMatch = selectedPlayersArr.find(
						(player) => player.id === id
					);
					if (view === "list") {
						if (foundPlayerMatch) {
							return null;
						} else {
							return (
								<Row
									className="items-center border-b border-secondary-gray-2 pb-2 pt-2"
									justify="space-bewteen"
									key={id}
								>
									<Col
										lg={2}
										className="h-12 border-r border-secondary-gray-2 flex items-center"
									>
										<Popover content={() => popMe(players.player)} title={name}>
											<img src={InfoCircleIcon} alt="info Icon" />
										</Popover>
									</Col>
									<Col
										lg={4}
										className="flex justify-center text-center border-r border-secondary-gray-2-border h-12 items-center"
									>
										<img
											src={photo}
											className="w-10 h-10 rounded-full object-contain"
											alt="player avatar"
										/>
									</Col>
									<Col
										lg={12}
										className="border-r border-secondary-gray-2-border h-12"
									>
										<div className="pl-2">
											<span className="text-white font-bold text-regular">
												{name}
											</span>
											<p className="text-white">
												<span className="font-bold uppercase inline-block mr-4 text-xsmall">
													JUV
												</span>
												<span className="font-light uppercase text-xsmall">
													{position}
												</span>
											</p>
										</div>
									</Col>
									<Col lg={3} className="pl-2 h-12 flex items-center">
										<p className="text-white text-base text-center font-bold">
											{age}
										</p>
									</Col>
									<Col
										lg={3}
										className="border-l border-secondary-gray-2-border pl-3 h-12 flex items-center justify-end"
									>
										<Checkbox
											className="player-selector-checkbox"
											onChange={(ev) =>
												handleSelectSubtitutePlayers(players.player, ev)
											}
										/>
									</Col>
								</Row>
							);
						}
					} else {
						if (foundPlayerMatch) {
							return null;
						}
						return (
							<div
								className={
									"player-container " +
									(dragStatus === "dragging" ? "player-drag" : "")
								}
								key={id}
								onDragStart={(ev) => handleDragPlayer(ev, players.player)}
								draggable
							>
								<div className="pitch__player-wrapper">
									<div className="info-icon">
										<Popover
											content={() => showPopUp(players)}
											overlayClassName="player-details-popup"
											title={name}
										>
											<img src={InfoCircleIcon} alt="info icon" />
										</Popover>
									</div>
									<div
										className="jersey-icon"
										style={{ backgroundImage: `url(${TeamJersey})` }}
									></div>
								</div>
								<div className="player-tag" title={name}>
									{formatString(name, 12)}
								</div>
								<div className="points-tag">{age}</div>
								<div className="points-tag position">{position}</div>
							</div>
						);
					}
				});
			}
		}
	};

	const popMe = (playerDetails) => {
		return (
			<div>
				<p>{playerDetails.name}</p>
			</div>
		);
	};
	const handleListScroll = (scroll) => {
		if (scroll >= 750 && scroll < 1200) {
			setFloatCard("middle");
		} else if (scroll >= 1200) {
			setFloatCard("low");
		} else {
			setFloatCard("top");
		}
	};
	let completeTeam = [
		...selectedGoalKeepers,
		...selectedDef,
		...selectedFwd,
		...selectedMid,
	];
	return (
		<DashboardLayout>
			<div className=" pt-12 w-full">
				<Row align="center">
					<Col lg={22}>
						<div className="teams-heading flex justify-between items-center pb-4">
							<h2 className="f-oswald text-4xl font-medium">Squad Selection</h2>
							<Button
								className="bg-tw-green rounded-none h-12 font-medium px-6 inline-flex items-center hover:text-white"
								disabled={completeTeam.length < 13}
								onClick={() => {
									saveTeam(completeTeam);
									if (view === "list") {
										history.replace("/teams/list-select-captain");
									} else {
										history.replace("/teams/pitch-select-captain");
									}
								}}
							>
								Next
							</Button>
						</div>
						<div className="teams-banner bg-primary-brand-darker py-6 flex justify-between items-center mt-4 mb-14 px-6">
							<h2 className="text-white font-semibold text-base">
								Players:{" "}
								<span className="text-2xl">({completeTeam.length}/15)</span>
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
										className="w-full bg-no-repeat bg-cover h-auto pt-2"
										style={{ backgroundImage: `url(${StadiumBg})` }}
									>
										<div className="controls py-9">
											<div className="w-1/3 mx-auto">
												<Button
													className={
														"text-regular font-bold w-1/2 h-12 rounded-none border-0 " +
														(view === "pitch"
															? "bg-primary-brand text-white"
															: "text-black")
													}
													onClick={() => changeView("pitch")}
												>
													Pitch View
												</Button>
												<Button
													className={
														"text-regular font-bold w-1/2 h-12 rounded-none border-0 " +
														(view === "list"
															? "bg-primary-brand text-white"
															: "text-black")
													}
													onClick={() => changeView("list")}
												>
													List View
												</Button>
											</div>
										</div>
										<div className="mt-16">
											{view === "list" ? (
												<ListView handleScroll={handleListScroll} />
											) : (
												<PitchView />
											)}
										</div>
									</div>
								</Col>
								<Col lg={7} className=" relative ">
									<div className="bg-secondary-gray-2 p-4">
										<div className="search-container flex items-center">
											<Input
												className="white-search-input h-12"
												placeholder="Search"
												prefix={<AiOutlineSearch />}
											/>
											<Button
												className="ml-4 brand-outline-btn bg-transparent h-11 rounded-none"
												onClick={() => resetSelectionParams()}
											>
												Reset
											</Button>
										</div>
										<div className="player-positions-filters">
											<div className="flex items-center justify-between mt-6">
												<Button className="bg-white h-10 border-0 px-4 py-2">
													ALL
												</Button>
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
									<div
										className={
											"bg-primary-brand  player-list-container  w-full  " +
											(floatCard === "middle"
												? "mid-position "
												: floatCard === "low"
												? "low-position "
												: "") +
											(currentSelection !== null ? "absolute right-0 " : "")
										}
									>
										{currentSubSelection !== null
											? displaySubPlayers()
											: displayPlayers()}
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
export var StyledPitchPlayer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;
	padding: 2rem 0;
	.jersey-icon {
		width: 50px;
		height: 45px;
	}
	.player-container {
		width: 30%;
		margin-right: 10px;
		margin-bottom: 1rem;
		cursor: move;
		cursor: grab;
		cursor: -moz-grab;
		cursor: -webkit-grab;
	}
	.pitch__player-wrapper {
		display: flex;
		align-items: flex-start;
	}
	.pitch__player-wrapper .info-icon {
		margin-right: 10px;
		display: inline-block;
	}
	.player-container .player-tag {
		background: #33175a;
		border-radius: 2px;
		color: #fff;
		font-size: 10px;
		padding: 6px 0;
		text-align: center;
		font-weight: 600;
	}

	.player-container .points-tag {
		font-size: 10px;
		font-weight: 600;
		background: radial-gradient(
				50% 50% at 50% 50%,
				rgba(255, 255, 255, 0.51) 0%,
				rgba(255, 255, 255, 0.37) 100%
			),
			#33175a;
		text-align: center;
		color: #fff;
	}
	.player-container .points-tag.position {
		background: #33175a;
		border-radius: 2px;
		color: #fff;
		font-size: 10px;
		padding: 6px 0;
		text-align: center;
		font-weight: 600;
	}
`;
export default DefaultTeam;
