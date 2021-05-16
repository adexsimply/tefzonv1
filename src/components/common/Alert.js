import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Alert = ({
	className = "",
	type = "",
	msg = "",
	closeAlert,
	textClassName = "",
}) => {
	return (
		<StyledAlert
			className={
				"rounded-md px-6 py-3 flex items-center justify-between " + className
			}
		>
			<p className={textClassName}>{msg}</p>
			<button onClick={closeAlert} className="cursor-pointer">
				<AiOutlineClose className="text-white" />
			</button>
		</StyledAlert>
	);
};
export var StyledAlert = styled.div``;
export default Alert;
