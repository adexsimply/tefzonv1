import React, { useContext } from 'react';
import DashboardLayout from '../../components/common/DashboardLayout';
import { Button, Row, Col } from "antd";
import GameWeekDetails from '../../components/GameWeekDetails';
import Info from '../../components/Info';
import SubTeamSideBar from '../../components/SubTeamSideBar';
import { CreateTeamContext } from '../../store/CreateTeamContext';
import ListView from '../Teams/ListView';
import PitchView from '../Teams/PitchView';
import { editTeam } from '../../helpers/api';
import { useHistory } from 'react-router-dom';

function SubAndTransfer() {
	const [status, setStatus] = React.useState({ type: "", msg: "" });
  const [loading, setLoading] = React.useState(false);
  
  const {
    // currentSelection,
    selectedDef,
    selectedFwd,
    selectedGoalKeepers,
    selectedMid,
    // statusMessage,
    view,
    changeView,
    // updateGoalKeeper,
    // updateDefenders,
    // updateMidfielder,
    // updateForwards,
  } = useContext(CreateTeamContext);

  const history = useHistory();
  
  const handleEditTeam = async () => {
    console.log('teetete')
    setLoading(true);
    const team = [
      ...selectedDef,
      ...selectedFwd,
      ...selectedGoalKeepers,
      ...selectedMid,
    ];

    const payload = [];
    team.forEach((item) => {
      payload.push({
        id: item.id,
        wing: item.position.toLowerCase(),
        is_susbtitute: item.is_substitute === true ? 1 : 0,
        is_captain: item.is_captain === true ? 1 : 0,
        placement: null,
      });
    });
    console.log(payload);
    try {
      const results = await editTeam({
        squad_selection: payload,
      });
      console.log(results);
      if (results) {
        setStatus({
          type: "success",
          msg: results.result.msg,
        });
        setLoading(false);
        history.replace("/teams");
      }
    } catch (error) {
      console.log(error);
      setStatus({
        type: "error",
        msg: error,
      });
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <Row justify="center">
        <Col lg={22}>
          <Row gutter={24} className="display-team-container">
            <Col lg={17}>
              <div className="team-header">
                <p className="title">Substution and Transfer</p>
              </div>
              <div className="page-info">
                <p>To change your captain use the menu which appears when clicking on a player's shirt.</p>
              </div>
              <GameWeekDetails gameWeek={'30'} date={'Sat 6 Mar 12:00'} />
              {/* <Info text={`To change your captain use the menu which appears when clicking on a player's shirt.`} /> */}
              <div className={'mt-6'}>
                <Col className={'w-full  pl-0 pr-0'}>
                  <Row gutter={[20, 20]} justify={'space-between'} wrap={true}>
                    <Col span={8}>
                      <Button 
                        className={'w-full h-14 border-transparent bg-gray-300 text-gray-700 text-base'}
                        onClick={() => changeView("pitch")}>
                        Auto Pick
                      </Button>
                    </Col>
                    <Col span={8}>
                      <Button 
                        className={'w-full h-14 border-transparent bg-gray-300 text-gray-700 text-base'}
                        onClick={() => changeView("pitch")}>
                        Reset
                      </Button>
                    </Col>
                    <Col span={8}>
                      <Button 
                        className={'w-full h-14 border-transparent bg-gray-300 text-gray-700 text-base'}
                        onClick={() => changeView("pitch")}>
                        Play Wildcard
                      </Button>
                    </Col>
                  </Row>
                  <Row gutter={[20, 20]}>
                    <Col span={8}>
                      <div className={'flex flex-col items-center border-gray-300 border-t-2 border-b-2 pt-2 pb-2'}>
                        <p>Free Transfer</p>
                        <p>2</p>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className={'flex flex-col items-center border-gray-300 border-t-2 border-b-2 pt-2 pb-2'}>
                        <p>Cost</p>
                        <p>0pts</p>
                      </div>
                    </Col>
                    <Col span={8}>
                      <div className={'flex flex-col items-center border-gray-300 border-t-2 border-b-2 pt-2 pb-2'}>
                        <p>Money Remaining</p>
                        <p>13.7</p>
                      </div>
                    </Col>
                </Row>
                </Col>
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
                  {view === "list" ? (
                    <ListView />
                  ) : (
                    <PitchView />
                  )}
                </div>
              </div>
              <div className={'w-full h-32 bg-secondary-gray flex flex-col items-center justify-center my-5'}>
                <div
                  className={'h-12 w-72 bg-gray-300 flex items-center justify-center rounded-md cursor-pointer text-base text-gray-700'}
                  onClick={() => handleEditTeam()}
                >
                  {!loading && 'Save'}
                  {loading &&  'Loading'}
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <SubTeamSideBar />
            </Col>
          </Row>
        </Col>
      </Row>
    </DashboardLayout>
  );
}

export default SubAndTransfer;
