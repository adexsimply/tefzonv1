import React from "react";
import { Row, Col, Button, Form, Checkbox } from "antd";
import LeftArrowIcon from "../../assets/img/icons/left-arrow.svg";

const StepThree = (props) => {
	const handleSubmit = () => {
		props.submitForm();
	};
	return (
		<div className="register-terms">
			<div className="heading text-center w-2/3 mx-auto">
				<h3 className=" font-bold text-lg">Subscription & Agreement</h3>
				<p className="text-base text-primary-dark-light font-normal mt-3">
					Please type carefully and fill out the form with your personal
					details. You can’t edit these details once you submitted the form.
				</p>
			</div>
			<div className=" mt-16">
				<Form layout="vertical" onFinish={handleSubmit}>
					<div className="">
						<Row>
							<Col md={20}>
								<h3 className="text-base font-semibold text-primary-dark mb-3">
									Newsletter
								</h3>
								<p className="text-primary-dark-light text-sm leading-loose mb-6">
									This apartment is an inviting choice. Created as a space to
									spend time in, there's extra room in the open-plan living
									area, allowing guests to stretch out; whether relaxing on the
									sofa or enjoying the kitchen. The bedroom and bathroom are
									also spacious, and continue the sense of warm yet contemporary
									design, with touches of colour. This apartment is an inviting
									choice. Created as a space to spend time in, there's extra
									room in the open-plan living area, allowing guests to stretch
									out; whether relaxing on the sofa or enjoying the kitchen.{" "}
								</p>
							</Col>
						</Row>
					</div>
					<Form.Item
						name="news"
						valuePropName="checked"
						rules={[
							{ required: true, message: "you have to subscribe to newletter" },
						]}
					>
						<Checkbox
							className="terms-checkbox"
							name="news"
							defaultChecked={true}
						>
							<span className="font-medium text-primary-dark">
								I agree to receive football related news
							</span>
						</Checkbox>
					</Form.Item>
					<Row>
						<Col md={20}>
							<div className="mt-16">
								<h3 className="text-base font-semibold text-primary-dark mb-3">
									Our Privacy Policy
								</h3>
								<p className="text-primary-dark-light text-sm mb-6 leading-loose">
									This apartment is an inviting choice. Created as a space to
									spend time in, there's extra room in the open-plan living
									area, allowing guests to stretch out; whether relaxing on the
									sofa or enjoying the kitchen. The bedroom and bathroom are
									also spacious, and continue the sense of warm yet contemporary
									design, with touches of colour. This apartment is an inviting
									choice. Created as a space to spend time in, there's extra
									room in the open-plan living area, allowing guests to stretch
									out; whether relaxing on the sofa or enjoying the kitchen.{" "}
								</p>
							</div>
						</Col>
					</Row>

					<Form.Item
						name="terms"
						valuePropName="checked"
						rules={[
							{
								required: true,
								message: "please accept the terms and conditions",
							},
						]}
					>
						<Checkbox
							className="terms-checkbox"
							name="terms"
							defaultChecked={true}
						>
							<span className="font-medium text-primary-dark">
								I have agreed to the{" "}
								<a href="" className="text-primary-brand">
									Terms & Conditions
								</a>{" "}
							</span>
						</Checkbox>
					</Form.Item>
					<Row>
						<Col md={24} className="mt-8">
							<Row justify="center">
								<Col md={8}>
									<Button
										htmlType="submit"
										className="bg-primary-brand h-12 font-semibold text-white w-full"
									>
										{props.registering
											? "Creating account..."
											: "Complete Registration"}
									</Button>
								</Col>
							</Row>
						</Col>
						<Col md={24}>
							<Row justify="center">
								<Col md={8} className="mt-4">
									<Button
										onClick={props.prev}
										onClick={props.onPrevious}
										className="border-none flex items-center justify-center w-full shadow-none"
									>
										{" "}
										<img
											src={LeftArrowIcon}
											className="mr-3"
											alt="left arrow icon"
										/>
										Back to favorites
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

export default StepThree;
