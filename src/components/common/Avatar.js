import React, { useContext } from "react";
import { Menu, Dropdown } from "antd";
import { BiUser } from "react-icons/bi";
import { AppContext } from "../../store/AppContext";

const Avatar = () => {
	const { user } = useContext(AppContext);
	// console.log(user);
	// get logged in user email and display in dropdown
	// save user email on login
	const menu = (
		<Menu>
			<Menu.Item>
				<a>Profile</a>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item>
				<a>Settings</a>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item>
				<a>Log Out</a>
			</Menu.Item>
		</Menu>
	);
	return (
		<Dropdown overlay={menu} overlayClassName="w-48 avatar-container">
			<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
				<span className="user-icon inline-flex items-center justify-center bg-primary-brand w-8 h-8  rounded-full">
					<BiUser className="text-lg text-white" />
				</span>
			</a>
		</Dropdown>
	);
};

export default Avatar;
