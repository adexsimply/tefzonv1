import React from "react";
import Header from "../Header";
import FooterBackdrop from "../../assets/img/footer-backdrop.svg";
import DashboardBackdrop from "../../assets/img/backdrop.svg";
import Logo from "../../assets/img/footer-logo.svg";
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./Layout.scss";

const DashboardLayout = (props) => {
	const links = [
		{
			url: "status",
			name: "Status",
		},
		{
			url: "/teams",
			name: "Teams",
		},
		{
			url: "/transfer",
			name: "Transfer",
		},
		{
			url: "/leagues",
			name: "Leagues",
		},
		{
			url: "/fixtures",
			name: "Fixtures",
		},
		{
			url: "/stats",
			name: "Stats",
		},
		{
			url: "/prizes",
			name: "Prizes",
		},
		{
			url: "/help",
			name: "Help",
		},
	];
	const matchRoute = window.location.pathname.split("/")[1];

	return (
		<div className="dashboardLayout-container ">
			<Header />
			<div
				className="dashboard-banner h-56 w-full bg-cover bg-no-repeat"
				style={{ backgroundImage: `url(${DashboardBackdrop})` }}
			>
				<Row justify="center" className="h-3/4 items-center">
					<Col lg={22}>
						<h1 className="font-medium f-oswald text-5xl text-white">
							Tefzon Fantasy
						</h1>
					</Col>
				</Row>
				<Row justify="center" className="h-1/4 items-end">
					<Col lg={22} className="h-full">
						<ul className="flex items-center list-none h-full mb-0">
							{links.map(({ url, name }) => {
								if (`/${matchRoute}` === url) {
									return (
										<li className="" key={url}>
											<Link
												to={url}
												className="text-black px-4 py-4 inline-block mr-4 rounded-t-md bg-white"
											>
												{name}
											</Link>
										</li>
									);
								} else {
									return (
										<li className="" key={url}>
											<Link
												to={url}
												className="text-white px-4 py-4 inline-block mr-4 rounded-t-md bg-tw-green"
											>
												{name}
											</Link>
										</li>
									);
								}
							})}
						</ul>
					</Col>
				</Row>
			</div>
			<div className="dashboard-content-container bg-secondary-gray">
				{props.children}
			</div>
			<footer>
				<div
					className="bg-cover bg-no-repeat w-full h-56"
					style={{ backgroundImage: `url(${FooterBackdrop})` }}
				>
					<Row className="h-full justify-center">
						<Col lg={22} className="h-full ">
							<Row className="h-full items-center text-white justify-between">
								<Col lg={3}>
									<img src={Logo} alt="tefzon logo" />
								</Col>
								<Col lg={5}>
									<div className="flex flex-col">
										<h3 className="text-white font-semibold text-base mb-0">
											Pages
										</h3>
										<span className="inline-block border-b-2 border-primary-brand w-10"></span>
									</div>
									<div className="flex">
										<ul className="list-none">
											<li>
												<Link to="/dashboard" className="text-white">
													Home
												</Link>
											</li>
											<li>
												<Link to="/dashboard" className="text-white">
													My Team
												</Link>
											</li>
											<li>
												<Link to="/dashboard" className="text-white">
													Transfer
												</Link>
											</li>
										</ul>
										<ul className="list-none ml-8">
											<li>
												<Link to="/dashboard" className="text-white">
													Leagues
												</Link>
											</li>
											<li>
												<Link to="/dashboard" className="text-white">
													Fixtures
												</Link>
											</li>
											<li>
												<Link to="/dashboard" className="text-white">
													Statistics
												</Link>
											</li>
										</ul>
									</div>
								</Col>
								<Col lg={4}>
									<div className="flex flex-col">
										<h3 className="text-white font-semibold text-base mb-0">
											About
										</h3>
										<span className="inline-block border-b-2 border-primary-brand w-10"></span>
									</div>

									<ul className="list-none">
										<li>
											<Link to="/dashboard" className="text-white text-base">
												Privacy Policy
											</Link>
										</li>
										<li>
											<Link to="/dashboard" className="text-white text-base">
												Terms of use
											</Link>
										</li>
										<li>
											<Link to="/dashboard" className="text-white text-base">
												Cookies Settings
											</Link>
										</li>
									</ul>
								</Col>
								<Col lg={5}>
									<div className="flex flex-col">
										<h3 className="text-white font-semibold text-base mb-0">
											Follow us
										</h3>
										<span className="inline-block border-b-2 border-primary-brand w-10"></span>
									</div>
									<p>
										{" "}
										<em>Find exclusive contents on our social networks</em>{" "}
									</p>
									<ul className="flex list-none mt-4">
										<li>
											<a
												href="/#/"
												className="bg-primary-brand w-8 h-8 rounded-full inline-flex items-center justify-center mr-4"
											>
												<GrFacebookOption className="text-white" />
											</a>
										</li>
										<li>
											<a
												href="/#/"
												className="bg-primary-brand w-8 h-8 rounded-full inline-flex items-center justify-center mr-4"
											>
												<GrInstagram className="text-white" />
											</a>
										</li>
										<li>
											<a
												href="/#/"
												className="bg-primary-brand w-8 h-8 rounded-full inline-flex items-center justify-center"
											>
												<GrTwitter className="text-white" />
											</a>
										</li>
									</ul>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
				<div className="bg-white h-14 flex items-center justify-center">
					<p className="text-center">
						All rights reserved © 2021 Tefon Fantasy.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default DashboardLayout;
