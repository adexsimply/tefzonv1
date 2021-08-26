import React, { useState } from 'react';
import { Button, Row, Col, Input, Select, message } from "antd";
import { AiOutlineSearch } from 'react-icons/ai';
import { CreateTeamContext } from '../store/CreateTeamContext';
import PlayerDisplay from "../pages/Teams/EmptyState/PlayerDisplay";
import { getPlayers } from '../helpers/api';

function SubTeamSideBar() {
  const [floatCard, setFloatCard] = useState("top");
  const [loadingPlayers, setLoadingPlayers] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const [searchName, setSearchName] = useState(null);
  const [filteredPlayerData, setFilteredPlayerData] = useState(null);

  const {
    currentSelection,
    selectedDef,
    selectedFwd,
    selectedGoalKeepers,
    selectedMid,
    statusMessage,
    view,
    changeView,
    updateGoalKeeper,
    updateDefenders,
    updateMidfielder,
    updateForwards,
  } = React.useContext(CreateTeamContext);

  const { Option } = Select;

  React.useEffect(() => {
    getPlayerList();
  }, []);

  const getPlayerList = async () => {
    setLoadingPlayers(true);
    try {
      const results = await getPlayers();
      setPlayerData(results.results);
      setFilteredPlayerData(results.results);
    } catch (error) {
      message.error(error);
    } finally {
      setLoadingPlayers(false);
    }
  };

  const displayPlayers = () => {
    if (filteredPlayerData) {
      return (
        <PlayerDisplay
          dark
          view={view}
          playerData={filteredPlayerData}
          // selectedList={selectedPlayersArr}
          selectable={false}
          draggable={false}
        />
      );
    }
  };

  const filterPlayerData = (type, value) => {
    let result;
    setFilteredPlayerData([]);
    
    if (type === 'reset') {
      setFilteredPlayerData(playerData);
      return;
    }

    if (type === 'position') {
      result = playerData.filter(filterWithPosition);
      function filterWithPosition(player) {
        return player.player.position === value
      }
    }

    if (type === 'name') {
      result = playerData.filter(filterWithPosition);
      function filterWithPosition(player) {
        return player.player.name.toLowerCase() === value
      }
    }
    setFilteredPlayerData(result);
  }

  const handleTextFilter = (e) => {
    setSearchName(e.target.value);
    if (e.target.value !== '') {
      filterPlayerData('name', e.target.value);
    } else {
      filterPlayerData('reset');
    }
  }

  const handleSearchReset = () => {
    setSearchName(null);
    filterPlayerData('reset');
  }
  
  return (
  <div>
    <div className="player-selection-header">
      <p className="title">Player Selection</p>
    </div>
    <div className="bg-secondary-gray-2 p-4">
      <div className="search-container flex items-center">
        <Input
          className="white-search-input h-12"
          placeholder="Search"
          onChange={handleTextFilter}
          value={searchName}
          prefix={<AiOutlineSearch />}
        />
        <Button
          className="ml-4 brand-outline-btn bg-transparent h-11 rounded-none"
          onClick={() => handleSearchReset()}
        >
          Reset
        </Button>
      </div>
      <div className="player-positions-filters">
        <div className="flex items-center justify-between mt-6">
          <Button
            className="bg-white h-10 border-0 px-4 py-2"
            onClick={() => filterPlayerData('reset')}
          >
            ALL
          </Button>
          <Button
            className="bg-white h-10 border-0 px-4 py-2"
            onClick={() => filterPlayerData('position', 'Goalkeeper')}
          >
            GK
          </Button>
          <Button
            className="bg-white h-10 border-0 px-4 py-2"
            onClick={() => filterPlayerData('position', 'Defender')}
          >
            DEF
          </Button>
          <Button
            className="bg-white h-10 border-0 px-4 py-2"
            onClick={() => filterPlayerData('position', 'Midfielder')}
          >
            MID
          </Button>
          <Button
            className="bg-white h-10 border-0 px-4 py-2"
            onClick={() => filterPlayerData('position', 'Attacker')}
          >
            FWD
          </Button>
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
        " player-list-container  w-full  " +
        // (floatCard === "middle"
        //   ? "mid-position "
        //   : floatCard === "low"
        //   ? "low-position "
        //   : "") +
        (currentSelection !== null ? "absolute right-0 " : "")
      }
    >
      {displayPlayers()}
    </div>
  </div>
  );
}

export default SubTeamSideBar;
