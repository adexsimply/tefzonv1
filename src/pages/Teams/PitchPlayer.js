import React from "react";
import PitchPlayerIcon from "../../assets/img/pitch-jersey.svg";

const PitchPlayer = ({ wrapperClassName = "", tagLabel = "", jersey }) => {
	return (
		<div
			className={
				"inline-flex justify-center flex-col items-center " + wrapperClassName
			}
		>
			<img
				src={jersey ? jersey : PitchPlayerIcon}
				className="inline-block m-0 w-12 h-14"
				alt=""
			/>
			<div className="bg-tag-blue py-1 text-white px-6 font-bold text-xs">
				{tagLabel}
			</div>
		</div>
	);
};

export default PitchPlayer;
