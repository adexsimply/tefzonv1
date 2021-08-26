import React from "react";
// import PitchView from "./DisplayPitchView";
import ListView from "./DisplayListView";

const PlayerDisplay = ({
  dark,
	draggable,
	selectable,
	playerData,
	view,
	selectedList,
}) => {
	const handleListView = () => {
		return (
      <ListView
        dark={dark}
				playerData={playerData}
				selectable={selectable}
				completePlayerList={selectedList}
			/>
		);
	};

	// const handlePitchView = () => {
	// 	return (
	// 		<PitchView
	// 			draggable={draggable}
	// 			playerData={playerData}
	// 			completePlayerList={selectedList}
	// 		/>
	// 	);
	// };

	// const handlePlayerDisplay = () => {
	// 	if (view === "list") {
	// 		return handleListView();
	// 	}
	// 	return handlePitchView();
	// };

	return (
		<div className="display-players-container">{handleListView()}</div>
	);
};

export default React.memo(PlayerDisplay);
