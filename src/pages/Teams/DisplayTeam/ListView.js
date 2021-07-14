import React, { useContext } from "react";
import { TeamContext } from "../../../store/TeamContext";
import { Row, Col, Popover } from "antd";
import Jersey from "../../../assets/img/jersey.svg";
import InfoCircleIcon from "../../../assets/img/icons/info-circle-green.svg";
import "./DisplayTeam.scss";

const ListView = () => {
  const { teamPlayers } = useContext(TeamContext);

  const showPopUp = (playerDetail) => {
    return (
      <div>
        <p>{playerDetail.name}</p>
      </div>
    );
  };
  const displayGkPlayers = () => {
    return teamPlayers.map((players) => {
      const { player } = players;
      if (players.wing === "goalkeeper" && players.is_substitute === 0) {
        return (
          <Row
            className="py-2 px-6 justify-between player-row"
            key={players.player_id}
          >
            <Col lg={10}>
              <div className="flex mr-6">
                <Popover
                  content={() => showPopUp(player)}
                  title={player.player_name}
                >
                  <img src={InfoCircleIcon} alt="info icon" />
                </Popover>

                <img src={Jersey} className="ml-6" alt="jersey icon" />
                <div className="border-0 text-black rounded-none p-0 font-medium ml-4">
                  <p className="font-light">{player.player_name}</p>
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
    return teamPlayers.map((players) => {
      const { player } = players;
      if (players.wing === "defender" && players.is_substitute === 0) {
        return (
          <Row
            className="py-2 px-6 justify-between player-row"
            key={players.player_id}
          >
            <Col lg={10}>
              <div className="flex mr-6">
                <Popover
                  content={() => showPopUp(players)}
                  title={player.player_name}
                >
                  <img src={InfoCircleIcon} alt="info icon" />
                </Popover>

                <img src={Jersey} className="ml-6" alt="jersey icon" />
                <div className="border-0 text-black rounded-none p-0 font-medium ml-4">
                  <p className="font-light">{player.player_name}</p>
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
    return teamPlayers.map((players) => {
      const { player } = players;
      if (players.wing === "midfielder" && players.is_substitute === 0) {
        return (
          <Row
            className="py-2 px-6 justify-between player-row"
            key={players.player_id}
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
                  <p className="font-light">{player.player_name}</p>
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
    return teamPlayers.map((players) => {
      const { player } = players;
      if (players.wing === "attacker" && players.is_substitute === 0) {
        return (
          <Row
            className="py-2 px-6 justify-between player-row"
            key={players.player_id}
          >
            <Col lg={10}>
              <div className="flex mr-6">
                <Popover
                  content={() => showPopUp(players)}
                  title={player.player_name}
                >
                  <img src={InfoCircleIcon} alt="info icon" />
                </Popover>

                <img src={Jersey} className="ml-6" alt="jersey icon" />
                <div className="border-0 text-black rounded-none p-0 font-medium ml-4">
                  <p className="font-light">{player.player_name}</p>
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
    return teamPlayers.map((players) => {
      if (players.is_substitute === 1) {
        return (
          <Row
            className="py-2 px-6 justify-between player-row"
            key={players.player_name}
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
        <div className="players text-regular">{displayGkPlayers()}</div>
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
        <div className="players text-regular">{displayDefenders()}</div>
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
        <div className="players text-regular">{displayMidfield()}</div>
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
        <div className="players text-regular">{displayForwards()}</div>
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
  );
};

export default ListView;
