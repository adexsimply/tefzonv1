import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Select, DatePicker, Button, message } from "antd";
import { getCountries } from "../../helpers/api";
import AntInput from "../common/Input";
const { Option } = Select;

const StepOne = (props) => {
	const [countryList, setCountryList] = useState(null);
	const [dob, setDob] = useState("");

	useEffect(() => {
		getCountryList();
	}, []);
	const dateFormat = "DD-MM-YYYY";
	function onChange(date, dateString) {
		setDob(dateString);
	}
	const getCountryList = async () => {
		try {
			const results = await getCountries();
			console.log(results);
			if (results) {
				setCountryList(results.result.countries);
			}
		} catch (error) {
			message.error(error.message);
		}
	};
	const handleSubmit = (values) => {
		props.onNext({ date_of_birth: dob, ...values });
	};
	return (
		<div>
			<div className="heading text-center w-2/3 mx-auto">
				<h3 className=" font-bold text-lg">Personal Details</h3>
				<p className="text-base text-primary-dark-light font-normal mt-3">
					Please type carefully and fill out the form with your personal
					details. You can’t edit these details once you submitted the form.
				</p>
			</div>
			<div className="mt-12">
				<Form layout="vertical" onFinish={handleSubmit} hideRequiredMark>
					<Row gutter={20}>
						<Col xs={24} md={12}>
							<Form.Item
								label="First Name"
								name="first_name"
								rules={[
									{ required: true, message: "please enter your first name" },
								]}
							>
								<AntInput />
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item
								label="Last Name"
								name="last_name"
								rules={[
									{ required: true, message: "please enter your last name" },
								]}
							>
								<AntInput />
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item
								label="Email"
								name="email"
								className="mt-4"
								rules={[
									{
										required: true,
										message: "please enter your email address",
									},
								]}
							>
								<AntInput />
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item
								label="Password"
								name="password"
								className="mt-4"
								rules={[
									{ required: true, message: "please enter your password" },
								]}
							>
								
				<Input.Password type="password" className="h-11" />
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item
								label="Gender"
								name="gender_id"
								className="mt-4"
								rules={[
									{ required: true, message: "please select your gender" },
								]}
							>
								<Select className="brand-select">
									<Option value={1}>Male</Option>
									<Option value={2}>Female</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item
								label="Date of birth"
								name="DOB"
								className="mt-4"
								rules={[
									{
										required: true,
										message: "please enter your date of birth",
									},
								]}
							>
								<DatePicker
									className="brand-datepicker"
									onChange={onChange}
									format={dateFormat}
								/>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item
								label="Country"
								name="country_id"
								className="mt-4"
								rules={[
									{ required: true, message: "please select your country" },
								]}
							>
								<Select
									className="brand-select"
									showSearch
									optionFilterProp="children"
									filterOption={(input, option) =>
										option.children
											.toLowerCase()
											.indexOf(input.toLowerCase()) >= 0
									}
								>
									{countryList &&
										countryList.map((country) => (
											<Option key={country.id} value={country.id}>
												{country.country_label}
											</Option>
										))}
								</Select>
							</Form.Item>
						</Col>
						<Col xs={24} md={12}>
							<Form.Item
								label="Mobile Number"
								name="phone_number"
								className="mt-4"
								rules={[
									{ required: true, message: "please enter your phone number" },
								]}
							>
								<AntInput />
							</Form.Item>
						</Col>
						<Col xs={24} className="mt-12">
							<Row justify="center">
								<Col xs={24} md={8}>
									<Button
										htmlType="submit"
										className="bg-primary-brand h-12 font-semibold text-white w-full"
									>
										Next
									</Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Form>
			</div>
		</div>
	);
};

export default StepOne;
