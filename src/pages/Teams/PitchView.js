import React from "react";
import PitchPlayer from "./PitchPlayer";
import Stadium from "../../assets/img/stadium.svg";

const PitchView = () => {
	return (
		<div className="pitch-view-container">
			<div
				className="pitch-stadium-bg w-full  bg-no-repeat"
				style={{ backgroundImage: `url(${Stadium})` }}
			>
				<div className="relative flex justify-center position-container mx-auto">
					<PitchPlayer tagLabel="GK" />
				</div>
				<div className="relative flex justify-center mt-10 position-container mx-auto">
					<PitchPlayer wrapperClassName="mr-8" tagLabel="DEF" />
					<PitchPlayer wrapperClassName="mr-8" tagLabel="DEF" />
					<PitchPlayer tagLabel="DEF" />
				</div>
				<div className="relative flex justify-center mt-12 position-container mx-auto">
					<PitchPlayer wrapperClassName="mr-12" tagLabel="MID" />
					<PitchPlayer wrapperClassName="mr-12" tagLabel="MID" />
					<PitchPlayer wrapperClassName="mr-12" tagLabel="MID" />
					<PitchPlayer tagLabel="MID" />
				</div>
				<div className="relative flex justify-center mt-14 position-container mx-auto">
					<PitchPlayer wrapperClassName="mr-12" tagLabel="FWD" />
					<PitchPlayer wrapperClassName="mr-12" tagLabel="FWD" />
					<PitchPlayer tagLabel="FWD" />
				</div>

				<div className="text-center mt-20">
					<h3 className="f-oswald text-xl font-bold">Subs</h3>
					<div className="border-b-2 border-primary-dark"></div>
				</div>
				<div className="relative flex justify-center mt-8 position-container mx-auto">
					<PitchPlayer wrapperClassName="mr-12" tagLabel="GK" />
					<PitchPlayer wrapperClassName="mr-12" tagLabel="MID" />
					<PitchPlayer tagLabel="FWD" wrapperClassName="mr-12" />
					<PitchPlayer tagLabel="DEF" />
				</div>
			</div>
		</div>
	);
};

export default PitchView;
