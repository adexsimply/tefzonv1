const STATE = "TEFZON";

export const saveState = (value) => {
	const serialisedState = JSON.stringify(value);
	localStorage.setItem(STATE, serialisedState);
};

export const loadState = () => {
	const serialisedState = localStorage.getItem(STATE);
	if (serialisedState) {
		return serialisedState;
	} else {
		return null;
	}
};
