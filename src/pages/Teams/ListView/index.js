import React, { useContext, useEffect, useCallback } from "react";
import { Row, Col, Button, Popover } from "antd";
import { TeamContext } from "../../../store/TeamContext";
import Jersey from "../../../assets/img/jersey.svg";
import InfoCircleIcon from "../../../assets/img/icons/info-circle-green.svg";

const ListView = (props) => {
	const {
		setSelectionParams,
		selectedDef,
		selectedFwd,
		selectedGoalKeepers,
		selectedMid,
	} = useContext(TeamContext);

	useEffect(() => {
		window.addEventListener("scroll", handleListScroll);
		return () => {
			window.removeEventListener("scroll", () => console.log("unmounted"));
		};
		// eslint-disable-next-line
	}, []);

	const handleListScroll = useCallback(() => {
		var scroller = window.scrollY;
		props.handleScroll(scroller);
		// eslint-disable-next-line
	}, []);

	const showPopUp = (playerDetail) => {
		return (
			<div>
				<p>{playerDetail.name}</p>
			</div>
		);
	};

	const displayGkPlayers = () => {
		return selectedGoalKeepers.map((players) => {
			console.log(players);
			if (players.is_substitute) {
				return null;
			}
			return (
				<Row
					className="py-2 px-6 justify-between player-row"
					key={players.name}
				>
					<Col lg={10}>
						<div className="flex mr-6">
							<Popover content={() => showPopUp(players)} title={players.name}>
								<img src={InfoCircleIcon} alt="info icon" />
							</Popover>

							<img src={Jersey} className="ml-6" alt="jersey icon" />
							<div
								className="border-0 text-black rounded-none p-0 font-medium ml-4"
								onClick={() => setSelectionParams("gk")}
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
		return selectedDef.map((players) => {
			if (players.is_subtitute) return null;
			return (
				<Row
					className="py-2 px-6 justify-between player-row"
					key={players.name}
				>
					<Col lg={10}>
						<div className="flex mr-6">
							<Popover content={() => showPopUp(players)} title={players.name}>
								<img src={InfoCircleIcon} alt="info icon" />
							</Popover>

							<img src={Jersey} className="ml-6" alt="jersey icon" />
							<div className="border-0 text-black rounded-none p-0 font-medium ml-4">
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
		return selectedMid.map((players) => {
			if (players.is_subtitute) return null;
			return (
				<Row
					className="py-2 px-6 player-row justify-between"
					key={players.name}
				>
					<Col lg={10}>
						<div className="flex mr-6">
							<Popover content={() => showPopUp(players)} title={players.name}>
								<img src={InfoCircleIcon} alt="info icon" />
							</Popover>

							<img src={Jersey} className="ml-6" alt="jersey icon" />
							<div className="border-0 text-black rounded-none p-0 font-medium ml-4">
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
		return selectedFwd.map((players) => {
			if (players.is_subtitute) return null;
			return (
				<Row
					className="py-2 px-6 player-row justify-between"
					key={players.name}
				>
					<Col lg={10}>
						<div className="flex mr-6">
							<Popover content={() => showPopUp(players)} title={players.name}>
								<img src={InfoCircleIcon} alt="info icon" />
							</Popover>

							<img src={Jersey} className="ml-6" alt="jersey icon" />
							<div className="border-0 text-black rounded-none p-0 font-medium ml-4">
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

	const displaySubs = () => {
		const subsArr = [
			...selectedDef,
			...selectedFwd,
			...selectedGoalKeepers,
			...selectedMid,
		];

		return subsArr.map((players) => {
			// eslint-disable-line
			console.log(players);
			if (players.is_substitute) {
				return (
					<Row
						className="py-2 px-6 player-row justify-between"
						key={players.name}
					>
						<Col lg={10}>
							<div className="flex mr-6">
								<Popover
									content={() => showPopUp(players)}
									title={players.name}
								>
									<img src={InfoCircleIcon} alt="info icon" />
								</Popover>

								<img src={Jersey} className="ml-6" alt="jersey icon" />
								<div className="border-0 text-black rounded-none p-0 font-medium ml-4">
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
			}
		});
	};

	const gkEmptyState = () => {
		let contents = [];
		for (let i = selectedGoalKeepers.length; i < 1; i++) {
			contents.push(
				<Row className="py-2 px-6 player-row">
					<Col lg={10}>
						<Button
							className="border-0 text-black rounded-none p-0 font-medium"
							onClick={() =>
								setSelectionParams({ type: "normal", selection: "goalkeeper" })
							}
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
		return contents;
	};

	const midEmptyState = () => {
		let contents = [];
		for (let i = selectedMid.length; i < 4; i++) {
			contents.push(
				<Row className="py-2 px-6 player-row">
					<Col lg={10}>
						<Button
							className="border-0 text-black rounded-none p-0 font-medium"
							onClick={() =>
								setSelectionParams({ type: "normal", selection: "midfielder" })
							}
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
		for (let i = selectedDef.length; i < 3; i++) {
			contents.push(
				<Row className="py-2 px-6 player-row">
					<Col lg={10}>
						<Button
							className="border-0 text-black rounded-none p-0 font-medium"
							onClick={() =>
								setSelectionParams({ type: "normal", selection: "defender" })
							}
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
		for (let i = selectedFwd.length; i < 3; i++) {
			contents.push(
				<Row className="py-2 px-6 player-row">
					<Col lg={10}>
						<Button
							className="border-0 text-black rounded-none p-0 font-medium"
							onClick={() =>
								setSelectionParams({ type: "normal", selection: "attacker" })
							}
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
				{selectedGoalKeepers.length === 2 ? null : (
					<Row className="py-2 px-6 player-row">
						<Col lg={10}>
							<Button
								className="border-0 text-black rounded-none p-0 font-medium"
								onClick={() =>
									setSelectionParams({ type: "sub", selection: "goalkeeper" })
								}
							>
								Select GK
							</Button>
						</Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
					</Row>
				)}
				{selectedDef.length === 4 ? null : (
					<Row className="py-2 px-6 player-row">
						<Col lg={10}>
							<Button
								className="border-0 text-black rounded-none p-0 font-medium"
								onClick={() =>
									setSelectionParams({ type: "sub", selection: "defender" })
								}
							>
								Select Defender
							</Button>
						</Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
					</Row>
				)}
				{selectedMid.length === 5 ? null : (
					<Row className="py-2 px-6 player-row">
						<Col lg={10}>
							<Button
								className="border-0 text-black rounded-none p-0 font-medium"
								onClick={() =>
									setSelectionParams({ type: "sub", selection: "midfielder" })
								}
							>
								Select Midfielder
							</Button>
						</Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
					</Row>
				)}
				{selectedFwd.length === 4 ? null : (
					<Row className="py-2 px-6 player-row">
						<Col lg={10}>
							<Button
								className="border-0 text-black rounded-none p-0 font-medium"
								onClick={() =>
									setSelectionParams({ type: "sub", selection: "attacker" })
								}
							>
								Select Forward
							</Button>
						</Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
						<Col lg={3}></Col>
					</Row>
				)}
			</>
		);
	};

	const displayEmptyState = (position) => {
		switch (position) {
			case "goalkeeper":
				return gkEmptyState();
			case "midfielder":
				return midEmptyState();
			case "defender":
				return defEmptyState();
			case "attacker":
				return fwdEmptyState();
			default:
				return subEmptyState();
		}
	};

	return (
		<div className="teams-list-container px-3 max-h-825px overflow-y-auto">
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
						{displayEmptyState("goalkeeper")}
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
						{displayEmptyState("defender")}
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
						{displayEmptyState("midfielder")}
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
						{displayEmptyState("attacker")}
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
						{displaySubs()}
						{displayEmptyState()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListView;
