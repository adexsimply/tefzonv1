import React, { useContext } from "react";
import { CreateTeamContext } from "../../../../store/CreateTeamContext";
import { Row, Col, Checkbox, Popover } from "antd";
import { formatString } from "../../../../helpers/utils";
import InfoCircleIcon from "../../../../assets/img/icons/info-circle-green.svg";
import { useDrag } from "react-dnd";

const DisplayListView = ({ playerData, selectable }) => {
  const { handlePlayerSelection, removerPlayerFromList } = useContext(CreateTeamContext);
  const popMe = (playerDetails) => {
    return (
      <div>
        <p>{playerDetails.name}</p>
      </div>
    );
  };
  const saveSelection = (player) => handlePlayerSelection(player);
  const undoPlayerSelection = (player) => removerPlayerFromList(player);

  const handleSelectPlayer = (player, ev) => {
    if (ev.target.checked) {
      saveSelection(player);
    } else {
      undoPlayerSelection(player);
    }
  };

  const Players = ({ id, name, photo, age, position, player, league, index }) => {
    // eslint-disable-next-line
    const [{ isDragging }, dragRef] = useDrag({
      type: player.position,
      item: () => ({ ...player, index }),
      // end: (item, monitor) => {
      //   const dropResult = monitor.getDropResult();
      //   // if (player && dropResult) {
      //   //   // handleDropPlayer(player.position, player);
      //   //   console.log(item);
      //   // }
      // },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
    return (
      <Row
          ref={dragRef}
          className="items-center border-b border-secondary-gray-2 pb-2 pt-2 "
          justify="space-bewteen"
          key={id}
        >
          <Col
            lg={2}
            className="h-12 border-r border-secondary-gray-2 flex items-center"
          >
            <Popover content={() => popMe(player)} title={name}>
              <img src={InfoCircleIcon} alt="info Icon" />
            </Popover>
          </Col>
          <Col
            lg={4}
            className="flex justify-center text-center border-r border-secondary-gray-2-border h-12 items-center"
          >
            <img
              src={photo}
              className="w-10 h-10 rounded-full object-contain"
              alt="player avatar"
            />
          </Col>
          <Col lg={14} className="border-r border-secondary-gray-2-border h-12">
            <div className="pl-2">
              <span className="text-white font-bold text-regular ">
                {formatString(name, 20)}
              </span>
              <p className="text-white">
                <span className="font-bold uppercase inline-block mr-4 text-xsmall">
                  {league}
                </span>
                <span className="font-light uppercase text-xsmall">
                  {position}
                </span>
              </p>
            </div>
          </Col>
          <Col lg={3} className="pl-2 h-12 flex items-center">
            <p className="text-white text-base text-center font-bold">{age}</p>
          </Col>
        </Row>
    )
  }

  const showSelectPlayers = () => {
    return playerData.map((playerInfo) => {
      const { id, name, photo, age, position, team } = playerInfo.player;
      return (
        <Row
          className="items-center border-b border-secondary-gray-2 pb-2 pt-2 "
          justify="space-bewteen"
          key={id}
        >
          <Col
            lg={2}
            className="h-12 border-r border-secondary-gray-2 flex items-center"
          >
            <Popover content={() => popMe(playerInfo.player)} title={name}>
              <img src={InfoCircleIcon} alt="info Icon" />
            </Popover>
          </Col>
          <Col
            lg={4}
            className="flex justify-center text-center border-r border-secondary-gray-2-border h-12 items-center"
          >
            <img
              src={photo}
              className="w-10 h-10 rounded-full object-contain"
              alt="player avatar"
            />
          </Col>
          <Col lg={12} className="border-r border-secondary-gray-2-border h-12">
            <div className="pl-2">
              <span className="text-white font-bold text-regular ">{name}</span>
              <p className="text-white">
                <span className="font-bold uppercase inline-block mr-4 text-xsmall">
                  {formatString(team, 5)}
                </span>
                <span className="font-light uppercase text-xsmall">
                  {position}
                </span>
              </p>
            </div>
          </Col>
          <Col lg={3} className="pl-2 h-12 flex items-center">
            <p className="text-white text-base text-center font-bold">{age}</p>
          </Col>
          <Col
            lg={3}
            className="border-l border-secondary-gray-2-border pl-3 h-12 flex items-center justify-end"
          >
            <Checkbox
              className="player-selector-checkbox"
              onChange={(ev) => handleSelectPlayer(playerInfo.player, ev)}
            />
          </Col>
        </Row>
      );
    });
  };

  const showPlayers = () => {
    return playerData.map((playerInfo) => {
      const { id, name, photo, age, position, league } = playerInfo.player;
      return (
        <Players
          key={`${id}-${Math.random()}`}
          id={id}
          name={name}
          photo={photo}
          age={age}
          position={position}
          league={league}
          player={playerInfo.player}
        />
      );
    });
  };

  if (selectable) {
    return showSelectPlayers();
  }
  return showPlayers();
};

export default DisplayListView;
