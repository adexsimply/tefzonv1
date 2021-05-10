import React, { useState, createContext } from "react";

export const TeamContext = createContext();

const TeamContextProvider = (props) => {
	const [currentSelection, setCurrentSelection] = useState(null);
	const [currentSubSelection, setCurrentSubSelection] = useState(null);
	const [selectedGoalKeepers, setSelectedGoalKeepers] = useState([]);

	const [selectedMid, setSelectedMid] = useState([]);
	const [selectedDef, setSelectedDef] = useState([]);
	const [selectedFwd, setSelectedFwd] = useState([]);
	const [statusMessage, setStatusMessage] = useState({ type: "", msg: "" });
	const [teamName, setTeamName] = useState("");
	const [view, setView] = useState("pitch");
	const [dragStatus, setDragStatus] = useState("");
	const [draggedPlayer, setDraggedPlayer] = useState(null);
	const [playerParams, setPlayerParams] = useState(null);
	const [selectedPitchId, setSelectedPitchId] = useState("");

	const changeView = (param) => setView(param);

	const setSelectionParams = (params) => {
		setCurrentSelection(params);
		setCurrentSubSelection(null);
	};
	const setSubSelectionParams = (params) => {
		setCurrentSubSelection(params);
		setCurrentSelection(null);
	};
	const resetSelectionParams = () => {
		setSelectionParams(null);
		setSubSelectionParams(null);
	};
	const handlePlayerSelection = (player) => {
		switch (currentSelection) {
			case "gk":
				if (selectedGoalKeepers.length === 2) {
					updateStatusMessage("warning", "Goal keepers team is complete");
				} else {
					setSelectedGoalKeepers([
						...selectedGoalKeepers,
						{ ...player, is_subtitute: false },
					]);
				}
				break;
			case "mid":
				if (selectedMid.length === 5) {
					updateStatusMessage("warning", "Midfielders team is complete");
				} else {
					setSelectedMid([...selectedMid, { ...player, is_subtitute: false }]);
				}
				break;
			case "def":
				if (selectedDef === 5) {
					updateStatusMessage("warning", "Defenders team is complete");
				} else {
					setSelectedDef([...selectedDef, { ...player, is_subtitute: false }]);
				}
				break;
			case "fwd":
				if (selectedFwd.length === 3) {
					updateStatusMessage("warning", "Forwards team is complete");
				} else {
					setSelectedFwd([...selectedFwd, { ...player, is_subtitute: false }]);
				}
				break;
			default:
				break;
		}
	};
	const removerPlayerFromList = (player) => {
		switch (currentSelection) {
			case "gk":
				const filteredGK = selectedGoalKeepers.filter(
					(gk) => gk.name.toLowerCase() !== player.name.toLowerCase()
				);

				if (filteredGK) {
					setSelectedGoalKeepers(filteredGK);
				}
				break;
			case "mid":
				const filteredMd = selectedMid.filter(
					(mid) => mid.name.toLowerCase() !== player.name.toLowerCase()
				);
				if (filteredMd) {
					selectedMid(filteredMd);
				}
				break;
			case "def":
				const filteredDEF = selectedDef.filter(
					(def) => def.name.toLowerCase() !== player.name.toLowerCase()
				);
				if (filteredDEF) {
					setSelectedDef(filteredDEF);
				}
				break;
			case "fwd":
				const filteredFwd = selectedFwd.filter(
					(fwd) => fwd.name.toLowerCase() !== player.name.toLowerCase()
				);
				if (filteredFwd) {
					setSelectedFwd(filteredFwd);
				}
				break;
			default:
				break;
		}
	};
	const handleSubtitutePlayerSelection = (player) => {
		switch (currentSubSelection) {
			case "gk":
				if (selectedGoalKeepers.length === 3) {
					updateStatusMessage(
						"warning",
						"Subtitute Goal keeper has been added"
					);
				} else {
					setSelectedGoalKeepers([
						...selectedGoalKeepers,
						{ ...player, is_subtitute: true },
					]);
				}
				break;
			case "mid":
				if (selectedMid.length === 6) {
					updateStatusMessage(
						"warning",
						"Substitute Midfielder has been added"
					);
				} else {
					setSelectedMid([...selectedMid, { ...player, is_subtitute: true }]);
				}
				break;
			case "def":
				if (selectedDef === 6) {
					updateStatusMessage("warning", "Susbtitute defender has been added");
				} else {
					setSelectedDef([...selectedDef, { ...player, is_subtitute: true }]);
				}
				break;
			case "fwd":
				if (selectedFwd.length === 4) {
					updateStatusMessage("warning", "Substitute Forward has been added");
				} else {
					setSelectedFwd([...selectedFwd, { ...player, is_subtitute: true }]);
				}
				break;
			default:
				break;
		}
	};
	const handleRemoveSubtitutePlayerFromList = (player) => {
		switch (currentSubSelection) {
			case "gk":
				const filteredGK = selectedGoalKeepers.filter(
					(gk) =>
						gk.name.toLowerCase() !== player.name.toLowerCase() &&
						gk.name.is_subtitute
				);

				if (filteredGK) {
					setSelectedGoalKeepers(filteredGK);
				}

				break;
			case "md":
				const filteredMd = selectedMid.filter(
					(mid) =>
						mid.name.toLowerCase() !== player.name.toLowerCase() &&
						mid.name.is_subtitute
				);
				if (filteredMd) {
					selectedMid(filteredMd);
				}
				break;
			case "def":
				const filteredDEF = selectedDef.filter(
					(def) =>
						def.name.toLowerCase() !== player.name.toLowerCase() &&
						def.name.is_subtitute
				);
				if (filteredDEF) {
					setSelectedDef(filteredDEF);
				}
				break;
			case "fwd":
				const filteredFwd = selectedFwd.filter(
					(fwd) =>
						fwd.name.toLowerCase() !== player.name.toLowerCase() &&
						fwd.name.is_subtitute
				);
				if (filteredFwd) {
					setSelectedFwd(filteredFwd);
				}
				break;
			default:
				break;
		}
	};
	const updateStatusMessage = (msgType, response) => {
		setStatusMessage({ type: msgType, msg: response });
	};
	const getTeamName = (value) => {
		setTeamName(value);
	};
	const updateDragStatus = (value) => {
		setDragStatus(value);
	};
	const updateDraggedPlayer = (playerDetails) => {
		setDraggedPlayer(playerDetails);
	};
	const updatePlayerParams = (data) => setPlayerParams(data);
	const updatePitchId = (id) => setSelectedPitchId(id);
	// const resetStatusMessage = () => setStatusMessage({ type: "", msg: "" });
	const updateGoalKeeper = (player) =>
		setSelectedGoalKeepers([...selectedGoalKeepers, player]);
	const updateDefenders = (player) => setSelectedDef([...selectedDef, player]);
	const updateMidfielder = (player) => setSelectedMid([...selectedMid, player]);

	return (
		<TeamContext.Provider
			value={{
				currentSelection,
				currentSubSelection,
				setSelectionParams,
				setSubSelectionParams,
				resetSelectionParams,
				selectedGoalKeepers,
				selectedMid,
				selectedDef,
				selectedFwd,
				handlePlayerSelection,
				removerPlayerFromList,
				handleSubtitutePlayerSelection,
				handleRemoveSubtitutePlayerFromList,
				statusMessage,
				getTeamName,
				teamName,
				view,
				changeView,
				dragStatus,
				updateDragStatus,
				updateDraggedPlayer,
				draggedPlayer,
				updatePlayerParams,
				playerParams,
				updatePitchId,
				selectedPitchId,
				updateGoalKeeper,
				updateDefenders,
				updateMidfielder,
			}}
		>
			{props.children}
		</TeamContext.Provider>
	);
};

export default TeamContextProvider;
