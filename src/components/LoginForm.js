import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

const LoginForm = (props) => {
	return (
		<Form layout="vertical" hideRequiredMark>
			<Form.Item
				name="email"
				label="Your Email"
				rules={[{ required: true, message: "please enter your email" }]}
			>
				<Input className="h-11" />
			</Form.Item>
			<Form.Item
				name="password"
				label="Your password"
				rules={[{ required: true, message: "please enter your password" }]}
			>
				<Input className="h-11" />
			</Form.Item>
			<p className="text-center font-medium">Forgot password?</p>
			<div>
				<Button
					className="h-12 bg-primary-brand text-white border-0 mt-6"
					block
				>
					Login
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
