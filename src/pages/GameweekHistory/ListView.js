import React, { useContext } from "react";
import { TeamContext } from "../../store/TeamContext";
import { ReactComponent as PlayerJersey } from "../../assets/img/jersey-xl.svg";
import { formatString } from "../../helpers/utils";

const PitchView = () => {
  const { teamPlayers, loadingTeam } = useContext(TeamContext);

  const displayPlayers = (placement, position) => {
    const matchPlayer = teamPlayers.filter(
      (teamPlayer) =>
        teamPlayer.placement === placement && teamPlayer.wing === position
    );

    if (matchPlayer.length > 0) {
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
    <div className="gameweek-history-pitch-view">
      {loadingTeam || teamPlayers == null ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="player-row gk-row">
            {displayPlayers("gk_2", "goalkeeper")}
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
        </>
      )}
    </div>
  );
};

export default PitchView;
