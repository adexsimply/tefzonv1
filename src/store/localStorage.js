const STATE = "TEFZON";

export const saveState = (value) => {
	localStorage.setItem(STATE, value);
};

export const loadState = () => {
	const serialisedState = localStorage.getItem(STATE);
	if (serialisedState) {
		return serialisedState;
	} else {
		return null;
	}
};
