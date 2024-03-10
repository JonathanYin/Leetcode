function groomLog(words) {
	function minSubstitutions(word) {
		let substitutions = 0;
		for (let i = 0; i < word.length - 1; i++) {
			if (word[i] === word[i + 1]) {
				substitutions++;
				// Skip the next character to avoid double counting
				i++;
			}
		}
		return substitutions;
	}

	return words.map((word) => minSubstitutions(word));
}
