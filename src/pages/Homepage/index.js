import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/common/Layout";
import Soccer from "../../assets/img/soccer.svg";
import ArrowRight from "../../assets/img/icons/arrow-right-icon.svg";
import { AppContext } from "../../store/AppContext";

const Homepage = () => {
	const { userData } = useContext(AppContext);
	return (
		<Layout>
			<div className="landing-page-container flex flex-col lg:flex-row px-4 md:px-12 md:justify-end">
				<div className="w-full lg:w-1/3 xl:w-37p flex items-center order-2 lg:order-1 flex-col md:flex-row ">
					<div className="hero-text">
						<h2 className="f-oswald md:text-4xl xl:text-5xl leading-snug font-medium">
							FANTASY SOCCER TO PLAY WITH PLESSURE
						</h2>
						<p className="primary-dark-light font-semibold mt-4">
							Listen to the songs at tip of your finger, feel the vibes and
							dance.Listen to the songs at tip of your finger.
						</p>
						<div className="mt-4 flex flex-col md:flex-row items-center">
              {userData.token ? (
                <Link
                  className="link-btn-brand w-full md:w-auto justify-center inline-flex items-center text-white bg-primary-brand py-3 px-8 font-semibold rounded-sm"
                  to="/dashboard"
                >
                  View your Squad
                </Link>
              ) : (
                <>
                  <Link
                    className="link-btn-brand w-full md:w-auto justify-center inline-flex items-center text-white bg-primary-brand py-3 px-8 font-semibold rounded-sm"
                    to="/register">
                    Register
                  </Link>
                  <Link
                    className="link-plain flex md:ml-4  w-full md:w-auto justify-center  items-center py-4 lg:px-1 xl:px-8 text-primary-brand font-semibold"
                    to="/login">
                    Login to play{" "}
                    <img src={ArrowRight} className="ml-2" alt="arrow right icon" />{" "}
                  </Link>
                </>
              )}
						</div>
					</div>
				</div>
				<div className="w-full md:flex md:flex-col md:justify-end lg:w-1/2  order-1 lg:order-2">
					<div
						className="landing-bg w-full bg-no-repeat bg-contain md:bg-cover"
						style={{ backgroundImage: `url(${Soccer})` }}
					></div>
				</div>
			</div>
		</Layout>
	);
};

export default Homepage;
