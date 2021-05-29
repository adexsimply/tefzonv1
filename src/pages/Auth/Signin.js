import React from "react";
import Header from "../../components/common/Header";
import { Button, Row, Col } from "antd";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "../../components/LoginForm";

const Signin = () => {
	return (
		<div className="signin-container">
			<Header />
			<Row justify="center" className="signin-content-container">
				<Col lg={8}>
					<div className="heading text-center">
						<h2 className="f-oswald text-3xl font-semibold">Login</h2>
						<p className="mt-3 px-6 text-sm font-medium">
							Welcome back to Tefzon Fantasy, please login to your account to
							continue
						</p>
						<Row justify="space-between" className=" social pt-2rem">
							<Col xs={20} lg={8} className="mx-auto">
								<Button className="bg-fb-blue social-btn text-white w-full">
									<GrFacebookOption />{" "}
									<span className="inline-block ml-3">Facebook</span>
								</Button>
							</Col>
							<Col xs={20} lg={8} className="mx-auto">
								<Button className="social-btn w-full">
									<FcGoogle />
									<span className="font-medium ml-3 inline-block">Google</span>
								</Button>
							</Col>
							<Col xs={20} lg={8} className="mx-auto">
								<Button className="social-btn bg-tw-blue text-white w-full">
									<GrTwitter />
									<span className="inline-block ml-3">Twitter</span>
								</Button>
							</Col>
						</Row>
						<p className="text-base font-medium">or login with</p>
					</div>
					<div className="loginForm mt-12 px-8">
						<LoginForm />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Signin;
