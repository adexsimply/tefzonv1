import React from "react";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
// import { AppContext } from "../../store/AppContext";

const Avatar = () => {
	// const { user } = useContext(AppContext);
	// console.log(user);
	// get logged in user email and display in dropdown
	// save user email on login
	const menu = (
		<Menu>
			<Menu.Item>
				<Link to="/profile">Profile</Link>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item>
				<Link to="/settings">Settings</Link>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item>
				<p>Log Out</p>
			</Menu.Item>
		</Menu>
	);
	return (
		<Dropdown overlay={menu} overlayClassName="w-48 avatar-container">
			<a
				href="/#/"
				className="ant-dropdown-link"
				onClick={(e) => e.preventDefault()}
			>
				<span className="user-icon inline-flex items-center justify-center bg-primary-brand w-8 h-8  rounded-full">
					<BiUser className="text-lg text-white" />
				</span>
			</a>
		</Dropdown>
	);
};

export default Avatar;
