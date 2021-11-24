import React, { useContext, useState, useEffect } from "react";
import { Button, Row, Col } from "antd";
import { CreateTeamContext } from "../../../store/CreateTeamContext";
import { loadTeam } from "../../../store/localStorage";
import { createTeam, joinLeague } from "../../../helpers/api";
import { useHistory } from "react-router-dom";
import { formatString } from "../../../helpers/utils";
import Stadium from "../../../assets/img/stadium.svg";
import TeamJersey from "../../../assets/img/team-jersey.svg";
import DashboardLayout from "../../../components/common/Layout";
import PitchBg from "../../../assets/img/static/pitch-bg.png";
import styled from "styled-components";
import Alert from "../../../components/common/Alert";
import CaptainIcon from "../../../assets/img/icons/captain.svg";
import { openNotification } from "../../../helpers/notification";
import LoadingModal from "../../../components/LoadingModal";
import { ModalContext } from "../../../store/ModalContext";

const ConfirmTeam = () => {
  const { getTeamName } = useContext(CreateTeamContext);
  const [reqStatus, setReqStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);
  const [leagueId, setLeagueId] = React.useState(null);
  
  const {
    loadingModalIsOpen,
    closeLoadingModal,
    openLoadingModal,
  } = React.useContext(ModalContext);

  const team = loadTeam();
  const teamName = getTeamName();
  const history = useHistory();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let league_Id = urlParams.get('leagueId');
    setLeagueId(league_Id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayPlayer = (placement) => {
    const player = team.find((player) => player.playerPlacement === placement);

    if (player) {
      return (
        <StyledTeamPlayer className=" pitch-player ">
          <div
            className="team-jersey-bg"
            style={{ backgroundImage: `url(${TeamJersey})` }}
          >
            {player.is_captain && (
              <img
                src={CaptainIcon}
                className="captain-tag"
                alt="captain icon"
              />
            )}
          </div>

          <div className="">
            <div className="player-tag" title={player.name}>
              {formatString(player.name, 8)}
            </div>
            <div className="points-tag">{player.age}</div>
          </div>
        </StyledTeamPlayer>
      );
    }
  };

  const handleSaveTeam = async () => {
    openLoadingModal();
    const payload = [];
    team.forEach((item) => {
      payload.push({
        id: item.id,
        wing: item.position.toLowerCase(),
        is_susbtitute: item.is_substitute === true ? 1 : 0,
        is_captain: item.is_captain === true ? 1 : 0,
        placement: item.playerPlacement,
      });
    });
    console.log(payload);
    try {
      const results = await createTeam({
        team_name: teamName,
        squad_selection: payload,
      });
      console.log(results.result);
      if (results) {
        // setReqStatus({
        //   type: "success",
        //   msg: results.result.msg,
        // });
				openNotification({
					title: 'Team Created, proceeding to join league',
					message: 'Your team has been created successfuly, proceeding to join league with team',
					type: 'success'
				})
        // setLoading(false);
        // resetTeam();

        let data = {
          league_id: leagueId,
          team_id: results.result.id,
        }
        console.log(data)
        joinLeagueWithTeam(data)
      }
    } catch (error) {
      openNotification({
        title: 'Error Creating Team',
        message: 'We encountered an error while trying to create your team',
        type: 'error'
      })
      console.log(error);
      setReqStatus({
        type: "error",
        msg: error.message,
      });
      setLoading(false);
    }
  };

  const joinLeagueWithTeam = (data) => {
    joinLeague(data)
    .then((response) => {
      closeLoadingModal();
      console.log(response);
      history.replace(`/leagues/league-info?leagueId=${data.league_id}`);
    })
    .catch((error) => {
      console.log(error);
      closeLoadingModal();
      openNotification({
        title: 'Error Joining League',
        message: 'We encountered an error while trying to join league',
        type: 'error'
      })
    })
  }

  const resetTeam = () => {
    localStorage.removeItem("TEFZON_TEAM");
    localStorage.removeItem("TEF_NAME");
  };

  return (
    <DashboardLayout>
      <StyledTeamPage>
        <Row align="center">
          <Col lg={22}>
            <div className="teams-heading flex justify-between items-center pb-4 border-b-2 border-primary-brand">
              <h2 className="f-oswald text-4xl font-medium">Save Your Team</h2>
              <Button
                onClick={handleSaveTeam}
                className="next-btn"
                disabled={loading}
              >
                {loading ? "Saving your team..." : "Save"}
              </Button>
            </div>

            <div className="team-content pb-8 mt-8">
              <div className="alert-display">
                {reqStatus.type === "success" && (
                  <Alert
                    className="success-alert"
                    type="success"
                    msg={reqStatus.msg || "Successful!"}
                  />
                )}
                {reqStatus.type === "error" && (
                  <Alert
                    className="error-alert"
                    type="error"
                    msg={reqStatus.msg || "something went wrong"}
                  />
                )}
              </div>
              <Row>
                <Col lg={24}>
                  <div
                    className=" stadium-bg "
                    style={{ backgroundImage: `url(${PitchBg})` }}
                  >
                    <div className="mt-16">
                      <div className="name-banner ">
                        <h3 className="">{teamName || "oscar jnr league"}</h3>
                      </div>

                      <div className="pitch-view-wrapper">
                        <div
                          className="field-bg "
                          style={{ backgroundImage: `url(${Stadium})` }}
                        >
                          <div className="players-lane gk-lane">
                            {displayPlayer("gk_1")}
                          </div>

                          <div className="players-lane def-lane">
                            {displayPlayer("def_1")}
                            {displayPlayer("def_2")}
                            {displayPlayer("def_3")}
                          </div>

                          <div className="players-lane mid-lane">
                            {displayPlayer("mid_1")}
                            {displayPlayer("mid_2")}
                            {displayPlayer("mid_3")}
                            {displayPlayer("mid_4")}
                          </div>
                          <div className="players-lane fwd-lane">
                            {displayPlayer("fwd_1")}
                            {displayPlayer("fwd_2")}
                            {displayPlayer("fwd_3")}
                          </div>

                          <div className="subs-display  mt-14 position-container mx-auto">
                            {displayPlayer("gk_2")}
                            {displayPlayer("def_4")}
                            {displayPlayer("mid_5")}
                            {displayPlayer("fwd_4")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </StyledTeamPage>
      <LoadingModal />
    </DashboardLayout>
  );
};

export const StyledTeamPlayer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 120px;
  height: 100px;
  .team-jersey-bg {
    width: 60px;
    height: 50px;
    background-repeat: no-repeat;
    position: relative;
  }
  .captain-tag {
    position: absolute;
    bottom: -3px;
    width: 20px;
    right: 0;
  }
  .player-tag {
    background: #33175a;
    color: #fff;
    font-weight: bold;
    padding: 0 1rem;
    font-size: 12px;
  }
  .points-tag {
    font-size: 10px;
    height: 14px;
    background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(255, 255, 255, 0.51) 0%,
        rgba(255, 255, 255, 0.37) 100%
      ),
      #33175a;
    text-align: center;
    color: #fff;
  }
`;

export const StyledTeamPage = styled.div`
  padding-top: 3rem;
  width: 100%;
  .stadium-bg {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    height: auto;
    padding: 10px 0;
  }
  .name-banner {
    background: rgba(129, 57, 230, 0.5);
    padding: 1rem 0;
    width: 70%;
    margin: auto;
  }
  .name-banner h3 {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  .field-bg {
    width: 100%;
    background-repeat: no-repeat;
    height: 850px;
    background-size: 100%;
    padding: 1rem;
    transform: rotateX(-22deg);
  }
  .players-lane {
    position: relative;
    display: flex;

    margin: 2rem auto 0;
  }
  .gk-lane {
    margin-top: 1rem;
    width: 300px;
    justify-content: center;
  }
  .def-lane {
    margin-top: 3rem;
    width: 450px;
    justify-content: space-evenly;
  }
  .mid-lane {
    margin-top: 4rem;
    width: 550px;
    justify-content: space-evenly;
  }
  .fwd-lane {
    margin-top: 4rem;
    width: 450px;
    justify-content: space-evenly;
  }
  .success-alert {
    background: rgba(74, 174, 117, 0.5);
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #000000;
    margin-bottom: 1rem;
  }
  .subs-display {
    position: relative;
    justify-content: center;
    display: flex;
    width: 550px;
    justify-content: space-evenly;
  }
`;

export default ConfirmTeam;
