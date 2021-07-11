import React, { useContext } from "react";
import { CreateTeamContext } from "../../../store/CreateTeamContext";
import { Row, Col, Button, Popover } from "antd";

import DashboardLayout from "../../../components/common/DashboardLayout";
import Jersey from "../../../assets/img/jersey.svg";
import InfoCircleIcon from "../../../assets/img/icons/info-circle-green.svg";
import "./DisplayTeam.scss";
import ViewTeamSidebar from "../../../components/ViewTeamSidebar";

const PitchView = ({ teamInfo }) => {
  const { changeView, view } = useContext(CreateTeamContext);
  const { teamDetails, players } = teamInfo;
  const showPopUp = (playerDetail) => {
    return (
      <div>
        <p>{playerDetail.name}</p>
      </div>
    );
  };
  console.log(teamInfo, "===");
  const displayGkPlayers = () => {
    return players.map((players) => {
      if (players.wing === "goalkeeper" && players.is_substitute === 0) {
        return (
          <Row
            className="py-2 px-6 justify-between player-row"
            key={players.id}
          >
            <Col lg={10}>
              <div className="flex mr-6">
                <Popover
                  content={() => showPopUp(players)}
                  title={players.name}
                >
                  <img src={InfoCircleIcon} alt="info icon" />
                </Popover>

                <img src={Jersey} className="ml-6" alt="jersey icon" />
                <div className="border-0 text-black rounded-none p-0 font-medium ml-4">
                  <p className="font-light">{players.player_name}</p>
                  <p>
                    <span className="font-semibold inline-block">JUV</span>
                    <span className="font-light uppercase inline-block ml-4">
                      {players.wing}
                    </span>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={12}>
              <Row>
                <Col
                  lg={8}
                  className="border-l border-secondary-gray-2-border"
                ></Col>
                <Col lg={8}></Col>
                <Col lg={8}></Col>
              </Row>
            </Col>
          </Row>
        );
      }
    });
  };
  const displayDefenders = () => {
    return players.map((players) => {
      if (players.wing === "defender" && players.is_substitute === 0) {
        return (
          <Row
            className="py-2 px-6 justify-between player-row"
            key={players.id}
          >
            <Col lg={10}>
              <div className="flex mr-6">
                <Popover
                  content={() => showPopUp(players)}
                  title={players.name}
                >
                  <img src={InfoCircleIcon} alt="info icon" />
                </Popover>

                <img src={Jersey} className="ml-6" alt="jersey icon" />
                <div className="border-0 text-black rounded-none p-0 font-medium ml-4">
                  <p className="font-light">{players.player_name}</p>
                  <p>
                    <span className="font-semibold inline-block">JUV</span>
                    <span className="font-light uppercase inline-block ml-4">
                      {players.wing}
                    </span>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={12}>
              <Row>
                <Col
                  lg={8}
                  className="border-l border-secondary-gray-2-border"
                ></Col>
                <Col lg={8}></Col>
                <Col lg={8}></Col>
              </Row>
            </Col>
          </Row>
        );
      }
    });
  };
  const displayMidfield = () => {
    return players.map((players) => {
      if (players.wing === "midfielder" && players.is_substitute === 0) {
        return (
          <Row
            className="py-2 px-6 justify-between player-row"
            key={players.id}
          >
            <Col lg={10}>
              <div className="flex mr-6">
                <Popover
                  content={() => showPopUp(players)}
                  title={players.name}
                >
                  <img src={InfoCircleIcon} alt="info icon" />
                </Popover>

                <img src={Jersey} className="ml-6" alt="jersey icon" />
                <div className="border-0 text-black rounded-none p-0 font-medium ml-4">
                  <p className="font-light">{players.player_name}</p>
                  <p>
                    <span className="font-semibold inline-block">JUV</span>
                    <span className="font-light uppercase inline-block ml-4">
                      {players.wing}
                    </span>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={12}>
              <Row>
                <Col
                  lg={8}
                  className="border-l border-secondary-gray-2-border"
                ></Col>
                <Col lg={8}></Col>
                <Col lg={8}></Col>
              </Row>
            </Col>
          </Row>
        );
      }
    });
  };
  const displayForwards = () => {
    return players.map((players) => {
      if (players.wing === "attacker" && players.is_substitute === 0) {
        return (
          <Row
            className="py-2 px-6 justify-between player-row"
            key={players.id}
          >
            <Col lg={10}>
              <div className="flex mr-6">
                <Popover
                  content={() => showPopUp(players)}
                  title={players.name}
                >
                  <img src={InfoCircleIcon} alt="info icon" />
                </Popover>

                <img src={Jersey} className="ml-6" alt="jersey icon" />
                <div className="border-0 text-black rounded-none p-0 font-medium ml-4">
                  <p className="font-light">{players.player_name}</p>
                  <p>
                    <span className="font-semibold inline-block">JUV</span>
                    <span className="font-light uppercase inline-block ml-4">
                      {players.wing}
                    </span>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={12}>
              <Row>
                <Col
                  lg={8}
                  className="border-l border-secondary-gray-2-border"
                ></Col>
                <Col lg={8}></Col>
                <Col lg={8}></Col>
              </Row>
            </Col>
          </Row>
        );
      }
    });
  };
  const displaySubs = () => {
    return players.map((players) => {
      if (players.is_substitute === 1) {
        return (
          <Row
            className="py-2 px-6 justify-between player-row"
            key={players.id}
          >
            <Col lg={10}>
              <div className="flex mr-6">
                <Popover
                  content={() => showPopUp(players)}
                  title={players.name}
                >
                  <img src={InfoCircleIcon} alt="info icon" />
                </Popover>

                <img src={Jersey} className="ml-6" alt="jersey icon" />
                <div className="border-0 text-black rounded-none p-0 font-medium ml-4">
                  <p className="font-light">{players.player_name}</p>
                  <p>
                    <span className="font-semibold inline-block">JUV</span>
                    <span className="font-light uppercase inline-block ml-4">
                      {players.wing}
                    </span>
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={12}>
              <Row>
                <Col
                  lg={8}
                  className="border-l border-secondary-gray-2-border"
                ></Col>
                <Col lg={8}></Col>
                <Col lg={8}></Col>
              </Row>
            </Col>
          </Row>
        );
      }
    });
  };

  return (
    <DashboardLayout>
      <div className="list-display-container">
        <Row gutter={24}>
          <Col lg={18}>
            <div>
              <p className="title">Pick Team - {teamDetails.team_name}</p>
            </div>
            <div className="game-display-container">
              <div className="game-display">
                <p>
                  <span className="white">Gameweek 27:</span>
                  <span className="green">Sat 6 Mar 12:00</span>
                </p>
              </div>
              <div className="green-bg"></div>
            </div>
            <div className="info">
              <p>
                To change your captain use the menu which appears when clicking
                on a player's shirt.
              </p>
            </div>
            <div className="players-display-container">
              <div className="stadium-backdrop">
                <Row align="center">
                  <Col lg={6}>
                    <Button
                      className={
                        "view-btn " + (view === "pitch" ? "active-btn" : "")
                      }
                      onClick={() => changeView("pitch")}
                    >
                      Pitch View
                    </Button>
                    <Button
                      className={
                        "view-btn " + (view === "list" ? "active-btn" : "")
                      }
                      onClick={() => changeView("list")}
                    >
                      List View
                    </Button>
                  </Col>
                </Row>
                <div className="list-view">
                  <div className="gk">
                    <div className="heading bg-tw-yellow py-2 px-6 font-bold">
                      <Row className="justify-between">
                        <Col lg={10}>
                          <h3>Goal Keeper</h3>
                        </Col>
                        <Col lg={12}>
                          <Row></Row>
                        </Col>
                      </Row>
                    </div>
                    <div className="players text-regular">
                      {displayGkPlayers()}
                    </div>
                  </div>
                  <div className="defenders">
                    <div className="heading bg-tw-green-light py-2 px-6 font-bold">
                      <Row className="justify-between">
                        <Col lg={10}>
                          <h3>Defenders</h3>
                        </Col>
                        <Col lg={12}>
                          <Row></Row>
                        </Col>
                      </Row>
                    </div>
                    <div className="players text-regular">
                      {displayDefenders()}
                    </div>
                  </div>
                  <div className="midfield">
                    <div className="heading bg-tw-blue py-2 px-6 font-bold">
                      <Row className="justify-between">
                        <Col lg={10}>
                          <h3>Midfielders</h3>
                        </Col>
                        <Col lg={12}>
                          <Row></Row>
                        </Col>
                      </Row>
                    </div>
                    <div className="players text-regular">
                      {displayMidfield()}
                    </div>
                  </div>
                  <div className="forwards">
                    <div className="heading bg-tw-red py-2 px-6 font-bold">
                      <Row className="justify-between">
                        <Col lg={10}>
                          <h3 className="text-white">Forwards</h3>
                        </Col>
                        <Col lg={12}>
                          <Row></Row>
                        </Col>
                      </Row>
                    </div>
                    <div className="players text-regular">
                      {displayForwards()}
                    </div>
                  </div>
                  <div className="substitutes">
                    <div className="heading bg-tw-sky-blue py-2 px-6 font-bold">
                      <Row className="justify-between">
                        <Col lg={10}>
                          <h3 className="">Substitutes</h3>
                        </Col>
                        <Col lg={12}>
                          <Row></Row>
                        </Col>
                      </Row>
                    </div>
                    <div className="players text-regular">{displaySubs()}</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <ViewTeamSidebar />
          </Col>
        </Row>
      </div>
    </DashboardLayout>
  );
};

export default PitchView;
