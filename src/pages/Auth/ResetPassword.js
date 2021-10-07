import React, { useState } from "react";
import Header from "../../components/common/Header";
import Alert from "../../components/common/Alert";
import { Form, Button, Spin, Modal, Input } from "antd";
import { resetUserPassword } from "../../helpers/api";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const ResetPassword = ({ match }) => {
	const [submitting, setSubmitting] = useState(false);
	const [showConfirmModal, setShowConfirmModal] = useState(false);
	const [status, setStatus] = useState({ type: "", msg: "" });
	const resetToken = useLocation().search.split("?token=")[1];
	console.log(resetToken);

	const handleResetPwd = async (values) => {
		setSubmitting(true);
		try {
			const results = await resetUserPassword({ ...values, token: resetToken });
			console.log(results);

			if (results) {
				setSubmitting(false);
				setShowConfirmModal(true);
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
	const closeConfirmModal = () => setShowConfirmModal(false);
	return (
		<div className="bg-gray-5">
			<Header />
			{showConfirmModal && (
				<Modal
					visible={showConfirmModal}
					onCancel={closeConfirmModal}
					closable={false}
					closeIcon={false}
					footer={false}
				>
					<div>
						<h1 className="text-center f-oswald text-3xl ">
							Password Reset Success
						</h1>
						<div className="text-center flex justify-center py-6">
							<AiFillCheckCircle className="text-primary-brand text-5xl" />
						</div>
						<div>
							<p className="text-center text-base font-medium">
								Password reset successful, click the button to login
							</p>
							<div className="text-center pt-4">
								<Link
									to="/login"
									className="bg-primary-brand inline-flex items-center text-white font-medium px-8 h-12 mx-auto"
								>
									Login
								</Link>
							</div>
						</div>
					</div>
				</Modal>
			)}

			<div className="w-1/3 mx-auto py-6  forgot-pw-content">
				<h3 className="f-oswald text-3xl text-center">Reset Password</h3>
				<div className="flex justify-center align-center h-full flex-col">
					{status.type === "error" && (
						<Alert
							className="w-full bg-tw-red"
							textClassName="text-white f-oswald"
							msg={status.msg || "Something went wrong!"}
							closeAlert={resetStatus}
						/>
					)}

					<Form
						layout="vertical"
						hideRequiredMark
						className="mt-6"
						onFinish={handleResetPwd}
					>
						<Form.Item
							label="Password"
							name="Password"
							rules={[{ required: true, message: "Please enter password" }]}
						>
							<Input.Password className="tef-password-input" />
						</Form.Item>
						<Form.Item
							label="Confirm Password"
							name="confirm_password"
							rules={[{ required: true, message: "Please enter password" }]}
						>
							<Input.Password className="tef-password-input" />
						</Form.Item>
						<Button
							htmlType="submit"
							className="bg-primary-brand rounded-none border-0 h-12 text-white text-base"
							block
						>
							{submitting ? <Spin /> : "Submit"}
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
