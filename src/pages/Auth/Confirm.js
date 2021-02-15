import React from "react";
import Header from "../../components/common/Header";
import { Button, Row, Col } from "antd";
import EditIcon from "../../assets/img/icons/edit-icon.svg";

const ConfirmUser = () => {
	return (
		<div className="signup h-screen">
			<Header />
			<Row justify="center" align="center">
				<Col md={12}>
					<div className="heading text-center">
						<h2 className="f-oswald text-3xl font-semibold">Your Account</h2>
					</div>
				</Col>
				<Col md={24}>
					<Row justify="center">
						<Col lg={14}>
							<div className="loginForm mt-12  py-8  px-8 bg-white w-2/3 mx-auto flex flex-col items-center justify-center">
								<div className="text-center">
									<img src={EditIcon} alt="" />
								</div>
								<h3 className="text-center font-semibold text-lg mt-8 ">
									Thanks For Registering
								</h3>
								<div className="px-8">
									<p className="text-base text-center font-medium text-primary-dark-light">
										Please check the message sent to kolagk@gmail.com.
										Comfirming the message allow you to complete the process.
									</p>
								</div>

								<Button className="bg-primary-brand text-white ">
									Go to email
								</Button>
							</div>
						</Col>
					</Row>
				</Col>
				<div className="w-4/5 md:w-4/5 lg:w-2/3 mt-10"></div>
			</Row>
		</div>
	);
};

export default ConfirmUser;
