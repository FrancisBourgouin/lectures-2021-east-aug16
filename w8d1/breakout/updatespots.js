const days = [
	{
		id: 1,
		name: "Monday",
		appointments: [1, 2],
		interviewers: [1, 2],
		spots: 1,
	},
];

const appointments = {
	1: {
		id: 1,
		time: "12pm",
		interview: {
			student: "Lydia Miller-Jones",
			interviewer: 1,
		},
	},
	2: {
		id: 2,
		time: "1pm",
		interview: null,
	},
};

const interviewers = {
	1: {
		id: 1,
		name: "Sylvia Palmer",
		avatar: "https://i.imgur.com/LpaY82x.png",
	},
	2: {
		id: 2,
		name: "Tori Malcolm",
		avatar: "https://i.imgur.com/Nmx0Qxo.png",
	},
};

const state = {
	day: "Monday",
	days,
	appointments,
	interviewers,
};

const updateSpots = () => {
	// Update the value of the key spots, inside a specific day inside the days array of the state object.
	// .find() to find the day object inside days []
	// .findIndex() to find the day index inside days []
	// Spots are the amount of interviews with null as a value
	// .filter() to find all the nulls
	// .length to count
	// Appointments for a day are: ids of relevant appointments are inside the day object inside the days array
	// We use length to check how many
	// To update safely
	// Spread the day object
	// Spread the days array
	// Put the updated day object inside the array (index)
};
