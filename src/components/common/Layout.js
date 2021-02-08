import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Header />
			<div className=" mt-20 md:mt-24">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
