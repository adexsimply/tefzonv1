import React, { useState, createContext } from "react";

export const CreateTeamContext = createContext();

const TeamContextProvider = (props) => {
  const [currentSelection, setCurrentSelection] = useState(null);
  const [selectedGoalKeepers, setSelectedGoalKeepers] = useState([]);

  const [selectedMid, setSelectedMid] = useState([]);
  const [selectedDef, setSelectedDef] = useState([]);
  const [selectedFwd, setSelectedFwd] = useState([]);
  const [statusMessage, setStatusMessage] = useState({ type: "", msg: "" });
  const [view, setView] = useState("pitch");
  const [dragStatus, setDragStatus] = useState("");
  const [draggedPlayer, setDraggedPlayer] = useState(null);
  const [playerParams, setPlayerParams] = useState(null);
  const [selectedPitchId, setSelectedPitchId] = useState("");

  const changeView = (param) => {
    setView(param);
    localStorage.setItem("TEF_VIEW", param);
  };

  const setSelectionParams = (params) => {
    setCurrentSelection(params);
  };
  
  const resetSelectionParams = () => {
    setSelectionParams(null);
  };
  const handlePlayerSelection = (player) => {
    console.log(player, "plaayer sel");
    switch (currentSelection) {
      case "goalkeeper":
        if (selectedGoalKeepers.length === 1) {
          updateStatusMessage("warning", "Goal keepers team is complete");
        } else {
          setSelectedGoalKeepers([
            ...selectedGoalKeepers,
            { ...player, is_substitute: false },
          ]);
        }
        break;
      case "midfielder":
        if (selectedMid.length === 4) {
          updateStatusMessage("warning", "Midfielders team is complete");
        } else {
          setSelectedMid([...selectedMid, { ...player, is_substitute: false }]);
        }
        break;
      case "defender":
        if (selectedDef.length === 3) {
          updateStatusMessage("warning", "Defenders team is complete");
        } else {
          setSelectedDef([...selectedDef, { ...player, is_substitute: false }]);
        }
        break;
      case "attacker":
        if (selectedFwd.length === 3) {
          updateStatusMessage("warning", "Forwards team is complete");
        } else {
          setSelectedFwd([...selectedFwd, { ...player, is_substitute: false }]);
        }
        break;
      default:
        break;
    }
  };
  const removerPlayerFromList = (player) => {
    const { position } = player;

    switch (position) {
      case "goalkeeper":
        const filteredGK = selectedGoalKeepers.filter(
          (gk) => gk.id !== player.id
        );
        if (filteredGK) {
          setSelectedGoalKeepers(filteredGK);
        }
        break;
      case "midfielder":
        const filteredMd = selectedMid.filter((mid) => mid.id !== player.id);
        if (filteredMd) {
          setSelectedMid(filteredMd);
        }
        break;
      case "defender":
        const filteredDEF = selectedDef.filter((def) => def.id !== player.id);
        if (filteredDEF) {
          setSelectedDef(filteredDEF);
        }
        break;
      case "attacker":
        const filteredFwd = selectedFwd.filter((fwd) => fwd.id !== player.id);
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
  const getTeamName = () => {
    const name = localStorage.getItem("TEF_NAME");
    return name;
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
  const updateForwards = (player) => setSelectedFwd([...selectedFwd, player]);

  return (
    <CreateTeamContext.Provider
      value={{
        currentSelection,
        setSelectionParams,
        resetSelectionParams,
        selectedGoalKeepers,
        selectedMid,
        selectedDef,
        selectedFwd,
        handlePlayerSelection,
        removerPlayerFromList,
        statusMessage,
        getTeamName,
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
        updateForwards,
      }}
    >
      {props.children}
    </CreateTeamContext.Provider>
  );
};

export default TeamContextProvider;
