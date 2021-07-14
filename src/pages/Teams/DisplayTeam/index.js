import React, { useContext } from "react";
import DashboardLayout from "../../../components/common/DashboardLayout";
import DisplayPitchView from "./PitchView";
import DisplayListView from "./ListView";
import { getView } from "../../../store/localStorage";
import ViewTeamSidebar from "../../../components/ViewTeamSidebar";
import { CreateTeamContext } from "../../../store/CreateTeamContext";
import { Button, Row, Col } from "antd";

const DisplayTeam = ({ teamDetails }) => {
  const { changeView } = useContext(CreateTeamContext);
  const view = getView();
  return (
    <DashboardLayout>
      <Row justify="center">
        <Col lg={22}>
          <Row gutter={24} className="display-team-container">
            <Col lg={18}>
              <div className="team-header">
                <p className="title">Pick Team - {teamDetails?.team_name}</p>
              </div>
              <div className="gameweek-display-container">
                <div className="game-display">
                  <p>
                    <span className="white">Gameweek 27:</span>
                    <span className="green">Sat 6 Mar 12:00</span>
                  </p>
                </div>
                <div className="green-band"></div>
              </div>
              <div className="info">
                <p>
                  To change your captain use the menu which appears when
                  clicking on a player's shirt.
                </p>
              </div>

              <div className="stadium-backdrop">
                <Row align="center" className="view-btn-container">
                  <Col lg={8}>
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
                <div className="team-content-container">
                  {view === "pitch" ? (
                    <DisplayPitchView />
                  ) : (
                    <DisplayListView />
                  )}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <ViewTeamSidebar />
            </Col>
          </Row>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default DisplayTeam;
