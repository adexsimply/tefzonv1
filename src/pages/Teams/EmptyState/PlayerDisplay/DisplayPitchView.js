import React, { useContext } from "react";
import { Row, Col, Popover } from "antd";
import { formatString } from "../../../../helpers/utils";
import { CreateTeamContext } from "../../../../store/CreateTeamContext";
import styled from "styled-components";
import InfoCircleIcon from "../../../../assets/img/icons/info-circle-green.svg";
import TeamJersey from "../../../../assets/img/team-jersey.svg";

const DisplayPitchView = ({ playerData, draggable, completePlayerList }) => {
  const { dragStatus, updateDragStatus, updateDraggedPlayer } =
    useContext(CreateTeamContext);

  const handleDragPlayer = (ev, player) => {
    // ev.preventDefault();
    updateDraggedPlayer(player);

    updateDragStatus("dragging");
  };
  const showPopUp = (playerDetails) => {
    const { player } = playerDetails;
    return (
      <div>
        <Row justify="center" className="player-photo">
          <Col lg={12}>
            <img src={player.photo} alt={player.name} />
          </Col>
        </Row>
        <Row className="player-detail-info-row">
          <Col lg={8}>
            <p>
              <strong>First Name</strong>
            </p>
          </Col>
          <Col lg={16}>
            <p>{player.firstname}</p>
          </Col>
        </Row>
        <Row className="player-detail-info-row">
          <Col lg={8}>
            <p>
              <strong>Last Name</strong>
            </p>
          </Col>
          <Col lg={16}>
            <p>{player.lastname}</p>
          </Col>
        </Row>
        <Row className="player-detail-info-row">
          <Col lg={8}>
            <p>
              <strong>Known Name</strong>
            </p>
          </Col>
          <Col lg={16}>
            <p>{player.name}</p>
          </Col>
        </Row>
        <Row className="player-detail-info-row">
          <Col lg={8}>
            <p>
              <strong>Height</strong>
            </p>
          </Col>
          <Col lg={16}>
            <p>{player.height}</p>
          </Col>
        </Row>
        <Row className="player-detail-info-row">
          <Col lg={8}>
            <p>
              <strong>Nationality</strong>
            </p>
          </Col>
          <Col lg={16}>
            <p>{player.nationality}</p>
          </Col>
        </Row>
        <Row className="player-detail-info-row">
          <Col lg={8}>
            <p>
              <strong>Position</strong>
            </p>
          </Col>
          <Col lg={16}>
            <p>{player.position}</p>
          </Col>
        </Row>
      </div>
    );
  };

  const showDraggablePlayers = () => {
    return (
      <StyledPitchPlayer>
        {playerData.map((players) => {
          const { player } = players;

          const foundPlayerMatch = completePlayerList.find(
            (item) => item.id === player.id
          );
          if (foundPlayerMatch) {
            return null;
          }
          return (
            <div
              className={
                "player-container  draggable " +
                (dragStatus === "dragging" ? "player-drag" : "")
              }
              key={player.id}
              onDragStart={(ev) => handleDragPlayer(ev, player)}
              draggable
            >
              <div className="pitch__player-wrapper">
                <div className="info-icon">
                  <Popover
                    content={() => showPopUp(players)}
                    overlayClassName="player-details-popup"
                    title={player.name}
                  >
                    <img src={InfoCircleIcon} alt="info icon" />
                  </Popover>
                </div>
                <div
                  className="jersey-icon"
                  style={{ backgroundImage: `url(${TeamJersey})` }}
                ></div>
              </div>
              <div className="player-tag" title={player.name}>
                {formatString(player.name, 12)}
              </div>
              <div className="points-tag">{player.age}</div>
              <div className="points-tag position">{player.position}</div>
            </div>
          );
        })}
      </StyledPitchPlayer>
    );
  };

  const showPlayers = () => {
    return (
      <StyledPitchPlayer>
        {playerData.map((players) => {
          const { player } = players;

          return (
            <div className="player-container " key={player.id}>
              <div className="pitch__player-wrapper">
                <div className="info-icon">
                  <Popover
                    content={() => showPopUp(players)}
                    overlayClassName="player-details-popup"
                    title={player.name}
                  >
                    <img src={InfoCircleIcon} alt="info icon" />
                  </Popover>
                </div>
                <div
                  className="jersey-icon"
                  style={{ backgroundImage: `url(${TeamJersey})` }}
                ></div>
              </div>
              <div className="player-tag" title={player.name}>
                {formatString(player.name, 12)}
              </div>
              <div className="points-tag">{player.age}</div>
              <div className="points-tag position">{player.position}</div>
            </div>
          );
        })}
      </StyledPitchPlayer>
    );
  };

  return (
    <div className="display-players-pitch-view">
      {draggable ? showDraggablePlayers() : showPlayers()}
    </div>
  );
};

export var StyledPitchPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-width: 70px;
  height: 80px;
  padding: 2rem 0;
  .jersey-icon {
    width: 50px;
    height: 45px;
  }
  .player-container {
    width: 30%;
    margin-right: 10px;
    margin-bottom: 1rem;
  }
  .player-container.draggable {
    width: 30%;
    margin-right: 10px;
    margin-bottom: 1rem;
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }
  .pitch__player-wrapper {
    display: flex;
    align-items: flex-start;
  }
  .pitch__player-wrapper .info-icon {
    margin-right: 10px;
    display: inline-block;
  }
  .player-container .player-tag {
    background: #33175a;
    border-radius: 2px;
    color: #fff;
    font-size: 10px;
    padding: 6px 0;
    text-align: center;
    font-weight: 600;
  }

  .player-container .points-tag {
    font-size: 10px;
    font-weight: 600;
    background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(255, 255, 255, 0.51) 0%,
        rgba(255, 255, 255, 0.37) 100%
      ),
      #33175a;
    text-align: center;
    color: #fff;
  }
  .player-container .points-tag.position {
    background: #33175a;
    border-radius: 2px;
    color: #fff;
    font-size: 10px;
    padding: 6px 0;
    text-align: center;
    font-weight: 600;
  }
`;

export default DisplayPitchView;
