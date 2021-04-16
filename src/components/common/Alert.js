import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Alert = ({
	className = "",
	msg = "",
	closeAlert,
	textClassName = "",
}) => {
	return (
		<div
			className={
				"rounded-md px-6 py-3 flex items-center justify-between " + className
			}
		>
			<p className={textClassName}>{msg}</p>
			<button onClick={closeAlert} className="cursor-pointer">
				<AiOutlineClose className="text-white" />
			</button>
		</div>
	);
};

export default Alert;
