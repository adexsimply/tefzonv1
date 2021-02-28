import React from "react";
import Check from "../assets/img/icons/check.svg";
const TeamCard = ({ imgSRC, name, id = "", checked, ...rest }) => {
	return (
		<div
			className={
				"team-card flex justify-center items-center flex-col " +
				(checked && "selected-card")
			}
			id={id}
			{...rest}
		>
			<div className="">
				{checked && (
					<img
						src={Check}
						alt="check icon"
						className="absolute top-4 right-3 w-3"
					/>
				)}
			</div>
			<img src={imgSRC} alt="" />

			<p className="font-medium">{name}</p>
		</div>
	);
};

export default TeamCard;
