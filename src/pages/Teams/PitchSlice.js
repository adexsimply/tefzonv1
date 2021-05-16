import { createSlice } from "@reduxjs/toolkit";

const pitchSlice = createSlice({
	name: "pitch",
	initialState: { draggedPlayer: null, dragStatus: "inactive" },
	reducers: {
		updateDragStatus: (state, action) => {
			state.dragStatus = action.payload;
		},
	},
});

const { actions: pitchActions, reducer: pitchReducers } = pitchSlice;

export { pitchActions, pitchReducers };
