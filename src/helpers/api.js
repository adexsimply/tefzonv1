import axios from "axios";
import { loadState } from "../store/localStorage";

// export const baseURL = "http://127.0.0.1:3333";
export const baseURL = "http://157.230.179.121:3333";

export const getToken = () => {
	return loadState();
};

const makeApiCall = (axiosConfigObj) => {
	const config = {
		...axiosConfigObj,
		baseURL,
	};
	return new Promise((resolve, reject) => {
		return axios(config)
			.then((res) => {
				if (res.status === "fail") {
					return reject(res);
				}

				return resolve(res.data);
			})
			.catch((err) => {
				const { response, request, message } = err;
				let error = response
					? response.data.message
					: request
					? "Network error, please try again later"
					: message;
				if (response) {
					if (!response.data.message) {
						error = response;
					}
				}
				return reject(error);
			});
	});
};

export const loginUser = (userData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const login = await makeApiCall({
				url: "/login",
				method: "post",
				data: userData,
			});
			return resolve(login);
		} catch (error) {
			return reject(error);
		}
	});
};

export const registerUser = (userData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const register = await makeApiCall({
				url: "/register",
				method: "post",
				data: userData,
			});
			return resolve(register);
		} catch (error) {
			return reject(error);
		}
	});
};
export const forgotUserPassword = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const forgotPwd = await makeApiCall({
				url: "/forgot-password",
				method: "post",
				data: data,
			});
			return resolve(forgotPwd);
		} catch (error) {
			return reject(error);
		}
	});
};
export const resetUserPassword = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const forgotPwd = await makeApiCall({
				url: "/forgot-password",
				method: "post",
				data: data,
			});
			return resolve(forgotPwd);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getCountries = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const countries = await makeApiCall({
				url: "/getMetadata",
				method: "get",
			});
			return resolve(countries);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getTeams = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const teams = await makeApiCall({
				url: "/signupTeamList",
				method: "get",
			});
			return resolve(teams);
		} catch (error) {
			return reject(error);
		}
	});
};
