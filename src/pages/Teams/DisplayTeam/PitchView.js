import React, { useContext } from "react";
import { TeamContext } from "../../../store/TeamContext";
import { ReactComponent as PlayerJersey } from "../../../assets/img/jersey-xl.svg";
import { formatString } from "../../../helpers/utils";
import "./DisplayTeam.scss";

const PitchView = () => {
  console.log('PitchView in display team');
  const { teamPlayers } = useContext(TeamContext);

  console.log(teamPlayers, "===");
  const displayPlayers = (placement, position) => {
    const matchPlayer = teamPlayers?.filter(
      (teamPlayer) =>
        teamPlayer.placement === placement && teamPlayer.wing === position
    );

    console.log(matchPlayer);

    if (matchPlayer && matchPlayer.length > 0) {
      return (
        <div className="pitch-player ">
          {/* <button className="close-btn">
            <AiOutlineClose style={{ color: "#FF4B26", fontWeight: 600 }} />
          </button> */}
          <PlayerJersey className={`jersey jersey-${position}`} />

          <div className="">
            <div
              className="player-tag"
              title={matchPlayer[0].player.player_name}
            >
              {formatString(matchPlayer[0].player.player_name, 14)}
            </div>
            <div className="points-tag">{matchPlayer[0].wing}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="pitch-view-container">
      <div className="field-bg">
        <div className="player-row gk-row">
          {displayPlayers("goalkeeper", "gk_1")}
        </div>
        <div className="player-row def-row">
          {displayPlayers("def_1", "defender")}
          {displayPlayers("def_2", "defender")}
          {displayPlayers("def_3", "defender")}
        </div>
        <div className="player-row mid-row">
          {displayPlayers("mid_1", "midfielder")}
          {displayPlayers("mid_2", "midfielder")}
          {displayPlayers("mid_3", "midfielder")}
          {displayPlayers("mid_4", "midfielder")}
        </div>
        <div className="player-row fwd-row">
          {displayPlayers("fwd_1", "attacker")}
          {displayPlayers("fwd_2", "attacker")}
          {displayPlayers("fwd_3", "attacker")}
        </div>
      </div>
    </div>
  );
};

export default PitchView;
