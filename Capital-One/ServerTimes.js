function solution(startupTimes, shutdownTimes, currentTime) {
	let totalCost = 0;
	const currentTimeMinutes = timeToMinutes(currentTime);

	for (let i = 0; i < startupTimes.length; i++) {
		const startupTimeMinutes = timeToMinutes(startupTimes[i]);
		let shutdownTimeMinutes;

		if (shutdownTimes[i] !== "None") {
			shutdownTimeMinutes = timeToMinutes(shutdownTimes[i]);
			if (shutdownTimeMinutes < startupTimeMinutes) {
				continue; // Server is started after shutting down
			}
		} else {
			shutdownTimeMinutes = currentTimeMinutes;
		}

		const runTime = Math.max(0, shutdownTimeMinutes - startupTimeMinutes);
		totalCost += runTime;
	}

	return totalCost;
}

function timeToMinutes(time) {
	const [hours, minutes] = time.split(":").map(Number);
	return hours * 60 + minutes;
}
