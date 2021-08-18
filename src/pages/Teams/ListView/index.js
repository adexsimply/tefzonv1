import React, { useContext, useEffect, useCallback } from "react";
import { Row, Col, Button, Popover } from "antd";
import { CreateTeamContext } from "../../../store/CreateTeamContext";
import Jersey from "../../../assets/img/jersey.svg";
import InfoCircleIcon from "../../../assets/img/icons/info-circle-green.svg";
import { useDrop } from "react-dnd";
import { ITEMTYPE } from "../../../helpers/itemType";
import { emptyListMidPlayers, emptyListFwdPlayers, emptyListDefPlayers, emptyListGkPlayers } from "../../../helpers/staticData";

const ListView = (props) => {
  const {
    selectedDef,
    selectedFwd,
    selectedGoalKeepers,
    selectedMid,
    isPlayerAvailable,
    // displayMidfielders,
    updatePlayerParams,
  } = useContext(CreateTeamContext);

  useEffect(() => {
    window.addEventListener("scroll", handleListScroll);
    return () => {
      window.removeEventListener("scroll", () => console.log("unmounted"));
    };
    // eslint-disable-next-line
  }, []);

  const handleDrop = (playerParam, role, playerData) => {
    updatePlayerParams(playerParam, role, playerData);
  };

  const PlayerList = ({players, onClick}) => {
    return (
      <Row
        className="py-2 px-6 justify-between player-row"
        key={players.name}
      >
        <Col lg={10}>
          <div className="flex mr-6">
            <Popover content={() => showPopUp(players)} title={players.name}>
              <img src={InfoCircleIcon} alt="info icon" />
            </Popover>

            <img src={Jersey} className="ml-6" alt="jersey icon" />
            <div
              className="border-0 text-black rounded-none p-0 font-medium ml-4"
              onClick={() => onClick}
            >
              <p className="font-light">{players.name}</p>
              <p>
                <span className="font-semibold inline-block">JUV</span>
                <span className="font-light uppercase inline-block ml-4">
                  {players.position}
                </span>
              </p>
            </div>
          </div>
        </Col>

        <Col lg={12}>
          <Row>
            <Col
              lg={8}
              className="border-l border-secondary-gray-2-border"
            ></Col>
            <Col lg={8}></Col>
            <Col lg={8}></Col>
          </Row>
        </Col>
      </Row>
    )
  }

  const PlayerListEmpty = ({title, onClick, dropAccept, onDrop}) => {
    const [{ isOver, canDrop }, addToTeamRef] = useDrop({
      accept: dropAccept,
      drop: onDrop,
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        // canDrop: !!monitor.canDrop(),
      }),
    });

    useEffect(() => {
      if (canDrop && isOver) {
        console.log('can drop')
      }
    }, [canDrop, isOver])
    return (
      <Row className="py-2 px-6 player-row" ref={addToTeamRef}>
          <Col lg={10}>
            <Button
              className="border-0 text-black rounded-none p-0 font-medium"
              onClick={onClick} 
            >
              {title}
            </Button>
          </Col>
          <Col lg={3}></Col>
          <Col lg={3}></Col>
          <Col lg={3}></Col>
          <Col lg={3}></Col>
        </Row>
    )
  }

  const handleListScroll = useCallback(() => {
    var scroller = window.scrollY;
    props.handleScroll(scroller);
    // eslint-disable-next-line
  }, []);

  const showPopUp = (playerDetail) => {
    return (
      <div>
        <p>{playerDetail.name}</p>
      </div>
    );
  };

  const displayDefender = (placement) => {
    const player = selectedDef.find(
      (player) => player.playerPlacement === placement
    );
    // if (player.is_subtitute) return null;
    return (
      <PlayerList players={player} />
    );
  };

  const displayGkPlayer = (placement) => {
    const player = selectedGoalKeepers.find(
      (player) => player.playerPlacement === placement
    );

    // if (player.is_substitute) return null;
    return (
      <PlayerList players={player} />
    );
  };

  const displayMidfielder = (placement) => {
    const player = selectedMid.find(
      (player) => player.playerPlacement === placement
    );
    // if (player.is_subtitute) return null;
    return (
      <PlayerList players={player} />
    );
  };

  const displayForward = (placement) => {
    const player = selectedFwd.find(
      (player) => player.playerPlacement === placement
    );
    console.log(player)
    // if (player.is_subtitute) return null;
    return (
      <PlayerList players={player} />
    );
  };

  const gkEmptyState = (is_substitute = false) => {
    return emptyListGkPlayers.map((data, index) => {
      if (isPlayerAvailable(data.position)) {
        return displayGkPlayer(data.position)
      } else {
        return (
          <PlayerListEmpty
            key={data.position}
            title={'Drag and drop a goalkeeper'}
            dropAccept={ITEMTYPE.players.goalKeeper}
            onDrop={(item) => handleDrop({
              position: "goalkeeper",
              is_substitute: false,
              playerPlacement: data.position,
            }, ITEMTYPE.players.goalKeeper, item)}
          />
        )
      }
    })
  };

  const midEmptyState = (is_substitute = false) => {
    return emptyListMidPlayers.map((data, index) => {
      if (isPlayerAvailable(data.position)) {
        return displayMidfielder(data.position)
      } else {
        return (
          <PlayerListEmpty
            key={data.position}
            title={'Drag and drop a Midfielder'}
            dropAccept={ITEMTYPE.players.midfilder}
            onDrop={(item) => handleDrop({
              position: "midfielder",
              is_substitute: false,
              playerPlacement: data.position,
            }, ITEMTYPE.players.midfilder, item)}
          />
        )
      }
    })
}

  const defEmptyState = () => {
    return emptyListDefPlayers.map((data, index) => {
      if (isPlayerAvailable(data.position)) {
        return displayDefender(data.position)
      } else {
        return (
          <PlayerListEmpty
            key={data.position}
            title={'Drag and drop a Defender'}
            dropAccept={ITEMTYPE.players.defender}
            onDrop={(item) => handleDrop({
              position: "defender",
              is_substitute: false,
              playerPlacement: data.position,
            }, ITEMTYPE.players.defender, item)}
          />
        )
      }
    })
  };

  const fwdEmptyState = () => {
    return emptyListFwdPlayers.map((data, index) => {
      if (isPlayerAvailable(data.position)) {
        return displayForward(data.position)
      } else {
        return (
          <PlayerListEmpty
            key={data.position}
            title={'Drag and drop an Attacker'}
            dropAccept={ITEMTYPE.players.forward}
            onDrop={(item) => handleDrop({
              position: "attacker",
              is_substitute: false,
              playerPlacement: data.position,
            }, ITEMTYPE.players.forward, item)}
          />
        )
      }
    })
  };

  const subEmptyState = () => {
    return (
      <>
        {isPlayerAvailable('gk_2') ?
          displayGkPlayer('gk_2') :
          (
            <PlayerListEmpty
              key={'gk_2'}
              title={'Drag and drop a goalkeeper'}
              dropAccept={ITEMTYPE.players.goalKeeper}
              onDrop={(item) => handleDrop({
                position: "goalkeeper",
                is_substitute: true,
                playerPlacement: 'gk_2',
              }, ITEMTYPE.players.goalKeeper, item)}
            />
          )
        }
        {isPlayerAvailable('def_4') ?
          displayDefender('def_4') :
          (
            <PlayerListEmpty
              key={'def_4'}
              title={'Drag and drop a Defender'}
              dropAccept={ITEMTYPE.players.defender}
              onDrop={(item) => handleDrop({
                position: "defender",
                is_substitute: true,
                playerPlacement: 'def_4',
              }, ITEMTYPE.players.defender, item)}
            />
          )
        }
        {isPlayerAvailable('mid_5') ?
          displayMidfielder('mid_5') :
          (
            <PlayerListEmpty
              key={'mid_5'}
              title={'Drag and drop a Midfielder'}
              dropAccept={ITEMTYPE.players.midfilder}
              onDrop={(item) => handleDrop({
                position: "midfielder",
                is_substitute: true,
                playerPlacement: 'mid_5',
              }, ITEMTYPE.players.midfilder, item)}
            />
          )
        }
        {isPlayerAvailable('fwd_4') ?
          displayForward('fwd_4') :
          (
            <PlayerListEmpty
              key={'fwd_4'}
              title={'Drag and drop a Attacker'}
              dropAccept={ITEMTYPE.players.forward}
              onDrop={(item) => handleDrop({
                position: "attacker",
                is_substitute: true,
                playerPlacement: 'fwd_4',
              }, ITEMTYPE.players.forward, item)}
            />
          )
        }
      </>
    );
  };

  const displayEmptyState = (position) => {
    switch (position) {
      case "goalkeeper":
        return gkEmptyState();
      case "midfielder":
        return midEmptyState();
      case "defender":
        return defEmptyState();
      case "attacker":
        return fwdEmptyState();
      default:
        return subEmptyState();
    }
  };

  return (
    <div className="teams-list-container px-3 max-h-825px overflow-y-auto">
      <div className="bg-white h-full">
        {/* GK */}
        <div className="gk">
          <div className="heading bg-tw-yellow py-2 px-6 font-bold">
            <Row className="justify-between">
              <Col lg={10}>
                <h3>Goal Keeper</h3>
              </Col>
              <Col lg={12}>
                <Row>
                  <Col lg={8}>
                    <h3>SB</h3>
                  </Col>
                  <Col lg={8}>
                    <h3>TP</h3>
                  </Col>
                  <Col lg={8}>
                    <h3>Fix</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="players text-regular">
            {displayEmptyState("goalkeeper")}
          </div>
        </div>
        {/* DEFENDERS */}
        <div className="defenders">
          <div className="heading bg-tw-green-light py-2 px-6 font-bold">
            <Row className="justify-between">
              <Col lg={10}>
                <h3>Defenders</h3>
              </Col>
              <Col lg={12}>
                <Row>
                  <Col lg={8}>
                    <h3>SB</h3>
                  </Col>
                  <Col lg={8}>
                    <h3>TP</h3>
                  </Col>
                  <Col lg={8}>
                    <h3>Fix</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="players text-regular">
            {displayEmptyState("defender")}
          </div>
        </div>
        {/* MID FIELDERS */}
        <div className="mid">
          <div className="heading bg-tw-sky-blue py-2 px-6 font-bold">
            <Row className="justify-between">
              <Col lg={10}>
                <h3>Midfielders</h3>
              </Col>
              <Col lg={12}>
                <Row>
                  <Col lg={8}>
                    <h3>SB</h3>
                  </Col>
                  <Col lg={8}>
                    <h3>TP</h3>
                  </Col>
                  <Col lg={8}>
                    <h3>Fix</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="players text-regular">
            {displayEmptyState("midfielder")}
          </div>
        </div>
        {/* FORWARDS */}

        <div className="forward">
          <div className="heading bg-tw-red py-2 px-6 font-bold">
            <Row className="justify-between">
              <Col lg={10}>
                <h3 className="text-white">Forwards</h3>
              </Col>
              <Col lg={12}>
                <Row>
                  <Col lg={8}>
                    <h3 className="text-white">SB</h3>
                  </Col>
                  <Col lg={8}>
                    <h3 className="text-white">TP</h3>
                  </Col>
                  <Col lg={8}>
                    <h3 className="text-white">Fix</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="players text-regular">
            {displayEmptyState("attacker")}
          </div>
        </div>
        {/* substitutes */}
        <div className="substitutes">
          <div className="heading bg-tw-sky-blue py-2 px-6 font-bold">
            <Row className="justify-between">
              <Col lg={10}>
                <h3>Substitutes</h3>
              </Col>
              <Col lg={12}>
                <Row>
                  <Col lg={8}>
                    <h3>SB</h3>
                  </Col>
                  <Col lg={8}>
                    <h3>TP</h3>
                  </Col>
                  <Col lg={8}>
                    <h3>Fix</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="players text-regular">
            {/* {displaySubs()} */}
            {displayEmptyState()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
