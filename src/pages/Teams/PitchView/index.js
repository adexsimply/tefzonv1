import React, { useEffect, useContext } from "react";
import { CreateTeamContext } from "../../../store/CreateTeamContext";
import { AiOutlineClose } from "react-icons/ai";
import { formatString } from "../../../helpers/utils";
import PitchPlayer from "./PitchPlayer";
import TeamJersey from "../../../assets/img/team-jersey.svg";
import styled from "styled-components";
import { ITEMTYPE } from "../../../helpers/itemType";

const PitchView = () => {
  const {
    dragStatus,
    updatePlayerParams,
    selectedPitchId,
    selectedGoalKeepers,
    selectedDef,
    selectedMid,
    selectedFwd,
    undoPlayerSelection,
    isPlayerAvailable,
    resetPlayerFilter,
    handleStorePlayerDetails,
    handleDragPlayer,
  } = useContext(CreateTeamContext);

  console.log('PitchView not in display team');

  useEffect(() => {
    if (dragStatus === "dragging") {
      const receivingPlayer =
        document.getElementById(selectedPitchId).children[0];

      receivingPlayer.addEventListener("dragover", handleDragPlayer);
      receivingPlayer.addEventListener("drop", handleDrop);
    }

    if (dragStatus === "dropped") {
      handleStorePlayerDetails();
      resetPlayerFilter();
    }

    // eslint-disable-next-line
  }, [dragStatus, selectedPitchId]);

  const handleDrop = (playerParam, role, playerData) => {
    updatePlayerParams(playerParam, role, playerData);
  };

  // const undoPlayerSelection = (player) => removerPlayerFromList(player);

  const displaySelectedGoalKeeps = (placement) => {
    const player = selectedGoalKeepers.find(
      (player) => player.playerPlacement === placement
    );

    if (player) {
      return (
        <StyledTeamPlayer className=" pitch-player ">
          <button
            className="close-btn"
            onClick={() => undoPlayerSelection(player)}
          >
            <AiOutlineClose style={{ color: "#FF4B26", fontWeight: 600 }} />
          </button>
          <img src={TeamJersey} alt="" />

          <div className="">
            <div className="player-tag">{player.name}</div>
            <div className="points-tag">{player.position}</div>
          </div>
        </StyledTeamPlayer>
      );
    }
  };

  const displayDefenders = (placement) => {
    const player = selectedDef.find(
      (player) => player.playerPlacement === placement
    );
    if (player) {
      return (
        <StyledTeamPlayer
          className=" pitch-player "
          style={{ marginRight: "2rem" }}
        >
          <button
            className="close-btn"
            onClick={() => undoPlayerSelection(player)}
          >
            <AiOutlineClose style={{ color: "#FF4B26", fontWeight: 600 }} />
          </button>
          <img src={TeamJersey} alt="" />

          <div className="">
            <div className="player-tag" title={player.name}>
              {formatString(player.name, 10)}
            </div>
            <div className="points-tag">{player.position}</div>
          </div>
        </StyledTeamPlayer>
      );
    } else {
      return null;
    }
  };

  const displayMidfielders = (placement) => {
    const player = selectedMid.find(
      (player) => player.playerPlacement === placement
    );

    if (player) {
      return (
        <StyledTeamPlayer
          className=" pitch-player "
          style={{ marginRight: "2rem" }}
        >
          <button
            className="close-btn"
            onClick={() => undoPlayerSelection(player)}
          >
            <AiOutlineClose style={{ color: "#FF4B26", fontWeight: 600 }} />
          </button>
          <img src={TeamJersey} alt="" />

          <div className="">
            <div className="player-tag">{player.name}</div>
            <div className="points-tag">{player.position}</div>
          </div>
        </StyledTeamPlayer>
      );
    } else {
      return null;
    }
  };

  const displayForward = (placement) => {
    const player = selectedFwd.find(
      (player) => player.playerPlacement === placement
    );
    if (player) {
      return (
        <StyledTeamPlayer
          className=" pitch-player "
          style={{ marginRight: "2rem" }}
        >
          <button
            className="close-btn"
            onClick={() => undoPlayerSelection(player)}
          >
            <AiOutlineClose style={{ color: "#FF4B26", fontWeight: 600 }} />
          </button>
          <img src={TeamJersey} alt="" />

          <div className="">
            <div className="player-tag">{player.name}</div>
            <div className="points-tag">{player.position}</div>
          </div>
        </StyledTeamPlayer>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="pitch-view-container">
      <div
        className="field-bg"
        // style={{ backgroundImage: `url(${Stadium})`, width: '100%', bac }}
      >
        <div className="relative flex justify-center position-container mx-auto">
          {isPlayerAvailable("gk_1") ? (
            displaySelectedGoalKeeps("gk_1")
          ) : (
            <PitchPlayer
              tagLabel="gk"
              subStatus={false}
              id="gk_1"
              dropAccept={ITEMTYPE.players.goalKeeper}
              onDrop={(item) => handleDrop({
                position: "goalkeeper",
                is_substitute: false,
                playerPlacement: "gk_1",
              }, ITEMTYPE.players.goalKeeper, item)}
            />
          )}
        </div>
        <div className="relative flex justify-center mt-9 position-container mx-auto">
          {isPlayerAvailable("def_1") ? (
            displayDefenders("def_1")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-8"
              tagLabel="def"
              subStatus={false}
              id="def_1"
              playerPlacement="def_1"
              dropAccept={ITEMTYPE.players.defender}
              onDrop={(item) => handleDrop({
                position: "defender",
                is_substitute: false,
                playerPlacement: "def_1",
              }, ITEMTYPE.players.defender, item)}
            />
          )}
          {isPlayerAvailable("def_2") ? (
            displayDefenders("def_2")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-8"
              tagLabel="def"
              subStatus={false}
              id="def_2"
              playerPlacement="def_2"
              dropAccept={ITEMTYPE.players.defender}
              onDrop={(item) => handleDrop({
                position: "defender",
                is_substitute: false,
                playerPlacement: "def_2",
              }, ITEMTYPE.players.defender, item)}
            />
          )}
          {isPlayerAvailable("def_3") ? (
            displayDefenders("def_3")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-8"
              tagLabel="def"
              subStatus={false}
              id="def_3"
              playerPlacement="def_1"
              dropAccept={ITEMTYPE.players.defender}
              onDrop={(item) => handleDrop({
                position: "defender",
                is_substitute: false,
                playerPlacement: "def_3",
              }, ITEMTYPE.players.defender, item)}
            />
          )}
        </div>
        <div className="relative flex justify-center mt-10 position-container mx-auto">
          {isPlayerAvailable("mid_1") ? (
            displayMidfielders("mid_1")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-12"
              tagLabel="mid"
              playerPlacement="mid_1"
              id="mid_1"
              subStatus={false}
              dropAccept={ITEMTYPE.players.midfilder}
              onDrop={(item) => handleDrop({
                position: "midfielder",
                is_substitute: false,
                playerPlacement: "mid_1",
              }, ITEMTYPE.players.midfilder, item)}
            />
          )}
          {isPlayerAvailable("mid_2") ? (
            displayMidfielders("mid_2")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-12"
              tagLabel="mid"
              playerPlacement="mid_2"
              id="mid_2"
              subStatus={false}
              dropAccept={ITEMTYPE.players.midfilder}
              onDrop={(item) => handleDrop({
                position: "midfielder",
                is_substitute: false,
                playerPlacement: "mid_2",
              }, ITEMTYPE.players.midfilder, item)}
            />
          )}
          {isPlayerAvailable("mid_3") ? (
            displayMidfielders("mid_3")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-12"
              tagLabel="mid"
              playerPlacement="mid_3"
              id="mid_3"
              subStatus={false}
              dropAccept={ITEMTYPE.players.midfilder}
              onDrop={(item) => handleDrop({
                position: "midfielder",
                is_substitute: false,
                playerPlacement: "mid_3",
              }, ITEMTYPE.players.midfilder, item)}
            />
          )}
          {isPlayerAvailable("mid_4") ? (
            displayMidfielders("mid_4")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-12"
              tagLabel="mid"
              playerPlacement="mid_4"
              id="mid_4"
              subStatus={false}
              dropAccept={ITEMTYPE.players.midfilder}
              onDrop={(item) => handleDrop({
                position: "midfielder",
                is_substitute: false,
                playerPlacement: "mid_4",
              }, ITEMTYPE.players.midfilder, item)}
            />
          )}
        </div>
        <div className="relative flex justify-center mt-12 position-container mx-auto">
          {isPlayerAvailable("fwd_1") ? (
            displayForward("fwd_1")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-12"
              tagLabel="fwd"
              playerPlacement="fwd_1"
              id="fwd_1"
              subStatus={false}
              dropAccept={ITEMTYPE.players.forward}
              onDrop={(item) => handleDrop({
                position: "attacker",
                is_substitute: false,
                playerPlacement: "fwd_1",
              }, ITEMTYPE.players.forward, item)}
            />
          )}
          {isPlayerAvailable("fwd_2") ? (
            displayForward("fwd_2")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-12"
              tagLabel="fwd"
              playerPlacement="fwd_2"
              id="fwd_2"
              subStatus={false}
              dropAccept={ITEMTYPE.players.forward}
              onDrop={(item) => handleDrop({
                position: "attacker",
                is_substitute: false,
                playerPlacement: "fwd_2",
              }, ITEMTYPE.players.forward, item)}
            />
          )}
          {isPlayerAvailable("fwd_3") ? (
            displayForward("fwd_3")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-12"
              tagLabel="fwd"
              playerPlacement="fwd_3"
              id="fwd_3"
              subStatus={false}
              dropAccept={ITEMTYPE.players.forward}
              onDrop={(item) => handleDrop({
                position: "attacker",
                is_substitute: false,
                playerPlacement: "fwd_3",
              }, ITEMTYPE.players.forward, item)}
            />
          )}
        </div>
        <div className="text-center mt-10">
          <h3 className="f-oswald text-xl font-bold">Subs</h3>
          <div className="border-b-2 border-primary-dark"></div>
        </div>
        <div className="relative flex justify-center mt-8 position-container pb-3 mx-auto">
          {isPlayerAvailable("gk_2") ? (
            displaySelectedGoalKeeps("gk_2")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-12"
              tagLabel="gk"
              subStatus={true}
              id="gk_2"
              dropAccept={ITEMTYPE.players.goalKeeper}
              onDrop={(item) => handleDrop({
                position: "goalkeeper",
                is_substitute: true,
                playerPlacement: "gk_2",
              }, ITEMTYPE.players.goalKeeper, item)}
            />
          )}
          {isPlayerAvailable("mid_5") ? (
            displayMidfielders("mid_5")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-12"
              tagLabel="mid"
              subStatus={true}
              id="mid_5"
              dropAccept={ITEMTYPE.players.midfilder}
              onDrop={(item) => handleDrop({
                position: "midfielder",
                is_substitute: true,
                playerPlacement: "mid_5",
              }, ITEMTYPE.players.midfilder, item)}
            />
          )}
          {isPlayerAvailable("def_4") ? (
            displayDefenders("def_4")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-12"
              tagLabel="def"
              subStatus={true}
              id="def_4"
              dropAccept={ITEMTYPE.players.defender}
              onDrop={(item) => handleDrop({
                position: "defender",
                is_substitute: true,
                playerPlacement: "def_4",
              }, ITEMTYPE.players.defender, item)}
            />
          )}
          {isPlayerAvailable("fwd_4") ? (
            displayForward("fwd_4")
          ) : (
            <PitchPlayer
              wrapperClassName="mr-12"
              tagLabel="fwd"
              subStatus={true}
              id="fwd_4"
              dropAccept={ITEMTYPE.players.forward}
              onDrop={(item) => handleDrop({
                position: "attacker",
                is_substitute: true,
                playerPlacement: "fwd_4",
              }, ITEMTYPE.players.forward, item)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const StyledTeamPlayer = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 100px;
  height: 80px;

  button.close-btn {
    position: absolute;
    top: -4px;
    right: 20px;
    background: #fff;
    border-radius: 50px;
    width: 20px;
    height: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .player-tag {
    background: #33175a;
    color: #fff;
    font-weight: bold;
    padding: 0 1rem;
    font-size: 10px;
  }
  .points-tag {
    font-size: 10px;
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

export default PitchView;
