import React from 'react';

function GameWeekDetails({gameWeek, date}) {
  return (
    <div className="gameweek-display-container">
    <div className="game-display">
      <p>
        <span className="white">Gameweek {gameWeek}:</span>
        <span className="green">{ date }</span>
      </p>
    </div>
    <div className="green-band"></div>
  </div>
  );
}

export default GameWeekDetails;
