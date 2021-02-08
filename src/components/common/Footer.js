import React from "react";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";
import CopyIcon from "../../assets/img/icons/copy-icon.svg";

const Footer = () => {
	return (
		<footer className="footer flex justify-between px-12 py-10 bg-primary-brand text-white">
			<div>
				<p className="font-semibold">No Room For Racism</p>
			</div>
			<div>
				<ul className="flex items-center text-white font-semibold">
					<li className="mr-6">
						<a href="https://facebook.com">
							<GrFacebookOption style={{ fontSize: "1rem" }} />
						</a>
					</li>
					<li className="mr-6">
						<a href="https://twitter.com">
							<GrTwitter style={{ fontSize: "1rem" }} />
						</a>
					</li>
					<li className="mr-6">
						<a href="https://instagram.com">
							<GrInstagram style={{ fontSize: "1rem" }} />
						</a>
					</li>
				</ul>
			</div>
			<div className="copyright">
				<p className="flex items-center font-normal text-xs">
					<img src={CopyIcon} className="w-4 h-4 mr-1" alt="copy icon" /> 2020
					all simple right reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
