const timeRemaining = (launchDate) => {
	const today = new Date();
	const launch = new Date(launchDate);

	const timeDifferenceInS = (launch.getTime() - today.getTime()) / 1000;

	const days = Math.floor(timeDifferenceInS / 86400);
	const hours = Math.floor((timeDifferenceInS % 86400) / 3600);
	const minutes = Math.floor(((timeDifferenceInS % 86400) % 3600) / 60);

	const time = {
		days,
		hours,
		minutes,
	};

	return time;
};
