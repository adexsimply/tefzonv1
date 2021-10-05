import React, { useState } from "react";
import Header from "../../components/common/Header";
import { useHistory } from "react-router-dom";
import { Steps } from "antd";
import { saveState } from "../../store/localStorage";
import { registerUser } from "../../helpers/api";
import { ReactComponent as UserPlusIcon } from "../../assets/img/icons/user-plus.svg";
import { ReactComponent as MailCheck } from "../../assets/img/icons/mail-approve.svg";
import { ReactComponent as CheckIcon } from "../../assets/img/icons/check-white.svg";
import { AiFillHeart } from "react-icons/ai";
import { openNotification } from "../../helpers/notification";
import StepOne from "../../components/Signup/Step1";
import StepTwo from "../../components/Signup/Step2";
import StepThree from "../../components/Signup/Step3";

const { Step } = Steps;

const Register = () => {
	const [currentStep, setCurrentStep] = useState(0);
	const [userCredentials, setUserCredentials] = useState(null);
	const [teamId, setTeamId] = useState(null);
	const [loading, setLoading] = useState(false);
	const [progressStatus, setProgressStatus] = useState({
		step1: "pending",
		step2: "pending",
		ste3: "pending",
	});
	const history = useHistory();

	const handleNext = (values) => {
		if (values) {
			setUserCredentials(values);
			setProgressStatus({ ...progressStatus, step1: "done" });
			setCurrentStep(currentStep + 1);
		}
	};
	// move step to previous
	const prev = () => {
		setCurrentStep(currentStep - 1);
	};
	// store selected team to state and update step status
	const handleTeams = (teams) => {
		setTeamId(teams);
		setProgressStatus({ ...progressStatus, step2: "done" });
		setCurrentStep(currentStep + 1);
	};
	const handleUserRegistration = async (userData) => {
		try {
			const results = await registerUser(userData);
			if (results) {
				console.log(results);
				setLoading(false);
				if (results.status === "Success") {
					saveState(results.results.token.token);
					openNotification({
						type: "success",
						title: "User Registration",
						msg: results.message,
					});
					history.replace("/dashboard");
					setLoading(false);
				} else {
					openNotification({
						type: "error",
						title: "User Registration",
						message: results.message,
					});
					setLoading(false);
				}
			}
		} catch (error) {
      openNotification({
        type: "error",
        title: "User Registration",
        message: error,
      });
			console.log(error);
			setLoading(false);
		}
	};
	// submit all completed forms
	const handleSubmit = () => {
		setLoading(true);
		const {
			first_name,
			last_name,
			date_of_birth,
			phone_number,
			email,
			password,
			country_id,
			gender_id,
		} = userCredentials;
		const payload = {
			first_name,
			last_name,
			date_of_birth,
			phone_number,
			email,
			password,
			country_id,
			gender_id,
			team_id: teamId,
		};
		console.log(payload, "payload");
		handleUserRegistration(payload);
		// history.replace("/register/confirm-user");
	};
	// registration content
	const steps = [
		{
			content: <StepOne onNext={handleNext} />,
		},
		{
			content: <StepTwo onPrevious={prev} getTeams={handleTeams} />,
		},
		{
			content: (
				<StepThree
					onPrevious={prev}
					submitForm={handleSubmit}
					registering={loading}
				/>
			),
		},
	];

	return (
		<div className="signup">
			<Header />
			<div className="signin-content-container flex justify-center">
				<div className="w-4/5 md:w-4/5 lg:w-2/3 mt-10">
					<div className="heading text-center">
						<h2 className="f-oswald text-3xl font-semibold">
							Create Your Account
						</h2>
					</div>

					<div className="loginForm mt-12  py-8  px-8 bg-white">
						<Steps current={currentStep}>
							<Step
								icon={
									progressStatus.step1 === "done" ? (
										<CheckIcon style={{ width: "2rem", height: "2rem" }} />
									) : (
										<UserPlusIcon style={{ width: "2rem", height: "2rem" }} />
									)
								}
								status={progressStatus.step1}
							/>
							<Step
								icon={
									progressStatus.step2 === "done" ? (
										<CheckIcon style={{ width: "2rem", height: "2rem" }} />
									) : (
										<AiFillHeart
											style={{ width: "2rem", height: "2rem", color: "#fff" }}
										/>
									)
								}
								status={progressStatus.step2}
							/>
							<Step
								title=""
								icon={
									progressStatus.step3 === "done" ? (
										<CheckIcon style={{ width: "2rem", height: "2rem" }} />
									) : (
										<MailCheck style={{ width: "2rem", height: "2rem" }} />
									)
								}
								status={progressStatus.step3}
							/>
						</Steps>
						<div className="steps-content">
							<div className="mt-8">{steps[currentStep].content}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
