import React from "react";
const Button = ({
	variant = "default",
	className = "",
	children,
	type = "button",
	...rest
}) => {
	return (
		<button type={type} className={" " + (variant === "brand" && "btn-brand")}>
			{children}
		</button>
	);
};

export default Button;
