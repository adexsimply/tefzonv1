export const formatString = (name = "", len = 4) => {
	if (name && name.length > len) {
		return `${name.slice(0, len)}...`;
	}
	return name;
};
export const longDate = (date) => {
	var monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	let newDate = new Date(date);
	var day = newDate.getDate();
	var monthIndex = newDate.getMonth();
	var year = newDate.getFullYear();

	return monthNames[monthIndex] + " " + day + " " + year;
};
