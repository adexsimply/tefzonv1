import React, { useContext, useEffect, useState } from "react";
import { Button, Row, Col, Input, Select, message } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { saveTeam } from "../../../store/localStorage";
import { CreateTeamContext } from "../../../store/CreateTeamContext";
import { useHistory } from "react-router-dom";
import { getPlayers } from "../../../helpers/api";
import PlayerDisplay from "./PlayerDisplay";
import DashboardLayout from "../../../components/common/Layout";
import StadiumBg from "../../../assets/img/backdrop.svg";
import ListView from "../ListView";
import PitchView from "../PitchView";
import "../Teams.scss";
import "./EmptyState.scss";

const { Option } = Select;

const DefaultTeam = () => {
  const [floatCard, setFloatCard] = useState("top");
  const [loadingPlayers, setLoadingPlayers] = useState(false);
  const [playerData, setPlayerData] = useState(null);

  const {
    currentSelection,
    resetSelectionParams,
    selectedDef,
    selectedFwd,
    selectedGoalKeepers,
    selectedMid,
    statusMessage,
    view,
    changeView,
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
    } catch (error) {
      message.error(error);
    } finally {
      setLoadingPlayers(false);
    }
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
            return (
              <PlayerDisplay
                view={view}
                playerData={playerData}
                selectedList={selectedPlayersArr}
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
                  playerData={filteredPlayers}
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
