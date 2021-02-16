import { notification } from "antd";

const validTypes = ["success", "error", "info", "warning", "warn", "open"];

export const openNotification = ({ title, message, duration, type }) => {
	const args = {
		message: title,
		description: message,
		duration: duration !== undefined ? duration : 5,
	};
	const serializedType = validTypes.includes(type) ? type : "open";
	notification[serializedType](args);
};
