import React, { useState } from "react";
import { Row, Col, Button } from "antd";

const ListView = (props) => {
	const displayGkPlayers = () => {
		console.log(props.goalKeepers, "=== my keepers");
		if (props.goalKeepers.length == 2) {
			return props.goalKeepers.map((players) => {
				return (
					<Row className="py-2 px-6 player-row" key={players.name}>
						<Col lg={10}>
							<div>
								<p>{players.name}</p>
								<p>
									<span>{players.position}</span>
								</p>
							</div>
						</Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
					</Row>
				);
			});
		} else {
			if (props.goalKeepers.length === 1) {
				return props.goalKeepers.map((players) => {
					return (
						<Row className="py-2 px-6 player-row" key={players.name}>
							<Col lg={10}>
								<div>
									<p>{players.name}</p>
									<p>
										<span>{players.position}</span>
									</p>
								</div>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
					);
				});
			}
			return (
				<Row className="py-2 px-6 player-row">
					<Col lg={10}>
						<Button
							className="border-0 text-black rounded-none p-0 font-medium"
							onClick={() => props.setSelection("gk")}
						>
							Select Goal Keeper
						</Button>
					</Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
				</Row>
			);
		}
	};
	return (
		<div className="teams-list-container px-3 h-5/6">
			<div className="bg-white h-full">
				{/* GK */}
				<div className="gk">
					<div className="heading bg-tw-yellow py-2 px-6 font-bold">
						<Row>
							<Col lg={10}>
								<h3>Goal Keeper</h3>
							</Col>
							<Col lg={3}>
								<h3>₦</h3>
							</Col>
							<Col lg={3}>
								<h3>SB</h3>
							</Col>
							<Col lg={3}>
								<h3>TP</h3>
							</Col>
							<Col lg={3}>
								<h3>Fix</h3>
							</Col>
						</Row>
					</div>
					<div className="players text-regular">
						{props.goalKeepers.length === 0 ? (
							<>
								<Row className="py-2 px-6 player-row">
									<Col lg={10}>
										<Button
											className="border-0 text-black rounded-none p-0 font-medium"
											onClick={() => props.setSelection("gk")}
										>
											Select Goal Keeper
										</Button>
									</Col>
									<Col lg={3}></Col>
									<Col lg={3}></Col>
									<Col lg={3}></Col>
									<Col lg={3}></Col>
								</Row>
								<Row className="py-2 px-6 player-row">
									<Col lg={10}>
										<Button
											className="border-0 text-black rounded-none p-0 font-medium"
											onClick={() => props.setSelection("gk")}
										>
											Select Goal Keeper
										</Button>
									</Col>
									<Col lg={3}></Col>
									<Col lg={3}></Col>
									<Col lg={3}></Col>
									<Col lg={3}></Col>
								</Row>{" "}
							</>
						) : (
							displayGkPlayers()
						)}
					</div>
				</div>
				{/* DEFENDERS */}
				<div className="defenders">
					<div className="heading bg-tw-green-light py-2 px-6 font-bold">
						<Row>
							<Col lg={10}>
								<h3>Defenders</h3>
							</Col>
							<Col lg={3}>
								<h3>₦</h3>
							</Col>
							<Col lg={3}>
								<h3>SB</h3>
							</Col>
							<Col lg={3}>
								<h3>TP</h3>
							</Col>
							<Col lg={3}>
								<h3>Fix</h3>
							</Col>
						</Row>
					</div>
					<div className="players text-regular">
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("def")}
								>
									Select Defender
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("def")}
								>
									Select Defender
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("def")}
								>
									Select Defender
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("def")}
								>
									Select Defender
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("def")}
								>
									Select Defender
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
					</div>
				</div>
				{/* MID FIELDERS */}
				<div className="mid">
					<div className="heading bg-tw-sky-blue py-2 px-6 font-bold">
						<Row>
							<Col lg={10}>
								<h3>Midfielders</h3>
							</Col>
							<Col lg={3}>
								<h3>₦</h3>
							</Col>
							<Col lg={3}>
								<h3>SB</h3>
							</Col>
							<Col lg={3}>
								<h3>TP</h3>
							</Col>
							<Col lg={3}>
								<h3>Fix</h3>
							</Col>
						</Row>
					</div>
					<div className="players text-regular">
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("mid")}
								>
									Select Midfielder
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("mid")}
								>
									Select Midfielder
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button className="border-0 text-black rounded-none p-0 font-medium">
									Select Midfielder
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("mid")}
								>
									Select Midfielder
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("mid")}
								>
									Select Midfielder
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
					</div>
				</div>
				{/* FORWARDS */}

				<div className="forward">
					<div className="heading bg-tw-red py-2 px-6 font-bold">
						<Row>
							<Col lg={10}>
								<h3>Forwards</h3>
							</Col>
							<Col lg={3}>
								<h3>₦</h3>
							</Col>
							<Col lg={3}>
								<h3>SB</h3>
							</Col>
							<Col lg={3}>
								<h3>TP</h3>
							</Col>
							<Col lg={3}>
								<h3>Fix</h3>
							</Col>
						</Row>
					</div>
					<div className="players text-regular">
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("forward")}
								>
									Select Forward
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("forward")}
								>
									Select Forward
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("forward")}
								>
									Select Forward
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListView;
