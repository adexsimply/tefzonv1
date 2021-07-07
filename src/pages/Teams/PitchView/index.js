import React, { useEffect, useContext } from "react";
import { TeamContext } from "../../../store/TeamContext";
import { AiOutlineClose } from "react-icons/ai";
import { formatString } from "../../../helpers/utils";
import PitchPlayer from "./PitchPlayer";
import Stadium from "../../../assets/img/stadium.svg";
import TeamJersey from "../../../assets/img/team-jersey.svg";
import styled from "styled-components";

const PitchView = () => {
	const {
		dragStatus,
		draggedPlayer,
		currentSelection,
		setSelectionParams,

		updatePlayerParams,
		selectedPitchId,
		playerParams,
		updateDragStatus,
		selectedGoalKeepers,
		selectedDef,
		selectedMid,
		selectedFwd,
		updatePitchId,
		updateGoalKeeper,
		updateDefenders,
		updateMidfielder,
		updateForwards,
		removerPlayerFromList,
	} = useContext(TeamContext);

	useEffect(() => {
		if (dragStatus === "dragging") {
			const receivingPlayer =
				document.getElementById(selectedPitchId).children[0];

			receivingPlayer.addEventListener("dragover", handleDragPlayer);
			receivingPlayer.addEventListener("drop", handleDrop);
		}
		if (dragStatus === "dropped") {
			handleStorePlayerDetails();
			resetPlayerFilter();
		}
		// eslint-disable-next-line
	}, [dragStatus, selectedPitchId]);

	const resetPlayerFilter = () => {
		// reset selected player filter
		setSelectionParams(null);
	};

	const handleGoalKeepers = () => {
		const newGoalKeeper = { ...draggedPlayer, ...playerParams };

		if (selectedGoalKeepers.length === 0) {
			updateGoalKeeper(newGoalKeeper);
		} else {
			updateGoalKeeper(newGoalKeeper);
		}
		updateDragStatus("default");
		setSelectionParams(null);
	};
	const handleDefenders = () => {
		const newDefender = {
			id: draggedPlayer.id,
			wing: draggedPlayer.position,
			name: draggedPlayer.name,
			...playerParams,
		};
		console.log(draggedPlayer, newDefender);

		if (selectedDef.length === 0) {
			updateDefenders(newDefender);
		} else {
			updateDefenders(newDefender);
		}
		updateDragStatus("default");
		setSelectionParams(null);
	};
	const handleMidfielders = () => {
		const newMidFielder = { ...draggedPlayer, ...playerParams };

		if (selectedMid.length === 0) {
			updateMidfielder(newMidFielder);
		} else {
			updateMidfielder(newMidFielder);
		}
		updateDragStatus("default");
		setSelectionParams(null);
	};
	const handleForwards = () => {
		const newForward = { ...draggedPlayer, ...playerParams };
		if (selectedFwd.length === 0) {
			updateForwards(newForward);
		} else {
			updateForwards(newForward);
		}
		updateDragStatus("default");
		setSelectionParams(null);
	};

	const handleStorePlayerDetails = () => {
		switch (currentSelection) {
			case "goalkeeper":
				handleGoalKeepers();
				break;
			case "defender":
				handleDefenders(draggedPlayer, playerParams);
				break;
			case "midfielder":
				handleMidfielders();
				break;
			case "attacker":
				handleForwards(draggedPlayer, playerParams);
				break;
			default:
				break;
		}
	};

	// const handleUndoSelection = (ev, player) => {
	// ev.stopPropagation();
	// let blankParentEl = ev.target.closest(".blank");
	// let badge = blankParentEl.childNodes[0];
	// let answersPool = document.getElementById("answers_pool");
	// blankParentEl.removeChild(badge);
	// answersPool?.appendChild(badge);
	// };
	const handleDrop = (ev) => {
		ev.preventDefault();
		ev.stopPropagation();

		updateDragStatus("dropped");
	};
	const handleDragPlayer = (ev) => {
		ev.preventDefault();
		// ev.stopPropagation();
	};
	const handlePlayerSelection = (ev, data) => {
		const targetEL = ev.target;
		const targetParentEL = targetEL.parentElement;

		updatePitchId(targetParentEL.getAttribute("id"));
		setSelectionParams(data.position);
		updatePlayerParams(data);
	};
	const undoPlayerSelection = (player) => removerPlayerFromList(player);

	const displaySelectedGoalKeeps = (placement) => {
		const player = selectedGoalKeepers.find(
			(player) => player.playerPlacement === placement
		);

		if (player) {
			return (
				<StyledTeamPlayer className=" pitch-player ">
					<button
						className="close-btn"
						onClick={() => undoPlayerSelection(player)}
					>
						<AiOutlineClose style={{ color: "#FF4B26", fontWeight: 600 }} />
					</button>
					<img src={TeamJersey} alt="" />

					<div className="">
						<div className="player-tag">{player.name}</div>
						<div className="points-tag">{player.position}</div>
					</div>
				</StyledTeamPlayer>
			);
		}
	};
	const displayDefenders = (placement) => {
		const player = selectedDef.find(
			(player) => player.playerPlacement === placement
		);
		if (player) {
			return (
				<StyledTeamPlayer
					className=" pitch-player "
					style={{ marginRight: "2rem" }}
				>
					<button className="close-btn">
						<AiOutlineClose style={{ color: "#FF4B26", fontWeight: 600 }} />
					</button>
					<img src={TeamJersey} alt="" />

					<div className="">
						<div className="player-tag" title={player.name}>
							{formatString(player.name, 10)}
						</div>
						<div className="points-tag">{player.position}</div>
					</div>
				</StyledTeamPlayer>
			);
		} else {
			return null;
		}
	};

	const displayMidfielders = (placement) => {
		const player = selectedMid.find(
			(player) => player.playerPlacement === placement
		);

		if (player) {
			return (
				<StyledTeamPlayer
					className=" pitch-player "
					style={{ marginRight: "2rem" }}
				>
					<button className="close-btn">
						<AiOutlineClose style={{ color: "#FF4B26", fontWeight: 600 }} />
					</button>
					<img src={TeamJersey} alt="" />

					<div className="">
						<div className="player-tag">{player.name}</div>
						<div className="points-tag">{player.position}</div>
					</div>
				</StyledTeamPlayer>
			);
		} else {
			return null;
		}
	};

	const displayForward = (placement) => {
		const player = selectedFwd.find(
			(player) => player.playerPlacement === placement
		);
		if (player) {
			return (
				<StyledTeamPlayer
					className=" pitch-player "
					style={{ marginRight: "2rem" }}
				>
					<button className="close-btn">
						<AiOutlineClose style={{ color: "#FF4B26", fontWeight: 600 }} />
					</button>
					<img src={TeamJersey} alt="" />

					<div className="">
						<div className="player-tag">{player.name}</div>
						<div className="points-tag">{player.position}</div>
					</div>
				</StyledTeamPlayer>
			);
		} else {
			return null;
		}
	};
	const isPlayerAvailable = (playerPlacement) => {
		const team = [
			...selectedDef,
			...selectedFwd,
			...selectedGoalKeepers,
			...selectedMid,
		];
		const player = team.find(
			(player) => player.playerPlacement === playerPlacement
		);
		if (player) return true;
		return false;
	};

	return (
		<div className="pitch-view-container">
			<div
				className="pitch-stadium-bg w-full  bg-no-repeat"
				style={{ backgroundImage: `url(${Stadium})` }}
			>
				<div className="relative flex justify-center position-container mx-auto">
					{displaySelectedGoalKeeps("gk_1")}
					{selectedGoalKeepers.length === 0 && (
						<PitchPlayer
							tagLabel="gk"
							subStatus={false}
							id="gk_1"
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "goalkeeper",
									is_substitute: false,
									playerPlacement: "gk_1",
								})
							}
						/>
					)}
				</div>
				<div className="relative flex justify-center mt-10 position-container mx-auto">
					{isPlayerAvailable("def_1") ? (
						displayDefenders("def_1")
					) : (
						<PitchPlayer
							wrapperClassName="mr-8"
							tagLabel="def"
							subStatus={false}
							id="def_1"
							playerPlacement="def_1"
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "defender",
									is_substitute: false,
									playerPlacement: "def_1",
								})
							}
						/>
					)}
					{isPlayerAvailable("def_2") ? (
						displayDefenders("def_2")
					) : (
						<PitchPlayer
							wrapperClassName="mr-8"
							tagLabel="def"
							subStatus={false}
							id="def_2"
							playerPlacement="def_2"
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "defender",
									is_substitute: false,
									playerPlacement: "def_2",
								})
							}
						/>
					)}
					{isPlayerAvailable("def_3") ? (
						displayDefenders("def_3")
					) : (
						<PitchPlayer
							wrapperClassName="mr-8"
							tagLabel="def"
							subStatus={false}
							id="def_3"
							playerPlacement="def_1"
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "defender",
									is_substitute: false,
									playerPlacement: "def_3",
								})
							}
						/>
					)}
				</div>
				<div className="relative flex justify-center mt-12 position-container mx-auto">
					{isPlayerAvailable("mid_1") ? (
						displayMidfielders("mid_1")
					) : (
						<PitchPlayer
							wrapperClassName="mr-12"
							tagLabel="mid"
							playerPlacement="mid_1"
							id="mid_1"
							subStatus={false}
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "midfielder",
									is_substitute: false,
									playerPlacement: "mid_1",
								})
							}
						/>
					)}
					{isPlayerAvailable("mid_2") ? (
						displayMidfielders("mid_2")
					) : (
						<PitchPlayer
							wrapperClassName="mr-12"
							tagLabel="mid"
							playerPlacement="mid_2"
							id="mid_2"
							subStatus={false}
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "midfielder",
									is_substitute: false,
									playerPlacement: "mid_2",
								})
							}
						/>
					)}
					{isPlayerAvailable("mid_3") ? (
						displayMidfielders("mid_3")
					) : (
						<PitchPlayer
							wrapperClassName="mr-12"
							tagLabel="mid"
							playerPlacement="mid_3"
							id="mid_3"
							subStatus={false}
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "midfielder",
									is_substitute: false,
									playerPlacement: "mid_3",
								})
							}
						/>
					)}
					{isPlayerAvailable("mid_4") ? (
						displayMidfielders("mid_4")
					) : (
						<PitchPlayer
							wrapperClassName="mr-12"
							tagLabel="mid"
							playerPlacement="mid_4"
							id="mid_4"
							subStatus={false}
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "midfielder",
									is_substitute: false,
									playerPlacement: "mid_4",
								})
							}
						/>
					)}
				</div>
				<div className="relative flex justify-center mt-14 position-container mx-auto">
					{isPlayerAvailable("fwd_1") ? (
						displayForward("fwd_1")
					) : (
						<PitchPlayer
							wrapperClassName="mr-12"
							tagLabel="fwd"
							playerPlacement="fwd_1"
							id="fwd_1"
							subStatus={false}
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "attacker",
									is_substitute: false,
									playerPlacement: "fwd_1",
								})
							}
						/>
					)}
					{isPlayerAvailable("fwd_2") ? (
						displayForward("fwd_2")
					) : (
						<PitchPlayer
							wrapperClassName="mr-12"
							tagLabel="fwd"
							playerPlacement="fwd_2"
							id="fwd_2"
							subStatus={false}
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "attacker",
									is_substitute: false,
									playerPlacement: "fwd_2",
								})
							}
						/>
					)}
					{isPlayerAvailable("fwd_3") ? (
						displayForward("fwd_3")
					) : (
						<PitchPlayer
							wrapperClassName="mr-12"
							tagLabel="fwd"
							playerPlacement="fwd_3"
							id="fwd_3"
							subStatus={false}
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "attacker",
									is_substitute: false,
									playerPlacement: "fwd_3",
								})
							}
						/>
					)}
				</div>

				<div className="text-center mt-20">
					<h3 className="f-oswald text-xl font-bold">Subs</h3>
					<div className="border-b-2 border-primary-dark"></div>
				</div>
				<div className="relative flex justify-center mt-8 position-container mx-auto">
					{isPlayerAvailable("gk_2") ? (
						displaySelectedGoalKeeps("gk_2")
					) : (
						<PitchPlayer
							wrapperClassName="mr-12"
							tagLabel="gk"
							subStatus={true}
							id="gk_2"
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "goalkeeper",
									is_substitute: true,
									playerPlacement: "gk_2",
								})
							}
						/>
					)}
					{isPlayerAvailable("mid_5") ? (
						displayMidfielders("mid_5")
					) : (
						<PitchPlayer
							wrapperClassName="mr-12"
							tagLabel="mid"
							subStatus={true}
							id="mid_5"
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "midfielder",
									is_substitute: true,
									playerPlacement: "mid_5",
								})
							}
						/>
					)}
					{isPlayerAvailable("def_4") ? (
						displayDefenders("def_4")
					) : (
						<PitchPlayer
							wrapperClassName="mr-12"
							tagLabel="def"
							subStatus={true}
							id="def_4"
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "defender",
									is_substitute: true,
									playerPlacement: "def_4",
								})
							}
						/>
					)}
					{isPlayerAvailable("fwd_4") ? (
						displayForward("fwd_4")
					) : (
						<PitchPlayer
							wrapperClassName="mr-12"
							tagLabel="fwd"
							subStatus={true}
							id="fwd_4"
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "attacker",
									is_substitute: true,
									playerPlacement: "fwd_4",
								})
							}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export const StyledTeamPlayer = styled.div`
	display: inline-flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	position: relative;
	width: 100px;
	height: 80px;

	button.close-btn {
		position: absolute;
		top: -4px;
		right: 20px;
		background: #fff;
		border-radius: 50px;
		width: 20px;
		height: 20px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
	}
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

export default PitchView;
