import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/common/Header";
import NotFoundBG from "../../assets/img/404.svg";

const NotFound = () => {
	return (
		<div className="coming-soon w-full h-screen">
			<Header />
			<h1 className="f-oswald text-5xl mb-4 mt-10 text-center text-primary-brand">
				Whoa! you wandered off{" "}
			</h1>
			<p className="text-base text-center text-primary-brand">
				<Link to="/">Click to go back to homepage</Link>
			</p>
			<div className="img-bg w-full h-2/3">
				<img src={NotFoundBG} className="w-full h-full" alt="" />
			</div>
		</div>
	);
};

export default NotFound;
