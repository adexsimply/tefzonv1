import axios from "axios";
import { loadState } from "../store/localStorage";

export const baseURL = "https://tefzon-api.amaofaith.com";
// export const baseURL = "http://64.227.5.44";
// export const baseURL = "https://api.tefzon.com";
// export const baseURL = "http://127.0.0.1:5000";
export const baseURLOLD = "http://157.230.179.121:3333";
// export const baseURL = process.env.REACT_APP_API_DEV_URL;
// "https://api.tefzon.com";

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
					? response.data
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
			const reset = await makeApiCall({
				url: "/reset-password",
				method: "post",
				data: data,
			});
			return resolve(reset);
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

export const getClubs = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const clubs = await makeApiCall({
				url: "/signupTeamList",
				method: "get",
			});
			return resolve(clubs);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getTeam = (teamId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const team = await makeApiCall({
				url: `/viewUserTeam/${teamId}`,
				method: "get",
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			});
			return resolve(team);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getPlayers = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const player = await makeApiCall({
				url: "/playersList",
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(player);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getLeaguePlayers = (leagueId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: `/leaguePlayers/${leagueId}`,
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getUserProfile = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: `/viewUserProfile`,
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

export const createTeam = (teamData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const team = await makeApiCall({
				url: "/createTeam",
				method: "post",
				headers: { Authorization: `Bearer ${getToken()}` },
				data: teamData,
			});
			return resolve(team);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getFixtures = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const fixture = await makeApiCall({
				url: "/weekFixtures",
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(fixture);
		} catch (error) {
			return reject(error);
		}
	});
};

export const editTeam = (teamData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const team = await makeApiCall({
				url: "/editTeam",
				method: "put",
				headers: { Authorization: `Bearer ${getToken()}` },
				data: teamData,
			});
			return resolve(team);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getWalletData = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const walletData = await makeApiCall({
				url: "/wallet_data",
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(walletData);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getBanks = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: "/payment/paystack/get_banks",
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

export const resolveAccount = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: `/payment/paystack/resolve_account_number?account_number=${data.account_number}&bank_code=${data.bank_code}`,
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

export const fundWallet = (data) => {
  return new Promise(async (resolve, reject) => {
		try {
			const fundWalletResponse = await makeApiCall({
				url: "/payment/paystack/initiate_card_transaction",
				method: "post",
				headers: { Authorization: `Bearer ${getToken()}` },
				data: data,
			});
			return resolve(fundWalletResponse);
		} catch (error) {
			return reject(error);
		}
	});
}

export const verifyFundWallet = (data) => {
  return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: "/payment/paystack/verify_transaction",
				method: "post",
				headers: { Authorization: `Bearer ${getToken()}` },
				data: data,
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
}

export const getTefzonLeagues = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: "/SystemVirtualLeagues",
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getLeagueInfo = (leagueId) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: `/league/${leagueId}`,
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getRealLeagues = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: "/SystemRealLeagues",
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

export const createUserTeam = (data) => {
  return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: "/createLeague",
				method: "post",
				headers: { Authorization: `Bearer ${getToken()}` },
				data: data,
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
}

export const getAllUserTeam = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: "/getAllUserTeams",
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

export const joinLeague = (joinData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: `/joinLeague/${joinData.league_id}/${joinData.team_id}`,
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

export const joinPrivateLeague = (joinData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: `/joinPrivateLeague`,
				method: "post",
				headers: { Authorization: `Bearer ${getToken()}` },
				data: joinData,
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

export const checkPlayerTeamInLeague = (league_id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: `/checkPlayerTeamInLeague/${league_id}`,
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getAllUserCreatedLeagues = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: '/allUserCreatedLeagues',
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

export const getAllUserJoinedLeagues = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await makeApiCall({
				url: '/allUserJoinedLeagues',
				method: "get",
				headers: { Authorization: `Bearer ${getToken()}` },
			});
			return resolve(response);
		} catch (error) {
			return reject(error);
		}
	});
};

// /joinLeague/:league_id/:team_id