function getSequence(dna) {
	return dna.map((pair) => {
		const [seq1, seq2] = pair;

		const freq1 = countChars(seq1);
		const freq2 = countChars(seq2);

		let diffCount = 0;
		let diffChar1 = "";
		let diffChar2 = "";

		for (let char of new Set([...seq1, ...seq2])) {
			const diff = (freq1[char] || 0) - (freq2[char] || 0);
			if (diff !== 0) {
				diffCount++;

				if (!diffChar1) {
					diffChar1 = char;
				} else {
					diffChar2 = char;
				}
				if (diffCount > 2) return false;
			}
		}

		if (diffCount === 0) return true;

		if (diffCount === 2) {
			return (freq1[diffChar1] - (freq2[diffChar1] || 0)) * (freq1[diffChar2] - (freq2[diffChar2] || 0)) <= 0;
		}
		return false;
	});
}

function countChars(str) {
	return str.split("").reduce((acc, char) => {
		acc[char] = (acc[char] || 0) + 1;
		return acc;
	}, {});
}
