/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
	// Step 1: Create a map of stops to the buses that visit them
	let stopBuses = new Map();

	// Loop through each bus route
	for (let bus = 0; bus < routes.length; bus++) {
		// Loop through
		for (let stop of routes[bus]) {
			if (!stopBuses.has(stop)) {
				stopBuses.set(stop, []);
			}
			stopBuses.get(stop).push(bus);
		}
	}

	if (source === target) {
		return 0;
	}

	// if source and target are not included in the bus stops
	if (!stopBuses.has(source) || !stopBuses.has(target)) {
		return -1;
	}

	let queue = [source];

	let visited = new Set();
	let stopsVisited = new Set();

	let buses = 0;

	while (queue.length) {
		let size = queue.length;
		buses++;
		for (let i = 0; i < size; i++) {
			let stop = queue.shift();
			stopsVisited.add(stop);
			for (let bus of stopBuses.get(stop)) {
				if (visited.has(bus)) {
					continue;
				}
				visited.add(bus);
				for (let nextStop of routes[bus]) {
					if (nextStop === target) {
						return buses;
					}
					if (!stopsVisited.has(nextStop)) {
						queue.push(nextStop);
					}
				}
			}
		}
	}

	return -1;
};
