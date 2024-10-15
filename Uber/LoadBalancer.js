function solution(serversPowers, events) {
	const requestCounts = new Array(serversPowers.length).fill(0);
	const failedServers = new Set();
	let currentServer = 0;
	let remainingPowers = [...serversPowers];

	for (const event of events) {
		if (event === "REQUEST") {
			let requestHandled = false;
			let serversTried = 0;

			while (!requestHandled && serversTried < serversPowers.length) {
				if (!failedServers.has(currentServer) && remainingPowers[currentServer] > 0) {
					requestCounts[currentServer]++;
					remainingPowers[currentServer]--;
					requestHandled = true;
				} else {
					currentServer = (currentServer + 1) % serversPowers.length;
					serversTried++;

					// reset powers if we've completed a full cycle
					if (currentServer === 0) {
						remainingPowers = serversPowers.map((power, index) => (failedServers.has(index) ? 0 : power));
					}
				}
			}

			// move to next server only if the current one has no remaining power
			if (remainingPowers[currentServer] === 0) {
				currentServer = (currentServer + 1) % serversPowers.length;
			}
		} else if (event.startsWith("FAIL")) {
			const idx = parseInt(event.split(" ")[1]);
			failedServers.add(idx);
			remainingPowers[idx] = 0;
		}
	}

	let maxRequests = 0;
	let serverIndex = -1;
	for (let i = 0; i < requestCounts.length; i++) {
		if (requestCounts[i] > maxRequests || (requestCounts[i] === maxRequests && i > serverIndex)) {
			maxRequests = requestCounts[i];
			serverIndex = i;
		}
	}

	return serverIndex;
}
