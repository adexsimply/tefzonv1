import React from "react";
import { Input } from "antd";

const AntInput = ({ className = "", ...rest }) => {
	return (
		<Input
			className={
				"h-10 rounded-none border border-secondary-dark-lighter " + className
			}
			{...rest}
		/>
	);
};

export default AntInput;
