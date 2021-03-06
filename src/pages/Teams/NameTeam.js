import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Form, Input } from "antd";
import { Link, useHistory } from "react-router-dom";
import { CreateTeamContext } from "../../store/CreateTeamContext";
import DashboardLayout from "../../components/common/Layout";
import PitchBg from "../../assets/img/static/pitch-bg.png";

const NameTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [leagueId, setLeagueId] = React.useState(null);

  const { view } = useContext(CreateTeamContext);
  const history = useHistory();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let league_Id = urlParams.get('leagueId');
    setLeagueId(league_Id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(view, "view");
  const updateTeamName = () => {
    localStorage.setItem("TEF_NAME", teamName);
    if (view === "list") {
      history.replace(`/teams/list-save-team?leagueId=${leagueId}`);
    } else {
      history.replace(`/teams/pitch-confirm-team?leagueId=${leagueId}`);
    }
  };

  return (
    <DashboardLayout>
      <div className=" pt-12 w-full">
        <Row align="center">
          <Col lg={22}>
            <div className="teams-heading flex justify-between items-center pb-4 border-b-2 border-primary-brand">
              <h2 className="f-oswald text-4xl font-medium">Name Your Team</h2>
              <Link
                className="bg-tw-green rounded-none h-12 font-medium px-6 inline-flex items-center hover:text-white"
                disabled={teamName === ""}
                onClick={(e) => {
                  e.preventDefault();
                  updateTeamName();
                }}
              >
                Next
              </Link>
            </div>

            <div className="team-content pb-8 mt-8">
              <Row>
                <Col lg={24}>
                  <div
                    className="w-full bg-no-repeat bg-cover h-auto py-2"
                    style={{ backgroundImage: `url(${PitchBg})` }}
                  >
                    <div className="py-16">
                      {/* {pitchView === "list" ? <ListView /> : <PitchView />} */}
                      <div className=" w-3/5 mx-auto ">
                        <div className="name-card h-full px-12 py-24 text-center text-white">
                          <h3 className="font-bold text-3xl text-white mb-6">
                            Choose A Team Name
                          </h3>
                          <p className="mb-0">
                            You can not change your team name after the first
                            matchday you play in
                          </p>
                          <Form className="w-3/5 mx-auto mt-10">
                            <Form.Item
                              name="team_name"
                              rules={[
                                {
                                  required: true,
                                  message: "Maximum of 25 characters",
                                },
                              ]}
                            >
                              <Input
                                className="team-name-input"
                                placeholder="Enter Team Name"
                                onChange={({ target: { value } }) => {
                                  setTeamName(value);
                                }}
                                value={teamName}
                              />
                            </Form.Item>
                          </Form>
                        </div>
                      </div>
                    </div>
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

export default NameTeam;
