import { configureStore } from "@reduxjs/toolkit";
import { pitchReducers } from "../../pages/Teams/PitchSlice";

const store = configureStore({
	reducer: {
		pitch: pitchReducers,
	},
});
export { store };
