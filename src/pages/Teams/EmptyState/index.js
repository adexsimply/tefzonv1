import React, { useContext, useEffect, useState } from "react";
import { Button, Row, Col, Input, Select, message } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { saveTeam } from "../../../store/localStorage";
import { CreateTeamContext } from "../../../store/CreateTeamContext";
import { useHistory } from "react-router-dom";
import { getPlayers } from "../../../helpers/api";
import PlayerDisplay from "./PlayerDisplay";
import DashboardLayout from "../../../components/common/DashboardLayout";
// import StadiumBg from "../../../assets/img/backdrop.svg";
import ListView from "../ListView";
import PitchView from "../PitchView";
import "../Teams.scss";
import "./EmptyState.scss";
import { playersEmptyList } from "../../../helpers/staticData";

const { Option } = Select;

const DefaultTeam = () => {
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
  } = useContext(CreateTeamContext);

  const history = useHistory();
  const selectedPlayersArr = [
    ...selectedGoalKeepers,
    ...selectedDef,
    ...selectedFwd,
    ...selectedMid,
  ];

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
      setFilteredPlayerData(results.results);
    } catch (error) {
      message.error(error);
    } finally {
      setLoadingPlayers(false);
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

  const randomPlayer = (data) => {
    let random = Math.floor(Math.random() * data.length);
    return data[random];
  }

  const autoCompleteTeam = () => {
    let goalkeepers = playerData.filter((player) => {
      return player.player.position === 'Goalkeeper'
    });
    console.log(goalkeepers);

    let defenders = playerData.filter((player) => {
      return player.player.position === 'Defender'
    });
    console.log(defenders);

    let midfielders = playerData.filter((player) => {
      return player.player.position === 'Midfielder'
    });
    console.log(midfielders);

    let forwards = playerData.filter((player) => {
      return player.player.position === 'Attacker'
    });
    console.log(forwards);

    for (let i = 0; i < playersEmptyList.length; i++) {
      let player;
      let indexedEmptyList = playersEmptyList[i];
      switch (indexedEmptyList.position) {
        case 'goalkeeper':
          player = randomPlayer(goalkeepers);
          updateGoalKeeper({ ...player.player, ...indexedEmptyList });
          console.log({ ...player.player, ...indexedEmptyList })
          break;
        case 'defender':
          player = randomPlayer(defenders);
          updateDefenders({ ...player.player, ...indexedEmptyList });
          console.log({ ...player.player, ...indexedEmptyList })
          break;
        case 'midfielder':
          player = randomPlayer(midfielders)
          updateMidfielder({ ...player.player, ...indexedEmptyList });
          console.log({ ...player.player, ...indexedEmptyList })
          break;
        case 'attacker':
          player = randomPlayer(forwards)
          updateForwards({ ...player.player, ...indexedEmptyList });
          console.log({ ...player.player, ...indexedEmptyList })
          break;
        default:
          break;
      }
    }

    // let selectedPlayers = playersEmptyList.map((item, index) => {
    //   let player;
    //   switch (item.position) {
    //     case 'goalkeeper':
    //       player = randomPlayer(goalkeepers)
    //       break;
    //     case 'defender':
    //       player = randomPlayer(defenders)
    //       break;
    //     case 'midfielder':
    //       player = randomPlayer(midfielders)
    //       break;
    //     case 'attacker':
    //       player = randomPlayer(forwards)
    //       break;
    //     default:
    //       break;
    //   }
    //   return (

    //   )
    // })
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
            return (
              <PlayerDisplay
                view={view}
                playerData={filteredPlayerData}
                // selectedList={selectedPlayersArr}
                selectable={false}
                draggable={false}
              />
            );
          } else {
            const filteredPlayers = playerData.filter(
              (playerInfo) =>
                playerInfo.player.position.toLowerCase() === currentSelection
            );
            if (filteredPlayers) {
              return (
                <PlayerDisplay
                  view={view}
                  playerData={filteredPlayerData}
                  selectedList={selectedPlayersArr}
                  selectable={true}
                  draggable={true}
                />
              );
            }
          }
        }
      }
    }
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
      <div className="empty-teams-container">
        <Row align="center">
          <Col lg={22}>
            <div className="teams-heading">
              <h2>Squad Selection</h2>
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
                <Button
                  className="  font-medium text-base green-outline-btn bg-transparent mr-8 h-12 rounded-sm"
                  onClick={() => autoCompleteTeam()}
                >
                  Auto Complete
                </Button>
                <p className="text-white">Clear team</p>
              </div>
            </div>
            <div className="team-content pb-8">
              <Row gutter={20}>
                <Col lg={17}>
                  <div
                    className="stadium-backdrop"
                    // style={{ backgroundImage: `url(${StadiumBg})` }}
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
                      "bg-primary-brand  player-list-container  w-full  " +
                      (floatCard === "middle"
                        ? "mid-position "
                        : floatCard === "low"
                        ? "low-position "
                        : "") +
                      (currentSelection !== null ? "absolute right-0 " : "")
                    }
                  >
                    {displayPlayers()}
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

export default DefaultTeam;
