import React from "react";
import { useDrop } from "react-dnd";
import PitchPlayerIcon from "../../../assets/img/pitch-jersey.svg";

const PitchPlayer = ({
  pitchData,
	wrapperClassName = "",
	tagLabel = "",
	jersey,
	className = "",
	playerPlacement = "",
	subStatus,
  dropAccept,
  onDrop,
	...rest
}) => {
    // eslint-disable-next-line
  const [{ isOver, canDrop, itemtype }, addToTeamRef] = useDrop({
    accept: dropAccept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

	console.log('dropAccept ' + dropAccept + ' isOver ' + canDrop + ' isOver ' + isOver + ' itemtype ' + itemtype);

	return (
		<div
			className={
				"inline-flex justify-center flex-col items-center cursor-pointer pitch-player " +
				wrapperClassName +
				" " +
				className
			}
      ref={addToTeamRef}
			data-position={tagLabel}
			data-subtitute={subStatus}
			{...rest}
		>
			<>
				<img
					src={jersey ? jersey : PitchPlayerIcon}
					className="inline-block m-0 w-12 h-14"
					alt=""
				/>
				<div className="bg-tag-blue py-1 text-white px-6 font-bold text-xs">
					{tagLabel}
				</div>
			</>
		</div>
	);
};

export default React.memo(PitchPlayer);
