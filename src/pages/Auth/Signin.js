import React from "react";
import Header from "../../components/common/Header";
import { Button } from "antd";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "../../components/LoginForm";

const Signin = () => {
	return (
		<div className="signin-container">
			<Header />
			<div className="signin-content-container flex justify-center">
				<div className="w-1/3 pt-4">
					<div className="heading text-center">
						<h2 className="f-oswald text-3xl font-semibold">Login</h2>
						<p className="mt-3 px-6 text-sm font-medium">
							Welcome back to Tefzon Fantasy, please login to your account to
							continue
						</p>
						<div className="flex social mb-8 justify-between mt-8">
							<Button className="bg-fb-blue items-center flex text-white h-11 px-8">
								<GrFacebookOption />{" "}
								<span className="inline-block ml-3">Facebook</span>
							</Button>
							<Button className="flex items-center h-11 px-8">
								<FcGoogle />
								<span className="font-medium ml-3 inline-block">Google</span>
							</Button>
							<Button className="flex h-11 items-center bg-tw-blue text-white  px-8">
								<GrTwitter />
								<span className="inline-block ml-3">Twitter</span>
							</Button>
						</div>
						<p className="text-base font-medium">or login with</p>
					</div>
					<div className="loginForm mt-12 px-8">
						<LoginForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signin;
