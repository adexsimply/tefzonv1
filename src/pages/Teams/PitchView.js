import React, { useEffect, useContext } from "react";
import { TeamContext } from "../../store/TeamContext";
import PitchPlayer from "./PitchPlayer";
import Stadium from "../../assets/img/stadium.svg";
import TeamJersey from "../../assets/img/team-jersey.svg";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

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
	} = useContext(TeamContext);

	useEffect(() => {
		if (dragStatus === "dragging") {
			const receivingPlayer = document.getElementById(selectedPitchId)
				.children[0];

			receivingPlayer.addEventListener("dragover", handleDragPlayer);
			receivingPlayer.addEventListener("drop", handleDrop);
		}
		if (dragStatus === "dropped") {
			handleStorePlayerDetails();
		}
		// eslint-disable-next-line
	}, [dragStatus, selectedPitchId]);

	const handleGoalKeepers = (player, details) => {
		const newGoalKeeper = { ...draggedPlayer, ...playerParams };
		if (selectedGoalKeepers.length === 0) {
			updateGoalKeeper(newGoalKeeper);
		} else {
		}
		updateDragStatus("default");
	};
	const handleDefenders = (player, details) => {
		const newDefender = { ...draggedPlayer, ...playerParams };
		if (selectedDef.length === 0) {
			updateDefenders(newDefender);
		} else {
			updateDefenders(newDefender);
		}
		updateDragStatus("default");
	};
	const handleMidfielders = (player, details) => {
		const newMidFielder = { ...draggedPlayer, ...playerParams };
		if (selectedMid.length === 0) {
			updateMidfielder(newMidFielder);
		} else {
			updateMidfielder(newMidFielder);
		}
		updateDragStatus("default");
	};

	const handleStorePlayerDetails = () => {
		switch (currentSelection) {
			case "gk":
				handleGoalKeepers(draggedPlayer, playerParams);
				break;
			case "def":
				handleDefenders(draggedPlayer, playerParams);
				break;
			case "mid":
				handleMidfielders(draggedPlayer, playerParams);
				break;
			default:
				break;
		}
		// console.log(draggedPlayer, playerParams, "ready to dispense");
	};

	const handleUndoSelection = (ev, player) => {
		// ev.stopPropagation();
		// let blankParentEl = ev.target.closest(".blank");
		// let badge = blankParentEl.childNodes[0];
		// let answersPool = document.getElementById("answers_pool");
		// blankParentEl.removeChild(badge);
		// answersPool?.appendChild(badge);
	};
	const handleDrop = (ev) => {
		ev.preventDefault();
		ev.stopPropagation();

		console.log("allow drop");
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

	const displaySelectedGoalKeeps = () => {
		return selectedGoalKeepers.map((player) => {
			if (player.is_subtitute === "true") {
				return null;
			}
			return (
				<StyledTeamPlayer className=" pitch-player ">
					<button className="close-btn">
						<AiOutlineClose style={{ color: "#FF4B26", fontWeight: 600 }} />
					</button>
					<img src={TeamJersey} alt="" />

					<div className="">
						<div className="player-tag">{player.name}</div>
						<div className="points-tag">{player.points}</div>
					</div>
				</StyledTeamPlayer>
			);
		});
	};
	const displayDefenders = () => {
		return selectedDef.map((player) => {
			if (player.is_subtitute === "true") {
				return null;
			} else {
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
							<div className="points-tag">{player.points}</div>
						</div>
					</StyledTeamPlayer>
				);
			}
		});
	};
	const displayDefendersEmptyState = () => {
		if (selectedDef.length === 1) {
			return (
				<>
					<PitchPlayer
						wrapperClassName="mr-8"
						tagLabel="def"
						subStatus={false}
						id="def_2"
						playerPlacement="def_2"
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "def",
								is_subtitute: "false",
								playerPlacement: null,
							})
						}
					/>
					<PitchPlayer
						tagLabel="def"
						subStatus={false}
						playerPlacement="def_3"
						id="def_3"
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "def",
								is_subtitute: "false",
								playerPlacement: null,
							})
						}
					/>
				</>
			);
		} else if (selectedDef.length === 2) {
			return (
				<PitchPlayer
					tagLabel="def"
					subStatus={false}
					playerPlacement="def_3"
					id="def_3"
					onClick={(ev) =>
						handlePlayerSelection(ev, {
							position: "def",
							is_subtitute: "false",
							playerPlacement: null,
						})
					}
				/>
			);
		} else if (selectedDef.length === 3) {
			return null;
		} else {
			return (
				<>
					<PitchPlayer
						wrapperClassName="mr-8"
						tagLabel="def"
						subStatus={false}
						id="def_1"
						playerPlacement="def_1"
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "def",
								is_subtitute: "false",
								playerPlacement: null,
							})
						}
					/>
					<PitchPlayer
						wrapperClassName="mr-8"
						tagLabel="def"
						subStatus={false}
						id="def_2"
						playerPlacement="def_2"
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "def",
								is_subtitute: "false",
								playerPlacement: null,
							})
						}
					/>
					<PitchPlayer
						tagLabel="def"
						subStatus={false}
						playerPlacement="def_3"
						id="def_3"
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "def",
								is_subtitute: "false",
								playerPlacement: null,
							})
						}
					/>
				</>
			);
		}
	};
	const displayMidFieldersEmptyState = () => {
		if (selectedMid.length === 1) {
			return (
				<>
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="mid"
						playerPlacement="mid_2"
						id="mid_2"
						subStatus={false}
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "mid",
								is_subtitute: "false",
								playerPlacement: "mid_2",
							})
						}
					/>
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="mid"
						id="mid_3"
						playerPlacement="mid_3"
						subStatus={false}
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "mid",
								is_subtitute: "false",
								playerPlacement: "mid_3",
							})
						}
					/>
					<PitchPlayer
						tagLabel="mid"
						playerPlacement="mid_4"
						id="mid_4"
						subStatus={false}
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "mid",
								is_subtitute: "false",
								playerPlacement: "mid_4",
							})
						}
					/>
				</>
			);
		} else if (selectedMid.length === 2) {
			return (
				<>
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="mid"
						playerPlacement="mid_3"
						id="mid_3"
						subStatus={false}
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "mid",
								is_subtitute: "false",
								playerPlacement: "mid_3",
							})
						}
					/>
					<PitchPlayer
						tagLabel="mid"
						playerPlacement="mid_4"
						subStatus={false}
						id="mid_4"
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "mid",
								is_subtitute: "false",
								playerPlacement: "mid_4",
							})
						}
					/>
				</>
			);
		} else if (selectedMid.length === 3) {
			return (
				<PitchPlayer
					tagLabel="mid"
					playerPlacement="mid_4"
					id="mid_4"
					subStatus={false}
					onClick={(ev) =>
						handlePlayerSelection(ev, {
							position: "mid",
							is_subtitute: "false",
							playerPlacement: "mid_4",
						})
					}
				/>
			);
		} else if (selectedMid.length === 4) {
			return null;
		} else {
			return (
				<>
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="mid"
						subStatus={false}
						playerPlacement="mid_1"
						id="mid_1"
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "mid",
								is_subtitute: "false",
								playerPlacement: "mid_1",
							})
						}
					/>
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="mid"
						playerPlacement="mid_2"
						id="mid_2"
						subStatus={false}
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "mid",
								is_subtitute: "false",
								playerPlacement: "mid_2",
							})
						}
					/>
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="mid"
						playerPlacement="mid_3"
						id="mid_3"
						subStatus={false}
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "mid",
								is_subtitute: "false",
								playerPlacement: "mid_3",
							})
						}
					/>
					<PitchPlayer
						tagLabel="mid"
						playerPlacement="mid_4"
						id="mid_4"
						subStatus={false}
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "mid",
								is_subtitute: "false",
								playerPlacement: "mid_4",
							})
						}
					/>
				</>
			);
		}
	};

	const displayMidfielders = () => {
		return selectedMid.map((player) => {
			if (player.is_subtitute === "true") {
				return null;
			} else {
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
							<div className="points-tag">{player.points}</div>
						</div>
					</StyledTeamPlayer>
				);
			}
		});
	};

	const displayForwardEmptyState = () => {
		if (selectedFwd.length === 1) {
			return (
				<>
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="fwd"
						playerPlacement="fwd_1"
						id="fwd_1"
						subStatus={false}
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "fwd",
								is_subtitute: "false",
								playerPlacement: "fwd_1",
							})
						}
					/>
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="fwd"
						playerPlacement="fwd_2"
						id="fwd_2"
						subStatus={false}
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "fwd",
								is_subtitute: "false",
								playerPlacement: "fwd_2",
							})
						}
					/>
				</>
			);
		} else if (selectedFwd.length === 2) {
			return (
				<PitchPlayer
					wrapperClassName="mr-12"
					tagLabel="fwd"
					playerPlacement="fwd_3"
					id="fwd_3"
					subStatus={false}
					onClick={(ev) =>
						handlePlayerSelection(ev, {
							position: "fwd",
							is_subtitute: "false",
							playerPlacement: "fwd_3",
						})
					}
				/>
			);
		} else if (selectedFwd.length === 3) {
			return null;
		} else {
			return (
				<>
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="fwd"
						playerPlacement="fwd_1"
						id="fwd_1"
						subStatus={false}
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "fwd",
								is_subtitute: "false",
								playerPlacement: "fwd_1",
							})
						}
					/>
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="fwd"
						playerPlacement="fwd_2"
						id="fwd_2"
						subStatus={false}
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "fwd",
								is_subtitute: "false",
								playerPlacement: "fwd_2",
							})
						}
					/>
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="fwd"
						playerPlacement="fwd_3"
						id="fwd_3"
						subStatus={false}
						onClick={(ev) =>
							handlePlayerSelection(ev, {
								position: "fwd",
								is_subtitute: "false",
								playerPlacement: "fwd_3",
							})
						}
					/>
				</>
			);
		}
	};

	const displayForward = () => {
		return selectedFwd.map((player) => {
			if (player.is_subtitute === "true") {
				return null;
			} else {
				return (
					<StyledTeamPlayer
						className=" pitch-player "
						style={{ marginRight: "2rem" }}
					>
						<button
							className="close-btn"
							onClick={(ev) => handleUndoSelection(ev, player)}
						>
							<AiOutlineClose style={{ color: "#FF4B26", fontWeight: 600 }} />
						</button>
						<img src={TeamJersey} alt="" />

						<div className="">
							<div className="player-tag">{player.name}</div>
							<div className="points-tag">{player.points}</div>
						</div>
					</StyledTeamPlayer>
				);
			}
		});
	};

	return (
		<div className="pitch-view-container">
			<div
				className="pitch-stadium-bg w-full  bg-no-repeat"
				style={{ backgroundImage: `url(${Stadium})` }}
			>
				<div className="relative flex justify-center position-container mx-auto">
					{displaySelectedGoalKeeps()}
					{selectedGoalKeepers.length === 0 && (
						<PitchPlayer
							tagLabel="gk"
							subStatus={false}
							id="gk_1"
							onClick={(ev) =>
								handlePlayerSelection(ev, {
									position: "gk",
									is_subtitute: "false",
									playerPlacement: null,
								})
							}
						/>
					)}
				</div>
				<div className="relative flex justify-center mt-10 position-container mx-auto">
					{displayDefenders()}
					{displayDefendersEmptyState()}
				</div>
				<div className="relative flex justify-center mt-12 position-container mx-auto">
					{displayMidfielders()}
					{displayMidFieldersEmptyState()}
				</div>
				<div className="relative flex justify-center mt-14 position-container mx-auto">
					{displayForward()}
					{displayForwardEmptyState()}
				</div>

				<div className="text-center mt-20">
					<h3 className="f-oswald text-xl font-bold">Subs</h3>
					<div className="border-b-2 border-primary-dark"></div>
				</div>
				<div className="relative flex justify-center mt-8 position-container mx-auto">
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="gk"
						subStatus={true}
					/>
					<PitchPlayer
						wrapperClassName="mr-12"
						tagLabel="mid"
						subStatus={true}
					/>
					<PitchPlayer
						tagLabel="fwd"
						wrapperClassName="mr-12"
						subStatus={true}
					/>
					<PitchPlayer tagLabel="def" />
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

	button.close-btn {
		position: absolute;
		top: -4px;
		left: 51px;
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
