/**
 * @param {string[], string[], number[]} username, timestamp, website
 * @return {string[]}
 */
var mostVisitedPattern = function (username, timestamp, website) {
	// Step 1: Group visits by user, including timestamp
	let userVisits = new Map();

	// Loop through each visit
	for (let i = 0; i < username.length; i++) {
		// If the user is not already in the map, add them with an empty array
		if (!userVisits.has(username[i])) {
			userVisits.set(username[i], []);
		}
		// Push the current visit (timestamp and website) into the user's list of visits
		userVisits.get(username[i]).push([timestamp[i], website[i]]);
	}

	// Step 2: Sort each user's visits by timestamp
	for (let [user, visits] of userVisits) {
		// Sort the list of visits based on the timestamp (first element in each pair)
		visits.sort((a, b) => a[0] - b[0]);
	}

	// Step 3: Count 3-sequences
	let sequenceCount = new Map();

	// Loop through each user's visits
	for (let [user, visits] of userVisits) {
		// Extract the list of websites visited by this user
		let websites = visits.map((visit) => visit[1]);
		// Use a Set to ensure we only count unique sequences for this user
		let sequences = new Set();

		// Generate all possible 3-sequence combinations
		for (let i = 0; i < websites.length; i++) {
			for (let j = i + 1; j < websites.length; j++) {
				for (let k = j + 1; k < websites.length; k++) {
					// Join the three websites into a single string representing the sequence
					let sequence = [websites[i], websites[j], websites[k]].join(",");
					// Add this sequence to the Set to ensure uniqueness
					sequences.add(sequence);
				}
			}
		}

		// Count how many times each sequence occurs across all users
		for (let sequence of sequences) {
			// If this sequence hasn't been seen before, initialize its count
			if (!sequenceCount.has(sequence)) {
				sequenceCount.set(sequence, 0);
			}
			// Increment the count for this sequence
			sequenceCount.set(sequence, sequenceCount.get(sequence) + 1);
		}
	}

	// Step 4: Find the sequence with the highest count
	let maxCount = 0;
	let result = "";

	// Loop through the map of sequences to find the one with the highest count
	for (let [sequence, count] of sequenceCount) {
		// Update the result if this sequence has a higher count,
		// or if it has the same count but is lexicographically smaller
		if (count > maxCount || (count === maxCount && sequence < result)) {
			maxCount = count;
			result = sequence;
		}
	}

	// Return the result sequence as an array of three websites
	return result.split(",");
};
