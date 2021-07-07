import React from "react";
import DashboardLayout from "../../components/common/Layout/index";
import { Row, Col, Button } from "antd";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import "./Gameweek.scss";

const GameweekHistory = () => {
  return (
    <DashboardLayout>
      <div className="gameweek-history-container">
        <Row justify="center">
          <Col lg={22}>
            <Row>
              <Col lg={17}>
                <div className="team-details">
                  <div className="title">
                    <p>Pick Team - KingsMen City</p>
                  </div>
                  <div className="navigation">
                    <Row justify="center">
                      <Col lg={6}>
                        <Button className="btn-prev">
                          <CgArrowLongLeft /> Previous{" "}
                        </Button>
                      </Col>
                      <Col lg={10}>
                        <h3 className="game-date">Gameweek 24</h3>
                      </Col>
                      <Col lg={6}>
                        <Button className="btn-next">
                          Next <CgArrowLongRight />
                        </Button>
                      </Col>
                    </Row>
                  </div>
                  <div className="game-stats">
                    <Row gutter={12}>
                      <Col lg={8}>
                        <div className="stats-card points">
                          <p>Final Points</p>
                          <p className="game-point">52</p>
                        </div>
                      </Col>
                      <Col lg={8}>
                        <div className="stats-card">
                          <div className="average-points">
                            <div className="text">Average Pts</div>
                            <div className="value">61</div>
                          </div>
                          <div className="average-points">
                            <div className="text">Average Pts</div>
                            <div className="value red">161</div>
                          </div>
                        </div>
                      </Col>
                      <Col lg={8}>
                        <div className="stats-card gw-rank">
                          <div className="average-points">
                            <div className="text">GW Rank</div>
                            <div className="value">3,695,470</div>
                          </div>
                          <div className="average-points">
                            <div className="text">GW Rank</div>
                            <div className="value red">0</div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="leaderboard">
                      <Button>
                        Kings of Gameweek{" "}
                        <CgArrowLongRight style={{ color: "#ff4b26" }} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="team-view-container">
                  <div className="stadium-bg">
                    <Row justify="center">
                      <Col lg={6}>
                        <Button className="view-btn">Pitch View</Button>
                      </Col>
                      <Col lg={6}>
                        <Button className="view-btn active">List View</Button>
                      </Col>
                    </Row>
                    <div className="field-bg"></div>
                  </div>
                </div>
              </Col>
              <Col lg={6}></Col>
            </Row>
          </Col>
        </Row>
      </div>
    </DashboardLayout>
  );
};

export default GameweekHistory;
