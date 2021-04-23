const STATE = "TEFZON";
const TEAM_STATE = "TEFZON_TEAM";

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
export const clearState = () => {
	localStorage.removeItem(STATE);
};
export const saveTeam = (data) => {
	const serialisedState = JSON.stringify(data);
	localStorage.setItem(TEAM_STATE, serialisedState);
};
export const loadTeam = () => {
	const serialisedState = localStorage.getItem(TEAM_STATE);
	if (serialisedState) {
		return JSON.parse(serialisedState);
	} else {
		return null;
	}
};
