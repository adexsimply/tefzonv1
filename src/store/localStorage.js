const STATE = "TEFZON";
const USER_DATA = "TEFZON_USER_DATA";
const TEAM_STATE = "TEFZON_TEAM";

export const saveState = (value) => {
  console.log('saveState')
	const serialisedState = JSON.stringify(value);
	localStorage.setItem(STATE, serialisedState);
};

export const saveUserData = (value) => {
	const serialisedState = JSON.stringify(value);
	localStorage.setItem(USER_DATA, serialisedState);
};

export const loadUserData = () => {
	const serialisedState = localStorage.getItem(USER_DATA);

	if (serialisedState) {
		return JSON.parse(serialisedState);
	} else {
		return null;
	}
};

export const loadState = () => {
	const serialisedState = localStorage.getItem(STATE);

	if (serialisedState) {
		return JSON.parse(serialisedState);
	} else {
		return null;
	}
};

export const clearState = () => {
  // localStorage.removeItem(STATE);
  localStorage.clear();
  console.log(localStorage.length)
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

export const getView = () => {
	const viewState = localStorage.getItem("TEF_VIEW");
	if (viewState) return viewState;
	return null;
};
