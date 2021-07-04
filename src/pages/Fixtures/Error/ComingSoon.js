import React from "react";
import Header from "../../components/common/Header";
import ComingSoonBG from "../../assets/img/coming-soon.svg";

const ComingSoon = () => {
	return (
		<div className="coming-soon w-full h-screen">
			<Header />
			<h1 className="f-oswald text-5xl mb-8 mt-10 text-center text-primary-brand">
				This page is under construction
			</h1>
			<div className="img-bg w-full h-2/3">
				<img src={ComingSoonBG} className="w-full h-full" alt="" />
			</div>
		</div>
	);
};

export default ComingSoon;
