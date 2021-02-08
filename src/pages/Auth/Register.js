import React, { useState } from "react";
import Header from "../../components/common/Header";
import { Button } from "antd";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { Steps, message } from "antd";
import SigninForm from "../../components/SignupForm";

const { Step } = Steps;

const Register = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const steps = [
		{
			title: "First",
			content: <SigninForm />,
		},
		{
			title: "Second",
			content: <SigninForm />,
		},
		{
			title: "Last",
			content: <SigninForm />,
		},
	];

	const next = () => {
		setCurrentStep(currentStep + 1);
	};

	const prev = () => {
		setCurrentStep(currentStep - 1);
	};

	return (
		<div className="signin-container">
			<Header />
			<div className="signin-content-container flex justify-center">
				<div className="w-2/3 mt-10">
					<div className="heading text-center">
						<h2 className="f-oswald text-3xl font-semibold">
							Create Your Account
						</h2>
					</div>
					<div className="loginForm mt-12  py-8  px-8 bg-white">
						<Steps current={currentStep}>
							{steps.map((item) => (
								<Step key={item.title} title={item.title} />
							))}
						</Steps>
						<div className="steps-content">{steps[currentStep].content}</div>
						<div className="steps-action">
							{currentStep < steps.length - 1 && (
								<Button type="primary" onClick={() => next()}>
									Next
								</Button>
							)}
							{currentStep === steps.length - 1 && (
								<Button
									type="primary"
									onClick={() => message.success("Processing complete!")}
								>
									Done
								</Button>
							)}
							{currentStep > 0 && (
								<Button style={{ margin: "0 8px" }} onClick={() => prev()}>
									Previous
								</Button>
							)}
						</div>
						{/* <LoginForm /> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
