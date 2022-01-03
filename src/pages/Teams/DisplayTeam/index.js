import React, { useContext } from "react";
import { Button, Row, Col } from "antd";
import { AiOutlineLoading } from "react-icons/ai";
import DashboardLayout from "../../../components/common/DashboardLayout";
import DisplayPitchView from "./PitchView";
import DisplayListView from "./ListView";
// import ViewTeamSidebar from "../../../components/ViewTeamSidebar";
import { CreateTeamContext } from "../../../store/CreateTeamContext";
import { TeamContext } from "../../../store/TeamContext";
import { Link, useHistory } from "react-router-dom";
import { longDate } from "../../../helpers/utils";

const DisplayTeam = ({ teamInfo }) => {
  const [teamId, setTeamId] = React.useState(null)
  const { changeView, view } = useContext(CreateTeamContext);
  const { displayPlayers, getTeamData, loadingTeam, teamDetails } = useContext(TeamContext);
  const [leagueId, setLeagueId] = React.useState(null);

  const history = useHistory();

  React.useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const teamId = urlParams.get('teamId');
    const league_Id = urlParams.get('leagueId');
    setLeagueId(league_Id)

    console.log(leagueId);

    setTeamId(teamId)

    if(teamId) {
      getTeamData(teamId);
    } else {
      history.replace('/teams')
    }
    // eslint-disable-next-line
  }, []);

  if(loadingTeam) {
    return (
      <div className={'flex items-center justify-center w-screen h-screen'}>
        <AiOutlineLoading size={40} color={'#8139e6'} className={'animate-spin'} />
      </div>
    )
  }
  
  return (
    <DashboardLayout>
      <Row justify="center">
        <Col lg={22}>
          <Row gutter={24} className="display-team-container">
            <Col lg={18}>
              <div className="team-header">
                <p className="title">{teamDetails?.team_name}</p>
              </div>
              <div className="gameweek-display-container">
                <div className="game-display">
                  <p>
                    {/* <span className="white">Gameweek 27:</span> */}
                    <span className="green">{ longDate(new Date()) }</span>
                  </p>
                </div>
                <div className="green-band"></div>
              </div>
              {/* <div className="info">
                <p>
                  To change your captain use the menu which appears when
                  clicking on a player's shirt.
                </p>
              </div> */}

              <div className="stadium-backdrop mt-10">
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
                {/* <div className="team-content-container"> */}
                  {view === "pitch" ? (
                    <DisplayPitchView />
                  ) : (
                    <DisplayListView />
                  )}
                {/* </div> */}
              </div>
              <div className={'sub-display-container w-full h-32 bg-secondary-gray flex flex-col justify-end mb-5'}>
                <div className={'sub-display-inner w-full h-20 bg-gray-300'}>
                  <div className="player-row flex flex-row justify-center -mt-10">
                    <div className="player">
                      {displayPlayers("gk_2", "goalkeeper")}
                      <p className="sub-tag">GK</p>
                    </div>
                    <div className="player">
                      {displayPlayers("def_4", "defender")}
                      <p className="sub-tag">1</p>
                    </div>
                    <div className="player">
                      {displayPlayers("mid_5", "midfielder")}
                      <p className="sub-tag">2</p>
                    </div>
                    <div className="player">
                      {displayPlayers("fwd_4", "attacker")}
                      <p className="sub-tag">3</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              {/* <ViewTeamSidebar /> */}
              <Link to={`/teams/subAndTransfer?teamId=${teamId}&leagueId=25}`}>
                <Button className='w-full mx-4 h-14 bg-primary-brand-darker rounded'>
                  <p className='text-white font-bold'>Make Substitution</p>
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </DashboardLayout>
  );
};

export default DisplayTeam;
