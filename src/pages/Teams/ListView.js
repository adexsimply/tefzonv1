import React from "react";
import { Row, Col, Button, Popover } from "antd";
import Jersey from "../../assets/img/jersey.svg";
import InfoCircleIcon from "../../assets/img/icons/info-circle-green.svg";

const ListView = (props) => {
	const showPopUp = (playerDetail) => {
		return (
			<div>
				<p>{playerDetail.name}</p>
			</div>
		);
	};
	const displayGkPlayers = () => {
		return props.goalKeepers.map((players) => {
			return (
				<Row className="py-2 px-6 justify-between player-row">
					<Col lg={10}>
						<div className="flex mr-6">
							<Popover content={() => showPopUp(players)} title={players.name}>
								<img src={InfoCircleIcon} alt="info icon" />
							</Popover>

							<img src={Jersey} className="ml-6" alt="jersey icon" />
							<div
								className="border-0 text-black rounded-none p-0 font-medium ml-4"
								onClick={() => props.setSelection("gk")}
							>
								<p className="font-light">{players.name}</p>
								<p>
									<span className="font-semibold inline-block">JUV</span>
									<span className="font-light uppercase inline-block ml-4">
										{players.position}
									</span>
								</p>
							</div>
						</div>
					</Col>

					<Col lg={12}>
						<Row>
							<Col
								lg={8}
								className="border-l border-secondary-gray-2-border"
							></Col>
							<Col lg={8}></Col>
							<Col lg={8}></Col>
						</Row>
					</Col>
				</Row>
			);
		});
	};
	const displayDefenders = () => {
		return props.defenders.map((players) => {
			return (
				<Row className="py-2 px-6 justify-between player-row">
					<Col lg={10}>
						<div className="flex mr-6">
							<Popover content={() => showPopUp(players)} title={players.name}>
								<img src={InfoCircleIcon} alt="info icon" />
							</Popover>

							<img src={Jersey} className="ml-6" alt="jersey icon" />
							<div
								className="border-0 text-black rounded-none p-0 font-medium ml-4"
								onClick={() => props.setSelection("gk")}
							>
								<p className="font-light">{players.name}</p>
								<p>
									<span className="font-semibold inline-block">JUV</span>
									<span className="font-light uppercase inline-block ml-4">
										{players.position}
									</span>
								</p>
							</div>
						</div>
					</Col>

					<Col lg={12}>
						<Row>
							<Col
								lg={8}
								className="border-l border-secondary-gray-2-border"
							></Col>
							<Col lg={8}></Col>
							<Col lg={8}></Col>
						</Row>
					</Col>
				</Row>
			);
		});
	};
	const displayMidfielders = () => {
		return props.midfielders.map((players) => {
			return (
				<Row className="py-2 px-6 player-row justify-between">
					<Col lg={10}>
						<div className="flex mr-6">
							<Popover content={() => showPopUp(players)} title={players.name}>
								<img src={InfoCircleIcon} alt="info icon" />
							</Popover>

							<img src={Jersey} className="ml-6" alt="jersey icon" />
							<div
								className="border-0 text-black rounded-none p-0 font-medium ml-4"
								onClick={() => props.setSelection("gk")}
							>
								<p className="font-light">{players.name}</p>
								<p>
									<span className="font-semibold inline-block">JUV</span>
									<span className="font-light uppercase inline-block ml-4">
										{players.position}
									</span>
								</p>
							</div>
						</div>
					</Col>
					<Col lg={12}>
						<Row>
							<Col
								lg={8}
								className="border-l border-secondary-gray-2-border"
							></Col>
							<Col lg={8}></Col>
							<Col lg={8}></Col>
						</Row>
					</Col>
				</Row>
			);
		});
	};
	const displayForwards = () => {
		return props.forwards.map((players) => {
			return (
				<Row className="py-2 px-6 player-row justify-between">
					<Col lg={10}>
						<div className="flex mr-6">
							<Popover content={() => showPopUp(players)} title={players.name}>
								<img src={InfoCircleIcon} alt="info icon" />
							</Popover>

							<img src={Jersey} className="ml-6" alt="jersey icon" />
							<div
								className="border-0 text-black rounded-none p-0 font-medium ml-4"
								onClick={() => props.setSelection("gk")}
							>
								<p className="font-light">{players.name}</p>
								<p>
									<span className="font-semibold inline-block">JUV</span>
									<span className="font-light uppercase inline-block ml-4">
										{players.position}
									</span>
								</p>
							</div>
						</div>
					</Col>
					<Col lg={12}>
						<Row>
							<Col
								lg={8}
								className="border-l border-secondary-gray-2-border"
							></Col>
							<Col lg={8}></Col>
							<Col lg={8}></Col>
						</Row>
					</Col>
				</Row>
			);
		});
	};
	const displaySubs = () => {};

	const gkEmptyState = () => {
		let gkContent = [];
		for (let i = props.goalKeepers.length; i < 2; i++) {
			gkContent.push(
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
		return gkContent;
	};

	const midEmptyState = () => {
		let contents = [];
		for (let i = props.midfielders.length; i < 5; i++) {
			contents.push(
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
			);
		}
		return contents;
	};
	const defEmptyState = () => {
		let contents = [];
		for (let i = props.defenders.length; i < 5; i++) {
			contents.push(
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
			);
		}
		return contents;
	};

	const fwdEmptyState = () => {
		let contents = [];
		for (let i = props.forwards.length; i < 3; i++) {
			contents.push(
				<Row className="py-2 px-6 player-row">
					<Col lg={10}>
						<Button
							className="border-0 text-black rounded-none p-0 font-medium"
							onClick={() => props.setSelection("fwd")}
						>
							Select Forward
						</Button>
					</Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
				</Row>
			);
		}
		return contents;
	};
	const subEmptyState = () => {
		return (
			<>
				<Row className="py-2 px-6 player-row">
					<Col lg={10}>
						<Button
							className="border-0 text-black rounded-none p-0 font-medium"
							onClick={() => props.setSelection("subGk")}
						>
							Select GK
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
							onClick={() => props.setSelection("subDef")}
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
							onClick={() => props.setSelection("subMid")}
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
							onClick={() => props.setSelection("subFwd")}
						>
							Select Forward
						</Button>
					</Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
				</Row>
			</>
		);
	};

	const displayEmptyState = (position) => {
		switch (position) {
			case "gk":
				return gkEmptyState();
			case "mid":
				return midEmptyState();
			case "def":
				return defEmptyState();
			case "fwd":
				return fwdEmptyState();
			default:
				return subEmptyState();
		}
	};

	return (
		<div className="teams-list-container px-3 max-h-860px overflow-y-auto">
			<div className="bg-white h-full">
				{/* GK */}
				<div className="gk">
					<div className="heading bg-tw-yellow py-2 px-6 font-bold">
						<Row className="justify-between">
							<Col lg={10}>
								<h3>Goal Keeper</h3>
							</Col>
							<Col lg={12}>
								<Row>
									<Col lg={8}>
										<h3>SB</h3>
									</Col>
									<Col lg={8}>
										<h3>TP</h3>
									</Col>
									<Col lg={8}>
										<h3>Fix</h3>
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
					<div className="players text-regular">
						{displayEmptyState("gk")}
						{displayGkPlayers()}
					</div>
				</div>
				{/* DEFENDERS */}
				<div className="defenders">
					<div className="heading bg-tw-green-light py-2 px-6 font-bold">
						<Row className="justify-between">
							<Col lg={10}>
								<h3>Defenders</h3>
							</Col>
							<Col lg={12}>
								<Row>
									<Col lg={8}>
										<h3>SB</h3>
									</Col>
									<Col lg={8}>
										<h3>TP</h3>
									</Col>
									<Col lg={8}>
										<h3>Fix</h3>
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
					<div className="players text-regular">
						{displayEmptyState("def")}
						{displayDefenders()}
					</div>
				</div>
				{/* MID FIELDERS */}
				<div className="mid">
					<div className="heading bg-tw-sky-blue py-2 px-6 font-bold">
						<Row className="justify-between">
							<Col lg={10}>
								<h3>Midfielders</h3>
							</Col>
							<Col lg={12}>
								<Row>
									<Col lg={8}>
										<h3>SB</h3>
									</Col>
									<Col lg={8}>
										<h3>TP</h3>
									</Col>
									<Col lg={8}>
										<h3>Fix</h3>
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
					<div className="players text-regular">
						{displayEmptyState("mid")}
						{displayMidfielders()}
					</div>
				</div>
				{/* FORWARDS */}

				<div className="forward">
					<div className="heading bg-tw-red py-2 px-6 font-bold">
						<Row className="justify-between">
							<Col lg={10}>
								<h3 className="text-white">Forwards</h3>
							</Col>
							<Col lg={12}>
								<Row>
									<Col lg={8}>
										<h3 className="text-white">SB</h3>
									</Col>
									<Col lg={8}>
										<h3 className="text-white">TP</h3>
									</Col>
									<Col lg={8}>
										<h3 className="text-white">Fix</h3>
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
					<div className="players text-regular">
						{displayEmptyState("fwd")}
						{displayForwards()}
					</div>
				</div>
				{/* substitutes */}
				<div className="substitutes">
					<div className="heading bg-tw-sky-blue py-2 px-6 font-bold">
						<Row className="justify-between">
							<Col lg={10}>
								<h3>Substitutes</h3>
							</Col>
							<Col lg={12}>
								<Row>
									<Col lg={8}>
										<h3>SB</h3>
									</Col>
									<Col lg={8}>
										<h3>TP</h3>
									</Col>
									<Col lg={8}>
										<h3>Fix</h3>
									</Col>
								</Row>
							</Col>
						</Row>
					</div>
					<div className="players text-regular">
						{displayEmptyState()}
						{displaySubs()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListView;
