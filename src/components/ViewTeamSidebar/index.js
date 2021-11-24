import React, { useContext } from "react";
import { TeamContext } from "../../store/TeamContext";
import TeamFlag from "../../assets/img/static/team-flag.svg";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { CgArrowLongRight } from "react-icons/cg";
import "./ViewTeam.scss";

const ViewTeamSidebar = ({teamName, totalPlayers, rank, points}) => {
  return (
    <div className="list-side-container px-3">
      {/* <p className="player-name">Adebayo Nwachukwu</p> */}
      <div className="player-info px-4">
        <Row className="team-name" justify="space-between" align="middle">
          <Col>
            <p>{teamName}</p>
          </Col>
          <Col lg={3}>
            <img src={TeamFlag} alt="" />
          </Col>
        </Row>
        <Row className="points-ranking-wrapper">
          <p>Points/Rankings</p>
        </Row>
        <Row className="points">
          <Col>
            <p>Your Points:</p>
          </Col>
          <Col>
            <p className="value">{points}</p>
          </Col>
        </Row>
        <Row className="points">
          <Col>
            <p>Your Rank:</p>
          </Col>
          <Col>
            <p className="value">{rank}</p>
          </Col>
        </Row>
        <Row className="points">
          <Col>
            <p>Total Players:</p>
          </Col>
          <Col>
            <p className="value">{totalPlayers}</p>
          </Col>
        </Row>
        <div className="band"></div>
      </div>
    </div>
  );
};

export default ViewTeamSidebar;
