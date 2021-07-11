import React, { useContext } from "react";
import { TeamContext } from "../../store/TeamContext";
import TeamFlag from "../../assets/img/static/team-flag.svg";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { CgArrowLongRight } from "react-icons/cg";
import "./ViewTeam.scss";

const ViewTeamSidebar = () => {
  const { teamDetails } = useContext(TeamContext);
  return (
    <div className="list-side-container">
      {/* <p className="player-name">Adebayo Nwachukwu</p> */}
      <div className="player-info">
        <Row className="team-name" justify="between">
          <Col>
            <p>{teamDetails?.team_name}</p>
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
            <p>Overall Points:</p>
          </Col>
          <Col>
            <p className="value">179</p>
          </Col>
        </Row>
        <Row className="points">
          <Col>
            <p>Overall Rank:</p>
          </Col>
          <Col>
            <p className="value">7,593,179</p>
          </Col>
        </Row>
        <Row className="points">
          <Col>
            <p>Total Players:</p>
          </Col>
          <Col>
            <p className="value">8,793,179</p>
          </Col>
        </Row>
        <Row className="points">
          <Col>
            <p>Gameweek Points:</p>
          </Col>
          <Col>
            <p className="value">51</p>
          </Col>
        </Row>
        <Row className="points points-btn">
          <Col lg={24}>
            <Link className="" to="/teams/gameweek-history">
              View Gameweek history <CgArrowLongRight />
            </Link>
          </Col>
        </Row>
        <div className="band"></div>
      </div>
      <div className="player-info mt-2rem">
        <Row className="team-name">
          <Col>
            <p>Admin</p>
          </Col>
        </Row>

        <Row className="points points-btn">
          <Col lg={24}>
            <Link to="/teams">
              Team details{" "}
              <CgArrowLongRight
                style={{
                  color: "#8139E6",
                  fontSize: "1.5rem",
                  marginLeft: "1rem",
                }}
              />
            </Link>
          </Col>
        </Row>
        <Row className="points points-btn">
          <Col lg={24}>
            <Link to="/profile">
              User profile{" "}
              <CgArrowLongRight
                style={{
                  color: "#8139E6",
                  fontSize: "1.5rem",
                  marginLeft: "1rem",
                }}
              />
            </Link>
          </Col>
        </Row>
        <div className="band"></div>
      </div>
    </div>
  );
};

export default ViewTeamSidebar;
