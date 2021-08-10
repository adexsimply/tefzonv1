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
  const [role, setRole] = useState(null);
  const [playerData, setPlayerData] = useState(null);
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

  React.useEffect(() => {
    if (playerParams && role && playerData) {
      console.log('update Player Params function------');
      console.log(playerParams);
      console.log('update Player Params function......');
      switch (role) {
        case "Goalkeeper":
          handleGoalKeepers();
          break;
        case "Defender":
          handleDefenders(playerData);
          break;
        case "Midfielder":
          handleMidfielders();
          break;
        case "Attacker":
          handleForwards(playerData);
          break;
        default:
          break;
      }
    }
  }, [playerParams, role, playerData])
  
  const updatePlayerParams = (playerParam, role, playerData) => {
    setPlayerParams(playerParam);
    setRole(role);
    setPlayerData(playerData)
  };

  const updatePitchId = (id) => setSelectedPitchId(id);
  // const resetStatusMessage = () => setStatusMessage({ type: "", msg: "" });
  const updateGoalKeeper = (player) => setSelectedGoalKeepers([...selectedGoalKeepers, player]);
  const updateDefenders = (player) => setSelectedDef([...selectedDef, player]);
  const updateMidfielder = (player) => setSelectedMid([...selectedMid, player]);
  const updateForwards = (player) => setSelectedFwd([...selectedFwd, player]);

  const resetPlayerFilter = () => {
    // reset selected player filter
    setSelectionParams(null);
  };

  const handleGoalKeepers = () => {
    const newGoalKeeper = { ...playerData, ...playerParams };

    if (selectedGoalKeepers.length === 0) {
      updateGoalKeeper(newGoalKeeper);
    } else {
      updateGoalKeeper(newGoalKeeper);
    }
    updateDragStatus("default");
    setSelectionParams(null);
    setPlayerParams(null)
    setRole(null);
    setPlayerData(null)
  };

  const handleDefenders = () => {
    console.log('handling defender');
    const newDefender = {
      id: playerData.id,
      wing: playerData.position,
      name: playerData.name,
      ...playerParams,
    };
    console.log(playerData, newDefender);

    if (selectedDef.length === 0) {
      updateDefenders(newDefender);
    } else {
      updateDefenders(newDefender);
    }
    updateDragStatus("default");
    setSelectionParams(null);
    setPlayerParams(null)
    setRole(null);
    setPlayerData(null)
  };

  const handleMidfielders = () => {
    const newMidFielder = { ...playerData, ...playerParams };

    if (selectedMid.length === 0) {
      updateMidfielder(newMidFielder);
    } else {
      updateMidfielder(newMidFielder);
    }
    updateDragStatus("default");
    setSelectionParams(null);
    setPlayerParams(null)
    setRole(null);
    setPlayerData(null)
  };
  
  const handleForwards = () => {
    const newForward = { ...playerData, ...playerParams };
    if (selectedFwd.length === 0) {
      updateForwards(newForward);
    } else {
      updateForwards(newForward);
    }
    updateDragStatus("default");
    setSelectionParams(null);
    setPlayerParams(null)
    setRole(null);
    setPlayerData(null)
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

  const handleDropPlayer = (role, playerData) => {
    console.log('handleDropPlayer function')
    // updatePlayerParams(playerParam)
    switch (role) {
      case "Goalkeeper":
        handleGoalKeepers();
        break;
      case "Defender":
        handleDefenders(playerData);
        break;
      case "Midfielder":
        handleMidfielders();
        break;
      case "Attacker":
        handleForwards(playerData);
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

  const undoPlayerSelection = (player) => removerPlayerFromList(player);

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
        undoPlayerSelection,
        isPlayerAvailable,
        resetPlayerFilter,
        handleStorePlayerDetails,
        handleDropPlayer,
        handleDrop,
        handleDragPlayer,
      }}
    >
      {props.children}
    </CreateTeamContext.Provider>
  );
};

export default TeamContextProvider;
