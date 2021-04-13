import React from "react";
import { Row, Col, Button } from "antd";

const ListView = (props) => {
	console.log(props.goalKeepers, "===");
	const displayGkPlayers = () => {
		return props.goalKeepers.map((players) => {
			return (
				<Row className="py-2 px-6 player-row">
					<Col lg={10}>
						<p
							className="border-0 text-black rounded-none p-0 font-medium"
							onClick={() => props.setSelection("gk")}
						>
							{players.playerName}
						</p>
					</Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
				</Row>
			);
		});
	};
	const gkEmptyState = () => {
		for (let i = props.goalKeepers.length; i <= 2; i++) {
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
	const midEmptyState = () => {
		// [...Array(5).keys()].map((index) => {
		// 	console.log(index, "button should show");
		// 	return (
		// 		<Row className="py-2 px-6 player-row">
		// 			<Col lg={10}>
		// 				<Button
		// 					className="border-0 text-black rounded-none p-0 font-medium"
		// 					onClick={() => props.setSelection("gk")}
		// 				>
		// 					Select Mid fielder
		// 				</Button>
		// 			</Col>
		// 			<Col lg={3}></Col>
		// 			<Col lg={3}></Col>
		// 			<Col lg={3}></Col>
		// 			<Col lg={3}></Col>
		// 		</Row>
		// 	);
		// });
		// for (let i = props.mid.length; i <= 5; i++) {
		// 	console.log(i, "button should show");
		// 	return (
		// 		<Row className="py-2 px-6 player-row">
		// 			<Col lg={10}>
		// 				<Button
		// 					className="border-0 text-black rounded-none p-0 font-medium"
		// 					onClick={() => props.setSelection("gk")}
		// 				>
		// 					Select Mid fielder
		// 				</Button>
		// 			</Col>
		// 			<Col lg={3}></Col>
		// 			<Col lg={3}></Col>
		// 			<Col lg={3}></Col>
		// 			<Col lg={3}></Col>
		// 		</Row>
		// 	);
		// }
		[1, 2, 3, 4, 5].map((item) => {
			return (
				<Row className="py-2 px-6 player-row">
					<Col lg={10}>
						<Button
							className="border-0 text-black rounded-none p-0 font-medium"
							onClick={() => props.setSelection("gk")}
						>
							Select Mid fielder
						</Button>
					</Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
					<Col lg={3}></Col>
				</Row>
			);
		});
	};
	const displayEmptyState = (position) => {
		switch (position) {
			case "gk":
				return gkEmptyState();
			case "mid":
				return midEmptyState();
			case "def":
				for (let i = props.def.length; i <= 5; i++) {
					console.log(props.def);
					return (
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("gk")}
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
				break;
			case "fwd":
				for (let i = props.fwd.length; i <= 3; i++) {
					return (
						<Row className="py-2 px-6 player-row">
							<Col lg={10}>
								<Button
									className="border-0 text-black rounded-none p-0 font-medium"
									onClick={() => props.setSelection("gk")}
								>
									Select forward
								</Button>
							</Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
							<Col lg={3}></Col>
						</Row>
					);
				}
				break;
			default:
				break;
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
						{displayEmptyState("gk")}
						{displayGkPlayers()}
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
					<div className="players text-regular">{displayEmptyState("def")}</div>
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
					<div className="players text-regular">{midEmptyState}</div>
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
					<div className="players text-regular">{displayEmptyState("fwd")}</div>
				</div>
			</div>
		</div>
	);
};

export default ListView;
