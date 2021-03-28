import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button, Spin } from "antd";
import { loginUser } from "../helpers/api";
import { saveState } from "../store/localStorage";
import { openNotification } from "../helpers/notification";

const LoginForm = (props) => {
	const [loading, setLoading] = useState(false);

	const history = useHistory();

	const handleLoginUser = async (values) => {
		setLoading(true);
		try {
			const login = await loginUser(values);
			if (login) {
				openNotification({
					type: "success",
					title: "Login User",
					message: login.message,
				});
				saveState(login.result.token);
				history.replace("/teams");
			}
		} catch (error) {
			if (error) {
				openNotification({
					type: "error",
					title: "Login User",
					message: error,
				});
			}
		} finally {
			setLoading(false);
		}
	};
	return (
		<Form layout="vertical" onFinish={handleLoginUser} hideRequiredMark>
			<Form.Item
				name="email"
				label="Your Email"
				rules={[{ required: true, message: "please enter your email" }]}
			>
				<Input type="email" className="h-11" />
			</Form.Item>
			<Form.Item
				name="password"
				label="Your password"
				rules={[{ required: true, message: "please enter your password" }]}
			>
				<Input type="password" className="h-11" />
			</Form.Item>
			<p className="text-center font-medium">
				<Link to="/forgot-password" className="hover:text-primary-brand">
					Forgot password?
				</Link>
			</p>
			<div>
				<Button
					htmlType="submit"
					className="h-12 bg-primary-brand text-white border-0 mt-6"
					block
				>
					{loading ? <Spin /> : "Login"}
				</Button>
			</div>
			<p className="font-semibold text-center mt-4">
				Don’t have an acount?{" "}
				<Link to="/register" className="text-primary-brand">
					Sign Up
				</Link>
			</p>
		</Form>
	);
};

export default LoginForm;
