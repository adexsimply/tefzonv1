import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import { FaBars } from "react-icons/fa";
import Avatar from "./Avatar";

const Header = () => {
	const [toggleNav, setToggleNav] = useState(false);
	const Links = [
		{
			url: "/",
			name: "Home",
		},
		{
			url: "/prizes",
			name: "Prizes",
		},
		{
			url: "/scout",
			name: "Scout",
		},
		{
			url: "/statistics",
			name: "Statistics",
		},
		{
			url: "/help",
			name: "Help",
		},
		{
			url: "/contact",
			name: "Contact",
		},
	];
	const displayNavItems = () => {
		return Links.map(({ url, name }) => {
			if (url === window.location.pathname) {
				return (
					<li
						key={url}
						className="active-nav-item lg:mr-8 border-b-2 font-medium border-primary-brand w-full md:w-auto lg:inline-flex"
					>
						<Link
							to={url}
							className=" py-3 md:py-0 inline-flex text-primary-brand"
						>
							{name}
						</Link>
					</li>
				);
			}
			return (
				<li key={url} className="lg:mr-8 w-full lg:w-auto font-medium">
					<Link to={url} className=" py-3 md:py-0 inline-flex">
						{name}
					</Link>
				</li>
			);
		});
	};

	return (
		<header className="flex flex-col md:flex-row py-3 px-3 md:px-12 md:py-3  w-full bg-white">
			<div className="logo flex flex-1 justify-between">
				<img src={Logo} alt="" />
				<button
					onClick={() => setToggleNav(!toggleNav)}
					className="navbar-toggler inline-flex  items-center md:hidden text-primary-brand px-3 border border-primary-brand"
				>
					<FaBars />
				</button>
			</div>
			{!toggleNav && (
				<div className="navbar-collapse flex w-full md:w-auto mt-4 md:mt-0">
					<ul className="flex flex-col md:flex-row items-center w-full">
						{displayNavItems()}
						<li>
							<Avatar />
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
