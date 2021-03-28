import React, { useState } from "react";
import Header from "../../components/common/Header";
import Input from "../../components/common/Input";
import { Form, Button, Spin } from "antd";
import { useHistory } from "react-router-dom";
import { forgotUserPassword } from "../../helpers/api";
import { openNotification } from "../../helpers/notification";
import { CgArrowLongLeft } from "react-icons/cg";

const ForgotPassword = () => {
	const [submitting, setSubmitting] = useState(false);
	let history = useHistory();

	const handleForgotPassword = async (values) => {
		setSubmitting(true);
		try {
			// const results = await forgotUserPassword(values);
			openNotification({
				type: "success",
				title: "Forgot Password",
				message: "Reset instructions have been sent to your email",
			});
			setSubmitting(false);
			setTimeout(() => {
				history.replace("/reset-password");
			}, 3000);

			// if (results) {
			// 	openNotification({
			// 		type: "success",
			// 		title: "Forgot Password",
			// 		message: "Reset instructions have been sent to your email",
			// 	});

			// 	setSubmitting(false);
			// }
		} catch (error) {
			openNotification({
				type: "error",
				title: "Forgot Password",
				message: error,
			});
			setSubmitting(false);
		}
	};
	return (
		<div className="bg-gray-5">
			<Header />
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
						<p className="flex items-center mt-4">
							<CgArrowLongLeft className="mr-4 text-2xl" /> Back to Login
						</p>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
