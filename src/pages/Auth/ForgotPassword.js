import React, { useState } from "react";
import Header from "../../components/common/Header";
import Input from "../../components/common/Input";

import { Form, Button, Spin } from "antd";
import { Link } from "react-router-dom";
import { forgotUserPassword } from "../../helpers/api";

import { CgArrowLongLeft } from "react-icons/cg";

import Alert from "../../components/common/Alert";

const ForgotPassword = () => {
	const [submitting, setSubmitting] = useState(false);
	const [status, setStatus] = useState({ type: "", msg: "" });

	const handleForgotPassword = async (values) => {
		setSubmitting(true);
		try {
			const results = await forgotUserPassword(values);

			if (results) {
				setSubmitting(false);
				setStatus({
					type: "success",
					msg: "Reset link has been sent to your email",
				});
				setTimeout(() => {
					resetStatus();
				}, 3000);
			}
		} catch (error) {
			console.log(error, "ppp");
			setStatus({
				type: "error",
				msg: error.message,
			});

			setSubmitting(false);
		}
	};
	const resetStatus = () => setStatus({ type: "", msg: "" });

	return (
		<div className="bg-gray-5">
			<Header />
			<div className="w-4/6 mx-auto mt-4">
				{status.type === "error" && (
					<Alert
						className="w-full bg-tw-red"
						textClassName="text-white f-oswald"
						msg={status.msg || "Something went wrong!"}
						closeAlert={resetStatus}
					/>
				)}
				{status.type === "success" && (
					<Alert
						className="w-full bg-primary-brand"
						textClassName="text-white f-oswald"
						msg={status.msg || "Successful!"}
						closeAlert={resetStatus}
					/>
				)}
			</div>

			<div className="w-4/5 md:w-1/3 mx-auto py-6  forgot-pw-content">
				<h3 className="f-oswald text-3xl text-center">Forgot Password</h3>
				<div className="flex justify-center align-center h-full flex-col">
					<Form
						layout="vertical"
						hideRequiredMark
						className="mt-6"
						onFinish={handleForgotPassword}
					>
						<Form.Item
							label="Email"
							name="email"
							rules={[{ required: true, message: "Please enter email" }]}
						>
							<Input type="email" />
						</Form.Item>
						<Button
							htmlType="submit"
							className="bg-primary-brand rounded-none border-0 h-12 text-white text-base"
							block
						>
							{submitting ? <Spin /> : "Submit"}
						</Button>
						<p className=" mt-4">
							<Link to="/login" className="flex items-center">
								<CgArrowLongLeft className="mr-4 text-2xl" /> Back to Login
							</Link>
						</p>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
